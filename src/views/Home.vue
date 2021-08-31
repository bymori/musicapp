<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 16:21:43
-->
<template>
  <div class="home">
    <top-nav></top-nav>
    <Banner></Banner>
    <IconList></IconList>
    <musicList></musicList>
  </div>

</template>
  
<script>
import TopNav from '@/components/topNav.vue'
import Banner from '@/components/Banner.vue'
import IconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    Banner, IconList, musicList
  },

}
</script>

<style lang="less" scoped>
</style>