<template>
  <div class="flex h-full w-full flex-col gap-4">
    <!-- Header -->
    <div class="flex h-fit w-full items-center justify-end">
      <!-- button Create -->
      <div class="">
        <slot name="buttonHeadMasterData" />
      </div>
    </div>

    <v-responsive>
      <v-layout>
        <!-- ---------------------------------------------- -->
        <!---Sidebar -->
        <!-- ---------------------------------------------- -->
        <div
          class="mr-3 h-full w-20 overflow-hidden rounded-lg border shadow-lg md:w-fit lg:w-fit"
        >
          <!-- <LayoutMasterSidebar /> -->

          <!-- Menu List -->
          <div class="h-full w-full">
            <v-list :lines="false" density="default">
              <v-list-item
                v-for="(item, i) in listItem"
                :key="i"
                :value="item"
                :title="item.title"
                min-width="70"
                color="#4094D4"
                :to="item.link"
                :class="{
                  'v-list-item v-list-item--active v-list-item--link v-theme--light v-list-item--density-default v-list-item--variant-text active':
                    isActiveLink(item)
                }"
              >
                <template #prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
              </v-list-item>
            </v-list>
          </div>
        </div>

        <!-- Container -->
        <v-responsive>
          <div class="h-fit w-full">
            <slot />
          </div>
          <!-- <v-main> </v-main> -->
        </v-responsive>
      </v-layout>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import useLayouts from '~/stores/configs/layouts'
const router = useRouter()
const id = router.currentRoute.value.params.id

definePageMeta({
  layout: 'main-layout'
})

const layoutState = useLayouts()
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutState)

const configs = ref({
  titlePath: titlePath,
  subTitlePath: subTitlePath,
  lastPathSegment: lastPathSegment,
  parentTitle: 'Master',
  topTitle: topTitle
})

