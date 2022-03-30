<template>
  <AppNavbar></AppNavbar>
  <AppHeaderSticky></AppHeaderSticky>
  <AppHeader></AppHeader>
  <div class="class">
    <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'

import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { AppNavbar, AppHeader, AppFooter, AppHeaderSticky },
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
</style>
