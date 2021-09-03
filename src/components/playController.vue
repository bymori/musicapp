<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-09-03 18:27:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-03 19:16:27
-->
<template>
  <div class="playController">
    <div class="left">
      <img :src="playlist[playCurrentIndex].al.picUrl"
           alt="">
      <div class="content">
        <div class="title">{{playlist[playCurrentIndex].al.name}}</div>
        <div class="tips">横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
    </div>
  </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['playlist', 'playCurrentIndex'])
  }
}
</script>

.<style lang="less" scoped>
.playController {
  background: #fff;
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left {
    display: flex;
    padding: 0 0.2rem;

    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }

    .content {
      padding: 0 0.2rem;

      .tips {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .right {
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.2rem;
    }
  }
}
</style>