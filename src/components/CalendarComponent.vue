<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import { mapState } from 'vuex'
  import AWN from 'awesome-notifications'
  import moment from 'moment-with-locales-es6'
  import 'moment/locale/sv'
  moment.locale('sv')

  export default {
    components: {
      FullCalendar
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser,
        myEvents: (state) => {
          if (state.loggedInUser) {
            return state.users[state.loggedInUser.user]?.calendar || []
          } else {
            return []
          }
        }
      })

      // showInputDiv() {
      //   return this.showDiv === true
      // }
    },
    created() {
      this.calendarOptions.events = this.myEvents
      this.findWaterDate()
      // for (let x = 0; x < this.myEvents.length; x++) {
      //   this.calendarOptions.events.push(this.myEvents[x])
      //   console.log('myEvent', this.myEvent)
      // }

      const today = moment().format('YYYY-MM-DD')
      const eventsOnDate = this.myEvents.filter((item) => item.start === today)
      if (eventsOnDate.length > 0) {
        for (let i = 0; i < eventsOnDate.length; i++) {
          if (eventsOnDate[i].title !== 'Vattnat') {
            console.log('hej', eventsOnDate[i].title)
            this.notifier.success(eventsOnDate[i].title, {
              labels: {
                success: 'Idag ',
                bgColor: 'green'
              }
            })
          }
        }
      }
    },

    data() {
      return {
        notifier: new AWN(),
        diff: '',
        date: '',
        selectedEvent: null,
        titleInput: '',
        descriptionInput: '',
        selectedDate: null,
        showModal: false,
        showEvent: false,
        eventDescription: '',
        eventDate: '',
        eventTitle: '',
        eventIndex: '',
        showDiv: 'false',
        plantsWatered: false,
        todaysDate: new Date().toISOString().slice(0, 10), //Today´s date in FullCalendar format
        calendarOptions: {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          buttonText: {
            today: 'Idag'
          },

          events: [
            // {
            //   title: 'My event',
            //   start: '2023-03-10',
            //   description: 'More information about my event.'
            // },
          ],

          eventColor: '#e1ba6b',
          eventTextColor: 'black',
          firstDay: 1,
          locale: 'sv',

          eventClick: (info) => {
            this.eventDate = info.event.startStr
            this.eventDescription = info.event.extendedProps.description
            this.eventTitle = info.event.title
            this.showEvent = true
            this.selectedEvent = this.myEvents.find(
              (item) => item.id === info.event.id
            )
            this.eventIndex = this.myEvents.indexOf(this.selectedEvent)
            this.showModal = false
            console.log('eventIndex', this.eventIndex)
            console.log('info.event', info.event.title)
            console.log('selectedEvent', this.selectedEvent)
            console.log('myEvents', this.myEvents)
            // this.selectedEvent = info.event
            // console.log('event', this.selectedEvent)
          },
          dateClick: (info) => {
            this.selectedDate = info.dateStr
            this.showModal = true
            this.showEvent = false
          }
        }
      }
    },
    methods: {
      closeModal() {
        this.showModal = false
      },
      closeEvent() {
        this.showEvent = false
      },
      addEvent() {
        const event = {
          id: this.selectedDate,
          title: this.titleInput,
          start: this.selectedDate,
          description: this.descriptionInput,
          backgroundColor: this.titleInput === 'Vattnat' ? '#83d5f8' : '',
          borderColor: this.titleInput === 'Vattnat' ? '#83d5f8' : ''
        }
        console.log('value:', this.titleInput)
        console.log('date', this.selectedDate)
        this.$store.commit('addEventToUserCalendar', event)
        // this.calendarOptions.events.push(event)

        this.showModal = false
        this.descriptionInput = ''
        this.titleInput = ''
      },

      removeEvent(eventIndex) {
        console.log('index', eventIndex)

        this.$store.commit('removeEvent', {
          user: this.loggedInUser.user,
          index: eventIndex
        })
        this.showEvent = false
      },
      selectWater() {
        this.showDiv = 'false'
        console.log(this.showDiv)
      },
      selectOther() {
        this.titleInput = ''
      },
      findWaterDate() {
        for (let i = this.myEvents.length - 1; i >= 0; i--) {
          if (this.myEvents[i].title === 'Vattnat') {
            this.date = moment(this.myEvents[i].start)
            this.diff = moment.duration(
              moment().subtract(1, 'days').diff(this.date)
            )

            this.$store.commit('updateDateDiff', this.diff.humanize())
            break
          }
        }
      }
    }
  }
