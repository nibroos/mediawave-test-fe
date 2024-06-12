<script setup lang="ts">
import type { FormLayoutType } from '~/types/FormLayoutType'
import type { PermissionType } from '~/types/PermissionType'

type TProps = {
  config: FormLayoutType
}

const defaultProps: TProps = {
  config: {
    title: '', //Purchase Order Information
    parentPath: '', /// purchase/purchase-order
    mode: 'create',
    button: {
      create: {
        show: false,
        cta: 'Create New',
        path: '' // /purchase/purchase-order/create
      },
      save: {
        show: true,
        cta: 'Create & Save',
        type: 'submit'
      },
      cancel: {
        show: true,
        cta: 'Cancel'
      },
      pdf: {
        show: false,
        cta: 'Download PDF'
      },
      csv: {
        show: false,
        cta: 'Download CSV'
      },
      duplicate: {
        show: false,
        cta: 'Duplicate'
      },
      clear: {
        show: false,
        cta: 'Clear'
      }
    },
    tabs: [],
    currentTab: '',
    summary: {},
    triggerLayout: false,
    contentClass: '',
    divHeightOverflowLimit: 300,
    isOverflow: true,
    permission: {
      name: [],
      action: 'warn', // redirect, hide, warn
      isActive: false
    },
    isAction: true
  }
}

const props = defineProps<TProps>()

const slots = useSlots()

const emits = defineEmits([
  'click:create',
  'click:save',
  'click:cancel',
  'click:pdf',
  'click:csv',
  'update:currentTab',
  'update:triggerLayout',
  'click:duplicate',
  'click:clear'
])

const router = useRouter()

const handleClickCreate = () => {
  const path = mergedConfig.value.button?.create?.path || '/'
  router.push(path)
  emits('click:create')
}

const handleClickSave = () => {
  emits('click:save')
}

const handleClickCancel = () => {
  emits('click:cancel')
}

const handleClickPdf = () => {
  emits('click:pdf')
}

const handleClickCsv = () => {
  emits('click:csv')
}

const handleClickDuplicate = () => {
  emits('click:duplicate')
}

const handleClickClear = () => {
  emits('click:clear')
}

const handleChangeTab = (tab: string) => {
  if (!!tab || tab == '0') {
    mergedConfig.value.currentTab = tab
    emits('update:currentTab', tab)
  }
}

const countConfigShowButton = computed(() => {
  return Object.values(mergedConfig.value.button).filter(
    (item: any) => item.show
  ).length
})

function deepMerge(target: any, source: any) {
  if (typeof target !== 'object' || typeof source !== 'object') return source

  Object.keys(source).forEach((key) => {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = [...targetValue, ...sourceValue]
    } else if (
      typeof targetValue === 'object' &&
      typeof sourceValue === 'object'
    ) {
      target[key] = deepMerge(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })

  return target
}

const mergedConfig: ComputedRef<FormLayoutType> = computed(() =>
  deepMerge(defaultProps.config, props.config)
)

const randomContentElementId = ref<string>(`content-${randomId()}`)
const contentlayout: any = ref(null)
const divHeightInRem = ref(0)
const divHeightInPx = ref(0)
const divHeightScroll = ref(0)

const updateHeight = () => {
  const div: any = document.getElementById(`${randomContentElementId.value}`)

  if (!div) return

  setTimeout(() => {
    divHeightInRem.value = div.scrollHeight
  }, 100)
}

let isAllowed = ref(false)
const handlePermission = async () => {
  if (!mergedConfig.value.permission?.isActive) {
    isAllowed.value = true
    return
  }

  isAllowed.value = await useAuth.handlePermission(
    mergedConfig.value.permission?.name || '',
    mergedConfig.value.permission?.action
  )
}

watch(
  () => contentlayout.value,
  (newValue, oldValue) => {
    updateHeight()
  },
  { deep: true, immediate: true }
)

watch(
  () => mergedConfig.value.permission,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      handlePermission()
    }
  },
  { deep: true, immediate: true }
)

onMounted(() => {
  document.body.style.overflowY = 'hidden'

  updateHeight()

  window.addEventListener('resize', updateHeight)
})

watchEffect(() => {
  if (mergedConfig.value.mode == 'edit') {
    mergedConfig.value.button = mergedConfig.value.button ?? {}
    mergedConfig.value.button.create = mergedConfig.value.button.create ?? {}
    mergedConfig.value.button.create.show = true

    mergedConfig.value.button = mergedConfig.value.button ?? {}
    mergedConfig.value.button.save = mergedConfig.value.button.save ?? {}
    mergedConfig.value.button.save.cta = 'Save Change'
  }

  if (mergedConfig.value.triggerLayout) {
    if (!!mergedConfig.value.triggerLayout) {
      updateHeight()
      emits('update:triggerLayout', false)
    }
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight)
})
</script>

