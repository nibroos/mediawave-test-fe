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
  value: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <v-text-field
    :label="Label"
    variant="outlined"
    :model-value="value"
    density="compact"
    :placeholder="placeholder"
    :type="type"
  ></v-text-field>
</template>
