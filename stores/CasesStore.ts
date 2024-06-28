import type { CaseType, CovidType } from "~/types/Cases/CaseType"

const router = useRoute()

const useCasesStore = defineStore({
  id: 'CasesStore',
  state: () => ({
      main: {
        '@odata.context': '',
        'value': [],
      } as CaseType,
      maps: {
        data: []
      } as CovidType,
      references: {
        regions: []
      },
      query: {
        all_covid_case: {
        date: '2020-03-14',
        q: null,
        iso: null,
        region_name: null,
        region_province: null,
        }
      },
      meta:{
        maps: {
          loading: false
        },
        main: { 
          loading: false
        },
        regions: {
          loading: false
        }
      }
  }),
  actions: {
    async getTopCases() {
      if (this.meta.main.loading) return
      this.meta.main.loading = true
      try {
        const response = await useMyFetch().get(
          '/DATA_/RELAY_COVID?%24top=2&%24orderBy=DIM_TIME+DESC&%24filter=IND_ID+eq+%27JVAJ4BACOVID_CASES_CONFIRMED_CUMULATIVE%27+and+DIM_TIME_TYPE+eq+%27EPI_WEEK%27+and+DIM_GEO_CODE_M49+eq+%27001%27+and+DIM_1_CODE+eq+null&%24select=DIM_GEO_CODE_M49%2CDIM_GEO_CODE_TYPE%2CDIM_TIME%2CDIM_1_CODE%2CDIM_2_CODE%2CDIM_3_CODE%2CDIM_4_CODE%2CDIM_5_CODE%2CDIM_6_CODE%2CDIM_MEMBER_1_CODE%2CDIM_MEMBER_2_CODE%2CDIM_MEMBER_3_CODE%2CDIM_MEMBER_4_CODE%2CDIM_MEMBER_5_CODE%2CDIM_MEMBER_6_CODE%2CDIM_VALUE_TYPE%2CVALUE_NUMERIC%2CVALUE_NUMERIC_LOWER%2CVALUE_NUMERIC_UPPER%2CVALUE_LABEL%2CVALUE_COMMENTS%2COBSERVATION_STATUS'
        )

        this.main.value = response.data?.value
        this.main["@odata.context"] = response.data?.["@odata.context"]

        return response
      } catch (error) {
        console.log('Failed Load Data', error)
      } finally {
        this.meta.main.loading = false
      }
    },
    async getAllCovidCase() {
      if (this.meta.maps.loading) return
      this.meta.maps.loading = true
      try {
        const response = await useMyFetch().get(
          'https://covid-api.com/api/reports', {
            params: this.query.all_covid_case
          }
        )

        this.maps = response.data?.data

        return response
      } catch (error) {
        console.log('Failed Load Data', error)
      } finally {
        this.meta.maps.loading = false
      }
    },
    async getRegions() {
      if (this.meta.regions.loading) return
      this.meta.regions.loading = true
      try {
        const response = await useMyFetch().get(
          'https://covid-api.com/api/regions'
        )

        this.references.regions = response.data?.data

        return response
      } catch (error) {
        console.log('Failed Load Data', error)
      } finally {
        this.meta.regions.loading = false
      }
    },

    clearQuery() {
      this.query.all_covid_case = {
        date: '2020-03-14',
        q: null,
        iso: null,
        region_name: null,
        region_province: null,
      }
    }
  },
  persist: [
    {
      paths: [
        'query',
      ],
      storage: localStorage
    }
  ]
})

export default useCasesStore

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCasesStore, import.meta.hot))
}