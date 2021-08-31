<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 13:59:15
-->
<template>
  <div class="home">
    <top-nav></top-nav>
    <Banner></Banner>
  </div>

</template>
  
<script>
import TopNav from '@/components/topNav.vue'
import Banner from '@/components/Banner.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    Banner
  },

}
</script>

<style lang="less" scoped>
</style>