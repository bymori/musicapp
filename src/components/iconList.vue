<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 15:33:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 16:10:22
-->
<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-FM_weixuanze"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconList'
}
</script>

<style lang="less" scoped>
.iconList {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 1rem;
      height: 1rem;
    }
    span{
        font-size: 0.26rem;
    }
  }
}
</style>>