<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 15:36:51
-->
<template>
  <div class="home">
    <top-nav></top-nav>
    <Banner></Banner>
    <IconList></IconList>
  </div>

</template>
  
<script>
import TopNav from '@/components/topNav.vue'
import Banner from '@/components/Banner.vue'
import IconList from '@/components/iconList.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    Banner, IconList
  },

}
</script>

<style lang="less" scoped>
</style>