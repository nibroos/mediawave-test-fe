<template>
  <highchart :options="chartOptions"></highchart>
</template>

<script setup>
import Highcharts from 'highcharts'
import useCasesStore from '~/stores/CasesStore';

const casesStore = useCasesStore();
const { charts } = storeToRefs(casesStore);

const chartOptions = ref({
  chart: {
    type: 'area'
  },
  title: {
    text: 'Recent COVID-19 cases reported to WHO (weekly)',
    align: 'left'
  },
  xAxis: {
    categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
    crosshair: true,
    accessibility: {
      description: 'Countries'
    }
  },
  yAxis: {
    title: {
      text: null
    },
    label: {
      enabled: false
    }
  },
  subtitle: {
    text:
      'Source: World Health Organization',
    align: 'left'
  },
  // tooltip: {
  //   valueSuffix: ' (1000 MT)'
  // },

  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [
            1,
            Highcharts.color(Highcharts.getOptions().colors[0])
              .setOpacity(0).get('rgba')
          ]
        ]
      },
      marker: {
        radius: 2
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },
  series: [
    {
      name: 'Cases reported',
      data: [406292, 260000, 107000, 68300, 27500, 14500]
    },
  ]
});

watch(
  () => charts.value.recent,
  (newVal, oldVal) => {
    chartOptions.value.series[0].data = newVal.data
    chartOptions.value.xAxis.categories = newVal.labels
  },
  { deep: true, immediate: true }
)

onMounted(() => {
  casesStore.getRecentCovidCase()
})

</script>

<!-- <template>
  <div id="chart-container" class="w-full h-96"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import Highcharts from 'highcharts'

const updateChart = (data) => {
  Highcharts.chart('chart-container', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Data COVID-19'
    },
    xAxis: {
      categories: data.map(item => item.region.name)
    },
    yAxis: {
      title: {
        text: 'Jumlah Kasus'
      }
    },
    series: [{
      name: 'Total Confirmed',
      data: data.map(item => item.confirmed)
    }, {
      name: 'Total Deaths',
      data: data.map(item => item.deaths)
    }, {
      name: 'Total Recovered',
      data: data.map(item => item.recovered)
    }]
  })
}

onMounted(async () => {
  try {
    const response = await axios.get('https://api.covid19api.com/summary')
    const countries = response.data.Countries

    // Transform the data to the required format
    const transformedData = countries.map(country => ({
      confirmed: country.TotalConfirmed,
      deaths: country.TotalDeaths,
      recovered: country.TotalRecovered,
      region: {
        name: country.Country,
        lat: Math.random() * 180 - 90, // Dummy lat for demonstration
        long: Math.random() * 360 - 180 // Dummy long for demonstration
      }
    }))

    updateChart(transformedData)
  } catch (error) {
    console.error(error)
  }
})
</script> -->
