<script setup lang="ts">
import useCasesStore from '~/stores/CasesStore';

const casesStore = useCasesStore()
const { main, query, references } =
  storeToRefs(casesStore)

const isDark = usePreferredDark()

onMounted(async () => {
  await casesStore.getTopCases()
  await casesStore.getRegions()
})
</script>

<template>
  <div class="px-[15vw] w-full flex flex-col gap-5">

    <div class="flex flex-row gap-3">
      <form class="flex flex-row w-2/3 gap-3" @submit.prevent="casesStore.getAllCovidCase()">
        <d-date-picker-light v-model="query.all_covid_case.date" />

        <d-autocomplete-client v-model="query.all_covid_case.iso" :items="references?.regions ?? []" item-title="name"
          item-value="iso" max-length-display="40" :is-display-multiple-key="true" label="Region" class="w-full"
          :display-multiple-keys="['iso', 'name']" />


        <d-submit-button @click:submit="casesStore.getAllCovidCase()" @click:clear="casesStore.clearQuery()" />
      </form>

    </div>

    <div class="flex flex-row justify-center items-start gap-5">
      <div class="flex flex-col w-7/12">
        <div class="flex flex-col gap-2 p-5  bg-white border border-zinc-200 rounded-t-lg">
          <h1 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Number of COVID-19 cases reported to WHO (cumulative total)
          </h1>
          <span>World</span>
        </div>

        <div class="flex flex-col gap-3 p-5 border border-zinc-200 bg-white rounded-b-lg">
          <p-maps />
        </div>
      </div>

      <div class="flex flex-col gap-5 w-5/12">

        <div class="flex flex-col gap-3 p-5 border border-zinc-200 bg-white rounded-lg">
          <div class="flex gap-3 items-center">
            <h1 class="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
              {{ formatNumberSeparator(main.value[0]?.VALUE_NUMERIC, 0, 0) }}
            </h1>
            <div class="flex flex-col">
              <h2 class="text-lg font-bold text-amber-600">
                <span>
                  {{ main.value[0]?.VALUE_NUMERIC >= main.value[1]?.VALUE_NUMERIC ? '+' : '' }}
                </span>
                <span>
                  {{ formatNumberSeparator(main.value[0]?.VALUE_NUMERIC - main.value[1]?.VALUE_NUMERIC, 0, 0) }}
                </span>
              </h2>
              <h2 class="text-lg font-bold text-amber-600 whitespace-nowrap">
                <span>
                  {{ main.value[0]?.VALUE_NUMERIC >= main.value[1]?.VALUE_NUMERIC ? 'increase' : 'decrease' }}
                </span>
                on previous 7 days
              </h2>
            </div>
          </div>

          <div class="flex flex-col gap-1 w-full">
            <h1 class="text-2xl font-bold text-zinc-700">Reported COVID-19 cases</h1>
            <span class="text-zinc-700">World, 7 days to {{ main.value[0]?.DIM_TIME }}</span>
          </div>

        </div>

        <div class="flex flex-col border border-zinc-200 bg-white rounded-lg">
          <div class="flex flex-col gap-1 p-5 border-b border-zinc-200">
            <h1 class="text-3xl font-bold text-zinc-700">Number of COVID-19 cases reported to WHO (cumulative total)
            </h1>
            <span class="text-zinc-700">World</span>
          </div>

          <div class="flex flex-col gap-1 p-5">
            <h1 class="text-3xl font-bold text-zinc-700">TABLE</h1>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>