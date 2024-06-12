<script setup lang="ts">
interface IProps {
  cta?: string
  noIcon?: boolean
  class?: string | string[]
  textClass?: string | string[]
  type?: 'button' | 'submit'
  icon?: string
  iconSize?: number | string
  disabled?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  cta: 'Back',
  noIcon: false,
  class: '',
  textClass: 'text-black',
  type: 'button',
  icon: 'mdi-keyboard-backspace',
  iconSize: 25,
  disabled: false
})

const emits = defineEmits(['click'])

const handleClick = () => {
  emits('click')
}
</script>

<template>
  <button
    v-if="type == 'submit'"
    :class="[
      props.class,
      'flex cursor-pointer items-center gap-x-2 !border border-solid p-2 transition-all ease-in-out hover:bg-zinc-100 sm:gap-x-1 md:gap-x-2',
      { 'cursor-not-allowed !bg-zinc-400 hover:!bg-zinc-300': props.disabled }
    ]"
    @click="handleClick"
    :type="type"
    :disabled="props.disabled"
  >
    <v-icon :icon="props.icon" :size="iconSize" v-if="!props.noIcon" />
    <div :class="[props.textClass, 'font-medium']">
      {{ props.cta }}
    </div>
  </button>
  <div
    v-else
    :class="[
      props.class,
      'flex cursor-pointer items-center gap-x-2 p-2 transition-all ease-in-out hover:bg-zinc-100 sm:gap-x-1 md:gap-x-2',
      { 'cursor-not-allowed !bg-zinc-400 hover:!bg-zinc-300': props.disabled }
    ]"
    @click="handleClick"
    :type="type"
    :disabled="props.disabled"
  >
    <v-icon :icon="props.icon" :size="iconSize" v-if="!props.noIcon" />
    <div :class="[props.textClass, 'font-medium']">
      {{ props.cta }}
    </div>
  </div>
</template>
