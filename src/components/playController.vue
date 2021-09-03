<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-09-03 18:27:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-03 22:29:17
-->
<template>
  <div class="playController">
    <div class="left">
      <img :src="playlist[playCurrentIndex].al.picUrl"
           alt="">
      <div class="content">
        <div class="title">{{playlist[playCurrentIndex].name}}</div>
        <div class="tips">横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg v-if="paused"
           class="icon"
           aria-hidden="true"
           @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else
           class="icon"
           aria-hidden="true"
           @click="play">
        <use xlink:href="#icon-weibiaoti1"></use>
      </svg>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
    </div>
    <audio ref="audio"
           :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      paused: true
    }
  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex'])
  },
  mounted () {
    console.log(this.$refs.audio);
  },
  updated () {
    console.log(this.playlist[this.playCurrentIndex]);
  },
  methods: {
    play () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = false
      } else {
        this.$refs.audio.pause()
        this.paused = true
      }
      console.log(this.$refs.audio.paused);
    }
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
      // .title{
      //   overflow:hidden;
      //   white-space: nowrap;
      //   text-overflow: ellipsis;
      // }
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