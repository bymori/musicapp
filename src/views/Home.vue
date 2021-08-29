<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-29 16:45:51
-->
<template>
  <div class="home">
    <div id="d1"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
#d1{
  width: 3.75rem;
  height: 3.75rem;
  background: skyblue;
}
</style>