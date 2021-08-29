<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-29 17:48:34
-->
<template>
  <div class="home">
    <top-nav></top-nav>
  </div>
</template>
  
<script>
// @ is an alias to /src

import TopNav from '@/components/topNav.vue'

export default {
  name: 'Home',
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>

</style>