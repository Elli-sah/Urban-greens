<script>
  export default {
    props: {
      image: { required: true, type: String },
      title: { required: true, type: String },
      temperature: { required: true, type: String }
    },
    data() {
      return {
        plant: ''
      }
    },

    methods: {
      close() {}
    }
  }
</script>
