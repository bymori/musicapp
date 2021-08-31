<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 16:19:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 21:17:28
-->
<template>
  <div class="recommendContainer">
    <NavHeader title="推荐歌曲"
               nav="为你精心推荐"></NavHeader>
    <div class="swiper-container"
         id="musicSwiper">
      <div class="swiper-wrapper">
        <router-link :to="{path:'/listview',query:{id:item.id}}" class="swiper-slide"
             v-for="(item,i) in state.musicList"
             :key="i">
          <img :src="item.picUrl"
               :alt="item.name">
          <div class="name">{{item.name}}</div>
          <div class="count">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            <span>{{changeValue(item.playCount)}}</span>
          </div>
        </router-link>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
import NavHeader from './NavHeader.vue'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import { getMusicList } from '../api/index'
import { reactive, onMounted, onUpdated } from 'vue'
export default {
  name: 'MusciList',
  components: {
    NavHeader,
  },
  setup () {
    let state = reactive({ musicList: [] })
    function changeValue (num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 100000000
        res = res.toFixed(2) + '亿'
      } else if (num >= 10000) {
        res = num / 10000
        res = res.toFixed(2) + '万'
      }
      return res
    }
    onMounted(async () => {
      let result = await getMusicList()
      state.musicList = result.data.result;
      console.log(result)
    })
    onUpdated(() => {
      var swiper = new Swiper('#musicSwiper', {
        slidesPerView: 3,
        spaceBetween: 10,
      });
    })
    return {
      state, changeValue
    }
  }
}
/* export default {
  name: 'MusciList',
  components: {
    NavHeader,
  },
  data () {
    return {
      musicList: []
    }
  },
  methods: {
    changeValue (num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 100000000
        res = res.toFixed(2) + '亿'
      } else if (num >= 10000) {
        res = num / 10000
        res = res.toFixed(2) + '万'
      }
      return res
    }
  },
  async mounted () {
    let result = await getMusicList()
    this.musicList = result.data.result
    // console.log(result.data.result);

  },
  updated () {
    var swiper = new Swiper('#musicSwiper', {
      slidesPerView: 3,
      spaceBetween: 10,
    });
  }
} */
</script>

<style lang="less" scoped>
.recommendContainer {
  width: 7.5rem;
  padding: 0 0.4rem;

  .swiper-container {
    width: 100%;
    height: 3rem;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      position: relative;

      img {
        height: auto;
        border-radius: 0.1rem;
      }
      .name {
        height: 0.6rem;
        width: 100%;
        font-size: 0.24rem;
        line-height: 0.4rem;
      }
      .count {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: #ccc;
        display: flex;
        align-items: center;
        .icon {
          fill: #ccc;
        }
      }
    }
  }
}
</style>>
