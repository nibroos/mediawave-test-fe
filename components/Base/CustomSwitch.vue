<template>
  <v-switch
    v-model="ex11"
    color="success"
    value="success"
    hide-details
    inset
  ></v-switch>
</template>

<script>
  export default {
    data() {
      return {
        ex11: [
          'red',
          'indigo',
          'orange',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'error',
          'red-darken-3',
          'indigo-darken-3',
          'orange-darken-3',
        ],
      }
    },
  }
</script>
