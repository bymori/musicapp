<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 13:46:20
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 15:29:06
-->
<template>
  <div id="swipercom">
    <div class="swiper-container"
         id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item,i) in imgs"
             :key="i">
             <img :src="item.pic">
             </div>

      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
// import axios from 'axios';
import {getBanner} from '../api/index'

export default {
  name: 'Banner',
  data: function () {
    return {
      imgs: [
         { pic: require('../assets/img/1.jpg') },
        //  { pic: require('../assets/img/1.jpg') },
        //  { pic: require('../assets/img/2.jpg') },
        //  { pic: require('../assets/img/3.jpg') },
        //  { pic: require('../assets/img/4.jpg') }
      ]
    }

  },
  async mounted () {
    let res = await getBanner(1)
    // let res = await axios.get('https://api.ioinn.cn/banner?type=1')
        this.imgs = res.data.banners
        
    var mySwiper = new Swiper('#swiperIndex', { // eslint-disable-line no-unused-vars
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }



}
</script>

<style lang="less" scoped>
#swipercom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;

    .swiper-slide img {
      width: 100%;
    }
    /deep/ .swiper-pagination-bullet-active {
      background-color: orangered;
    }
  }
}
</style>
