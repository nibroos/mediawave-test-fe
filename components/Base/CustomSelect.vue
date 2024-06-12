<template>
  <v-select
  label="Select"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  variant="outlined"> </v-select>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: "placeholder",
  },
  type: {
    type: String,
    default: "text",
  },
  class: {
    type: String,
    default: "",
  },
  Label: {
    type: String,
    default: "",
  },
});
</script>