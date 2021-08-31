<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-29 17:32:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-29 17:57:35
-->
<template >
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-gengduo1"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn action">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <svg class="icon sousuo"
           aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
    
</script>

<style lang="less" scoped>
.topNav {
  width: 7.5rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.2rem;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
  .sousuo {
    width: 0.45rem;
    height: 0.45rem;
  }
  .topCenter {
    width: 5rem;
    display: flex;
    justify-content: space-around;
    .action{
        font-weight: 900;
    }
  }
}
</style>