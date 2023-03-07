<script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'

  export default {
    components: {
      FullCalendar
    },
    data() {
      return {
        selectedDate: null,
        showModal: false,
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
          eventClick: function (info) {
            alert(info.event.extendedProps.description)
          },
          dateClick: function (info) {
            this.selectedDate = info.dateStr
            this.showModal = true
            console.log('hej', this.selectedDate)
            console.log('show', this.showModal)
          }.bind(this)
        }
      }
    },
    methods: {
      closeModal() {
        this.showModal = false
      },
      addEvent() {
        const event = {
          title: 'New event',
          start: this.selectedDate,
          description: this.descriptionInput
        }
        this.calendarOptions.events.push(event)
        this.showModal = false
        this.descriptionInput = ''
      }
    }
  }
</script>
<template>
  <div id="modalbobo" v-show="showModal">
    <p>{{ selectedDate }}</p>
    <input type="text" v-model="descriptionInput" />
    <button @click="addEvent">submit</button>
    <button @click="closeModal">Stäng</button>
  </div>
  <FullCalendar :options="calendarOptions" />
</template>

<style>
  #modalbobo {
    width: 400px;
    height: 400px;
    background-color: #f6f5f1;
    display: flex;
    align-items: center;
    flex-direction: column;
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