let listItem = ref([
  {
    title: 'Master User',
    icon: 'mdi-account-circle-outline',
    link: '/master-data/master-user',
    link2: '/master-data/master-user/add-user',
    link3: `/master-data/master-user/edit/${id}`,
    permissions: ['MASTER_DATA_USER_READ']
  },
  {
    title: 'Account Setting',
    icon: 'mdi-account-cog-outline',
    link: '/master-data/account-setting',
    permissions: ['SUPERADMIN']
  },
  {
    title: 'Barcode',
    icon: 'mdi-barcode',
    link: '/master-data/barcode',
    link2: '/master-data/barcode/create-barcode',
    link3: `/master-data/barcode/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Company Profile',
    icon: 'mdi-domain',
    link: '/master-data/company-profile',
    permissions: ['MASTER_DATA_COMPANY_PROFILE_UPDATE']
  },
  {
    title: 'Master Customer Type',
    icon: 'mdi-layers-outline',
    link: '/master-data/master-customer-type',
    link2: '/master-data/master-customer-type/add-customer-type',
    link3: `/master-data/master-customer-type/edit-customer-type/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Customer',
    icon: 'mdi-book-account-outline',
    link: '/master-data/master-customer',
    link2: '/master-data/master-customer/create',
    link3: `/master-data/master-customer/edit-master-customer/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Rule',
    icon: 'mdi-format-list-bulleted',
    link: '/master-data/master-rule',
    link2: `/master-data/master-rule/0`,
    link3: `/master-data/master-rule/1`,
    link4: `/master-data/master-rule/2`,
    link5: `/master-data/master-rule/edit-rule/${id}`,
    link6: `/master-data/master-rule/edit-deduction/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Item',
    icon: 'mdi-treasure-chest-outline',
    link: '/master-data/master-item',
    link2: '/master-data/master-item/create-master-item',
    link3: `/master-data/master-item/edit-master-item/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Unit',
    icon: 'mdi-bookshelf',
    link: '/master-data/master-unit',
    link2: '/master-data/master-unit/0',
    link3: `/master-data/master-unit/edit-unit/${id}`,
    link4: `/master-data/master-unit/edit-conversion/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Warehouse',
    icon: 'mdi-warehouse',
    link: '/master-data/master-warehouse',
    link2: '/master-data/master-warehouse/add-warehouse',
    link3: `/master-data/master-warehouse/edit/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Line',
    icon: 'mdi-align-vertical-distribute',
    link: '/master-data/master-line',
    link2: '/master-data/master-line/create-master-line',
    link3: `/master-data/master-line/edit-master-line/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Color',
    icon: 'mdi-palette-outline',
    link: '/master-data/master-color',
    link2: '/master-data/master-color/create-master-color',
    link3: `/master-data/master-color/edit-colors/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Color Method',
    icon: 'mdi-palette-swatch',
    link: '/master-data/master-color-method',
    link2: '/master-data/master-color-method/0',
    link3: `/master-data/master-color-method/edit-color-method/${id}`,
    link4: `/master-data/master-color-method/edit-color-process/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Cap',
    icon: 'mdi-sitemap-outline',
    link: '/master-data/master-cap',
    link2: '/master-data/master-cap/0',
    link3: `/master-data/master-cap/edit-cap-type/${id}`,
    link4: `/master-data/master-cap/edit-cap-size/${id}`,
    link5: `/master-data/master-cap/edit-cap-color/${id}`,
    link6: `/master-data/master-cap/edit-cap-process/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Role & Permission',
    icon: 'mdi-shield-check-outline',
    link: '/master-data/Role-and-Permisson',
    link2: '/master-data/Role-and-Permisson/create-role-and-permission',
    link3: `/master-data/Role-and-Permisson/edit/${id}`,
    permissions: ['MASTER_DATA_ROLE_PERMISSION_READ']
  },
  {
    title: 'Master Process',
    icon: 'mdi-reload',
    link: '/master-data/master-process',
    link2: '/master-data/master-process/0',
    link3: `/master-data/master-process/edit-master-process-cutting-type/${id}`,
    link4: `/master-data/master-process/edit-master-process-collection/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Master Finishing',
    icon: 'mdi-clock-check-outline',
    link: '/master-data/master-finishing',
    link2: '/master-data/master-finishing/0',
    link3: `/master-data/master-finishing/edit-finishing-type/${id}`,
    link4: `/master-data/master-finishing/edit-packing-method/${id}`,
    permissions: ['MASTER_DATA_READ']
  },
  {
    title: 'Customization',
    icon: 'mdi-note-edit-outline',
    link: '/master-data/customization',
    link2: '/master-data/customization/0',
    link3: `/master-data/customization/edit-pph23/${id}`,
    link4: `/master-data/customization/edit-io-type/${id}`,
    link5: `/master-data/customization/edit-shipping-term/${id}`,
    link6: `/master-data/customization/edit-term-of-payment/${id}`,
    link7: `/master-data/customization/edit-purchase-type/${id}`,
    link8: `/master-data/customization/edit-order-type/${id}`,
    link9: `/master-data/customization/edit-group/${id}`,
    link10: `/master-data/customization/edit-sub-group/${id}`,
    link11: `/master-data/customization/edit-production-type/${id}`,
    permissions: ['MASTER_DATA_READ']
  }
])

const isActiveLink = (item: any) => {
  const currentPath = router.currentRoute.value.path

  return (
    currentPath === item.link ||
    currentPath === item.link2 ||
    currentPath === item.link3 ||
    currentPath === item.link4 ||
    currentPath === item.link5 ||
    currentPath === item.link6 ||
    currentPath === item.link7 ||
    currentPath === item.link8 ||
    currentPath === item.link9 ||
    currentPath === item.link10 ||
    currentPath === item.link11
  )
}

const filterPermissions = () => {
  let newList: any = []

  listItem.value.forEach((item: any, index: any) => {
    if (item.permissions) {
      if (useAuth.permit(item.permissions)) {
        newList.push(item)
      }
    }
  })

  listItem.value = newList
}

watchEffect(() => {
  layoutState.defineTitlePath(configs.value)
  filterPermissions()
})

onMounted(() => {
  layoutState.defineTitlePath(configs.value)
})
</script>
