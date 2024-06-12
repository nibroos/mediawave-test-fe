<template>
  <Teleport to="body">
    <div
      class="modal fixed z-50 flex h-screen w-full items-center justify-center overflow-y-auto bg-black/50 backdrop-blur-sm"
      v-show="isOpen"
      @click="handleOutsideClick"
    >
      <div
        :class="`${size} ${customClass}`"
        class="modal-content container mx-auto my-auto max-h-[80vh] overflow-auto rounded-md bg-white px-5 py-5"
      >
        <slot></slot>
      </div>
      <!-- <div class=""></div> -->
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['isOpen', 'size', 'customClass'])
const emit = defineEmits(['update:isOpen'])
const size = ref('w-11/12')
if (props.size) {
  if (props.size == 'xl') {
    size.value = 'w-11/12'
  } else if (props.size == 'md') {
    size.value = 'lg:w-9/12 w-full'
  } else if (props.size == 'sm') {
    size.value = ' lg:w-8/12 w-full'
  } else if (props.size == 'xs') {
    size.value = 'lg:w-5/12 md:w-11/12 w-full'
  } else {
    size.value = props.size
  }
}

const handleOutsideClick = (event: MouseEvent) => {
  // Check if the click is on the modal's backdrop; if so, close the modal
  if (event.target === event.currentTarget) {
    emit('update:isOpen', false)
  }
}
const onEscapePress = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) {
    emit('update:isOpen', false)
  }
}

onMounted(() => {
  window.addEventListener('keydown', onEscapePress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onEscapePress)
})
</script>
