<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-05 16:51:12
-->
<template>
  <router-view />
  <play-controller></play-controller>
</template>
<script>
import playController from '@/components/playController'
export default {
  components: {
    playController
  },
  mounted () {
    let userData = JSON.parse(localStorage.userData);
    console.log(userData)
    this.$store.commit('setUser',userData)
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
a {
  color: #333;
  text-decoration: none;
}
</style>

