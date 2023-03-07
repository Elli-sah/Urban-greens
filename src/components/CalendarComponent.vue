<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import { mapState } from 'vuex'

  export default {
    components: {
      FullCalendar
    },
    computed: {
      ...mapState({
        myEvents: (state) => state.users[state.loggedInUser.user].calendar,
        loggedInUser: (state) => state.loggedInUser
      })
    },
    created() {
      for (let x = 0; x < this.myEvents.length; x++) {
        this.calendarOptions.events.push(this.myEvents[x])
      }
    },
    data() {
      return {
        titleInput: '',
        descriptionInput: '',
        selectedDate: null,
        showModal: false,
        showEvent: false,
        eventDescription: '',
        calendarOptions: {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          buttonText: {
            month: 'month'
          },

          events: [
            {
              title: 'My event',
              start: '2023-03-10',
              description: 'More information about my event.'
            }
          ],
          eventColor: '#ffffff',
          eventTextColor: 'black',
          eventClick: (info) => {
            // alert(
            //   `Händelse: ${info.event.title}\n` +
            //     `Beskrivning: ${info.event.extendedProps.description}`
            // )

            this.eventDescription = info.event.extendedProps.description
            this.showEvent = true
            console.log(this.showEvent)
            console.log(this.eventDescription)
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
        this.$store.commit('addEventToUserCalendar', event)
        this.calendarOptions.events.push(event)

        this.showModal = false
        this.descriptionInput = ''
        this.titleInput = ''
      }
    }
  }
</script>
<template>
  <div id="modalbobo" v-show="showModal">
    <div id="date-close-container">
      <p>{{ selectedDate }}</p>
      <i @click="closeModal" id="remove-icon" class="bi bi-x-lg" />
    </div>
    <input type="text" v-model="titleInput" placeholder="Namn på händelse" />
    <input type="text" v-model="descriptionInput" placeholder="Beskrivning" />
    <button @click="addEvent">submit</button>
  </div>
  <div id="showEventContainer" v-show="showEvent">
    <div id="close-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        molestias dicta omnis voluptatum voluptate neque illo ex corrupti nobis
        ipsam, blanditiis eius dolores voluptatem itaque amet adipisci quidem
        labore fugiat.
      </p>
      <p>{{ eventDescription }}</p>
      <i @click="closeEvent" class="bi bi-x-lg" />
    </div>
  </div>
  <FullCalendar :options="calendarOptions" />
</template>

<style>
  #showEventContainer {
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
  }
  #date-close-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 10px;
  }
  #modalbobo {
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
  }

  :root {
    --fc-border-color: #373030;
    --fc-neutral-text-color: #030000;
    --fc-button-bg-color: #2c3e50;
  }
  .fc-daygrid-day-number {
    color: black;
  }
  .fc-day-header {
    color: rgb(0, 0, 0);
  }
</style>
