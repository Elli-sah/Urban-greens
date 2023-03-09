<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import { mapState } from 'vuex'
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
    },
    watch: {
      myEvents(newVal) {
        Object.assign(this.calendarOptions, {
          events: newVal
        })
      }
    },
    data() {
      return {
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
              (item) => item.title === info.event.title
            )
            this.eventIndex = this.myEvents.indexOf(this.selectedEvent)
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
          title: this.titleInput,
          start: this.selectedDate,
          description: this.descriptionInput
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
  <div id="calendar-container">
    <form @submit.prevent="addEvent">
      <div class="showEventContainer" v-show="showModal">
        <div class="date-close-container">
          <p>{{ selectedDate }}</p>
          <i @click="closeModal" id="remove-icon" class="bi bi-x-lg" />
        </div>
        <input
          type="radio"
          name="options"
          id="water-check"
          value="Vattnat"
          v-model="titleInput"
          @click="selectWater"
        /><label for="water-check">Vattnat idag</label>
        <input
          type="radio"
          name="options"
          id="event-check"
          v-model="showDiv"
          @click="selectOther"
          value="true"
        /><label for="event-check">Egen händelse</label>
        <div v-if="showDiv === 'true'">
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
        <button type="submit" class="button">submit</button>
      </div>
    </form>

    <div class="showEventContainer" v-show="showEvent">
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

  #calendar-container {
    margin: 50px 0;
    background-color: #ffff;
    border-radius: 20px;
    padding: 20px;
  }
  .showEventContainer {
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: white;
    padding: 20px;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: space-around;
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
</style>
