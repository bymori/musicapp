<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 16:23:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 16:28:55
-->
<template>
  <div class="header">
    <text class="title">{{title}}</text>
    <div>
      <text>{{nav}}</text>
      <text class="more">更多></text>
    </div>
  </div>
</template>

<script>
export default {
name: 'NavHeader',
  props: ['title','nav'],
}
</script>
<style lang="less" scoped>
.header {
  padding-bottom: 30rpx;
  .title {
    font-size: 32rpx;
    line-height: 80rpx;
    color: #666;
  }
  .more {
    float: right;
    border: 1rpx solid #333;
    padding: 10rpx 20rpx;
    font-size: 26rpx;
    border-radius: 30rpx;
  }
}

</style>
