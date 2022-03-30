<template>
  <div class="home-entry">
    <div class="container">
      <HomeCategory></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeBrand></HomeBrand>
  <HomeProduct></HomeProduct>
  <HomeSpecial></HomeSpecial>

</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product'
import HomeSpecial from './components/home-special'
export default {
  name: 'HomePage',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot, HomeBrand, HomeProduct, HomeSpecial }
}
</script>


<style scoped lang="less">
</style>