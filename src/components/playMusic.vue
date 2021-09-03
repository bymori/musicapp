<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-09-03 22:54:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-04 00:14:16
-->
<template>
  <div class="playMusic">
    <div class="bg"
         :style="{backgroundImage:`url(${playDetail.al.picUrl})` }"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="silde"
                   direction="left">{{playDetail.al.name}}</marquee>

        </div>
        <div class="anthor"
             v-for="(ar) in playDetail.ar"
             :key="ar.id">{{ar.name}}</div>

      </div>
      <div class="share">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent"></div>
    <div class="playLyric"></div>
    <div class="progress"></div>
    <div class="playFooter"></div>
  </div>
</template>

<script>
export default {
  props: ['playDetail'],
}
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
  .playTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: rgb(199, 7, 7);
    padding: 0 0.4rem;
    .icon {
      fill: #fff;
      width: 0.4rem;
      height: 0.4rem;
    }
    marquee {
      width: 5rem;
      flex: 1;
    }
    .anthor {
      display: inline-flex;
      padding: 0.1rem;
    }
  }
}
</style>