</script>
<template>
  <div id="plant-calendar">
    <h2>Växtkalender</h2>
    <div id="plant-calendar-box">
      <p id="text-1">
        Här kan du enkelt lägga till kommande händelser som att beskära dina
        växter, ge dem näring eller när det är dags att plantera om.
      </p>
      <p id="text-2">
        Du får notifikationer om händelser som sker idag och du kan även lägga
        till när du har vattnat dina växter.
      </p>
      <p id="text-3">
        Med vår växtkalender kommer du ha full koll på dina gröna vänner och
        kunna ge dem precis vad de behöver vid rätt tillfälle.
      </p>
    </div>
  </div>
  <div id="calendar-container">
    <form @submit.prevent="addEvent">
      <div class="showEventContainer" v-show="showModal">
        <div class="date-close-container">
          <p>{{ selectedDate }}</p>
          <i @click="closeModal" id="remove-icon" class="bi bi-x-lg" />
        </div>
        <div id="createEventContainer">
          <div id="radio-event">
            <div v-if="this.selectedDate <= todaysDate">
              <input
                type="radio"
                name="options"
                id="water-check"
                value="Vattnat"
                v-model="titleInput"
                @click="selectWater"
              /><label for="water-check">Vattnat idag</label>
            </div>
            <div>
              <input
                type="radio"
                name="options"
                id="event-check"
                v-model="showDiv"
                @click="selectOther"
                value="true"
              /><label for="event-check">Egen händelse</label>
            </div>
          </div>
          <div id="input-box" v-if="showDiv === 'true'">
            <input
              type="text"
              v-model="titleInput"
              placeholder="Namn på händelse"
              required
            />
            <input
              type="text"
              v-model="descriptionInput"
              placeholder="Beskrivning"
            />
          </div>
          <button :disabled="!titleInput" type="submit" class="button">
            Lägg till
          </button>
        </div>
      </div>
    </form>

    <div class="show-event-container" v-show="showEvent">
      <div class="date-close-container">
        <p>{{ eventDate }}</p>
        <i @click="closeEvent" class="bi bi-x-lg" />
      </div>
      <h3>{{ eventTitle }}</h3>
      <p>{{ eventDescription }}</p>
      <button class="button" type="submit" @click="removeEvent(eventIndex)">
        Ta bort
      </button>
      <!-- <div class="modal-blur" @click="closeEvent" /> -->
    </div>

    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style>
  /* input {
    text-transform: capitalize;
  } */
  #input-box {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #input-box > input {
    width: 90%;
    margin: auto;
    border-radius: 30px;
    border-style: none;
    padding: 7px;
    margin-bottom: 5px;
  }
  #radio-event {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 110px;
  }
  #create-event-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }
  #plant-calendar {
    margin-top: 50px;
    background-color: rgb(255, 255, 255, 0.9);
    border-radius: 20px 20px 0 0;
    padding: 20px;
    border-bottom: solid 1px #e8cac3;
  }

  #plant-calendar-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  #text-1,
  #text-2,
  #text-3 {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    max-width: 300px;
  }
  #text-1 {
    background-color: #f0e8e2;
  }
  #text-2 {
    background-color: #e1ba6b;
  }
  #text-3 {
    background-color: #e8cac3;
  }
  #calendar-container {
    margin-bottom: 50px;
    background-color: rgb(255, 255, 255, 0.9);
    border-radius: 0 0 20px 20px;
    padding: 20px;
  }
  .show-event-container {
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: rgb(252, 252, 252);
    padding: 20px;
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  .date-close-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 10px;
  }
  /*
  #set-event {
    width: 300px;
    height: 200px;
    background-color: #f6f5f1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 215px;
    overflow-x: hidden;
    overflow-y: auto;
    left: 10;
    z-index: 10;
  } */

  :root {
    --fc-border-color: #373030;
    --fc-neutral-text-color: #030000;
    --fc-button-bg-color: #2c3e50;
  }
  .fc-daygrid-day-number {
    color: black;
  }
  .fc-day-header {
    background-color: red;
    color: white;
    font-weight: bold;
  }
  @media (min-width: 650px) {
    #plant-calendar-box {
      flex-direction: row;
      align-items: normal;
      max-width: 800px;
    }
    #text-1,
    #text-2,
    #text-3 {
      width: 33%;
    }
  }
  @media (min-width: 900px) {
    #calendar-container {
      width: 800px;
      margin: auto;
    }
    #plant-calendar {
      margin: 50px auto 0 auto;
      margin-top: 100px;

      width: 800px;
    }
  }
</style>
