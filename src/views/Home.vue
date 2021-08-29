<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-29 17:03:45
-->
<template>
  <div class="home">
    <div id="d1">
      <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-sousuo1"></use>
</svg>
      <span class="iconfont icon-sousuo1"></span>
    </div>
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