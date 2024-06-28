export type CaseType = {
  "@odata.context": string
  value: CaseValueType[]
}

export type CaseValueType = {
  DIM_TIME: string
  DIM_GEO_CODE_M49: string
  DIM_GEO_CODE_TYPE: string
  DIM_1_CODE: any
  DIM_MEMBER_1_CODE: any
  DIM_2_CODE: any
  DIM_MEMBER_2_CODE: any
  DIM_3_CODE: any
  DIM_MEMBER_3_CODE: any
  DIM_4_CODE: any
  DIM_MEMBER_4_CODE: any
  DIM_5_CODE: any
  DIM_MEMBER_5_CODE: any
  DIM_6_CODE: any
  DIM_MEMBER_6_CODE: any
  DIM_VALUE_TYPE: string
  VALUE_NUMERIC: number
  VALUE_LABEL: any
  VALUE_NUMERIC_LOWER: any
  VALUE_NUMERIC_UPPER: any
  VALUE_COMMENTS: any
  OBSERVATION_STATUS: string
}

export type CovidType = {
  data: CovidDetailType[]
}

export type CovidDetailType = {
  date: string
  confirmed: number
  deaths: number
  recovered: number
  confirmed_diff: number
  deaths_diff: number
  recovered_diff: number
  last_update: string
  active: number
  active_diff: number
  fatality_rate: number
  region: RegionType
}

export type RegionType = {
  iso: string
  name: string
  province: string
  lat: string
  long: string
  cities: any[]
}
