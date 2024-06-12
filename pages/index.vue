<script setup lang="ts">
import useLayoutsStore from '~/stores/configs/LayoutsStore';

const layoutStore = useLayoutsStore()
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore)

const clickDiv = () => {
  titlePath.value = 'changed2'
}

const isDark = usePreferredDark()
</script>

<template>
  <div>
    Welkam Nibros
  </div>
</template>