<template>
  <div
    class="flex h-[52rem] flex-col gap-5"
    @click="updateHeight"
    v-if="isAllowed"
  >
    <slot name="action"></slot>
    <div
      v-if="!!mergedConfig.isAction"
      class="flex h-max w-full flex-col gap-4 rounded-lg !border !border-zinc-400 p-5"
    >
      <div class="flex flex-row items-center justify-between">
        <div class="flex w-max flex-col whitespace-nowrap">
          <h1 class="text-lg font-medium text-zinc-500">
            {{ mergedConfig?.title }}
          </h1>
        </div>

        <div
          class="grid auto-cols-fr grid-flow-col gap-3 whitespace-nowrap"
          :class="countConfigShowButton > 2 ? 'w-2/4' : 'w-1/4'"
        >
          <d-button
            v-if="mergedConfig.button?.create?.show"
            :cta="mergedConfig?.button?.create?.cta ?? 'Create New'"
            :class="[
              'rounded-none bg-[#4094D4] transition-all ease-in-out hover:!bg-[#3882ba]',
              mergedConfig.button?.create?.class ?? ''
            ]"
            :text-class="[
              '!text-white mx-auto',
              mergedConfig.button?.create?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickCreate"
          />

          <d-button
            v-if="mergedConfig.button?.save?.show"
            :cta="mergedConfig?.button?.save?.cta ?? 'Save Change'"
            :class="[
              'rounded-none !border border-[#4094D4] transition-all ease-in-out hover:bg-sky-50',
              {
                '!bg-[#4094D4] hover:!bg-[#3882ba]':
                  mergedConfig.mode == 'create'
              } as any,
              mergedConfig.button?.save?.class ?? ''
            ]"
            :text-class="[
              'text-[#4094D4] mx-auto',
              {
                'text-white': mergedConfig.mode == 'create'
              } as any,
              mergedConfig.button?.save?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickSave"
          />

          <d-button
            v-if="mergedConfig.button?.duplicate?.show"
            :cta="mergedConfig?.button?.duplicate?.cta ?? 'Duplicate'"
            :class="[
              'rounded-none bg-zinc-200 transition-all ease-in-out hover:!bg-zinc-300',
              mergedConfig.button?.duplicate?.class ?? ''
            ]"
            :text-class="[
              'text-black mx-auto',
              mergedConfig.button?.duplicate?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickDuplicate"
          />
          <d-button
            v-if="mergedConfig.button?.pdf?.show"
            :cta="mergedConfig?.button?.pdf?.cta ?? 'Download PDF'"
            :class="[
              'rounded-none bg-zinc-200 transition-all ease-in-out hover:!bg-zinc-300',
              mergedConfig.button?.pdf?.class ?? ''
            ]"
            :text-class="[
              'text-black mx-auto',
              mergedConfig.button?.pdf?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickPdf"
          />
          <d-button
            v-if="mergedConfig.button?.csv?.show"
            :cta="mergedConfig?.button?.csv?.cta ?? 'Download CSV'"
            :class="[
              'rounded-none bg-emerald-200 transition-all ease-in-out hover:!bg-emerald-300',
              mergedConfig.button?.csv?.class ?? ''
            ]"
            :text-class="[
              'text-black mx-auto',
              mergedConfig.button?.csv?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickCsv"
          />
          <d-button
            v-if="mergedConfig.button?.clear?.show"
            :cta="mergedConfig?.button?.clear?.cta ?? 'Clear'"
            :class="[
              'rounded-none bg-zinc-200 transition-all ease-in-out hover:!bg-zinc-300',
              mergedConfig.button?.clear?.class ?? ''
            ]"
            :text-class="[
              'text-black mx-auto',
              mergedConfig.button?.clear?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickClear"
          />
          <d-back
            v-if="mergedConfig.parentPath || mergedConfig.button?.cancel?.show"
            :cta="mergedConfig?.button?.cancel?.cta ?? 'Cancel'"
            :parent-path="mergedConfig.parentPath"
            :class="[
              'rounded-none !border border-rose-700 bg-white transition-all ease-in-out hover:!bg-rose-50',
              mergedConfig.button?.cancel?.class ?? ''
            ]"
            :text-class="[
              'text-rose-800 mx-auto',
              mergedConfig.button?.cancel?.textClass ?? ''
            ]"
            :no-icon="true"
            type="submit"
            @click="handleClickCancel"
          />
        </div>
      </div>

      <slot name="header" />

      <slot name="summary" />
      <d-summary-layout
        v-if="
          Object.keys(mergedConfig.summary as object).length > 0 &&
          !slots.summary
        "
        :config="config.summary"
      />
    </div>
    <div
      class="flex w-full flex-col gap-2 rounded-lg !border !border-zinc-400 p-3"
    >
      <d-tabs
        v-if="config.tabs?.length ?? 0 > 0"
        :tabs="config.tabs"
        :current="config.currentTab"
        @update:current="handleChangeTab"
      />
      <div
        :id="randomContentElementId"
        ref="contentlayout"
        class="p-1"
        @resize="updateHeight"
        :class="['max-h-[28rem] overflow-y-auto', mergedConfig.contentClass]"
      >
        <slot name="content" />
        <slot></slot>
      </div>
    </div>
  </div>

  <div v-else>
    <v-skeleton-loader type="table"></v-skeleton-loader>
  </div>
</template>
