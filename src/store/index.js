/*
 * @Descripttion:
 * @version: 0.01
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-04 18:53:50
 */
import { createStore } from 'vuex';
import api from '@/api';

export default createStore({
  state: {
    playlist: [
      {
        name: '彩券',
        id: 1486513704,
        al: {
          id: 96680121,
          name: '彩券',
          pic: 109951165386012140,
          picUrl:
            'http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg',
          pic_str: '109951165386012146',
        },
      },
    ],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
  },
  getters: {
    lyricList(state) {
      let arr = state.lyric.split(/\n/gis).map((item, i, arr) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 10));
        return {
          min,
          sec,
          mill,
          lyric: item.slice(11, item.length),
          content: item,
          time: mill + sec * 1000 + min * 60 * 1000,
        };
      });
      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0;
        } else {
          item.pre = arr[i - 1].time;
        }
      });
      console.log(arr);
      return arr;
    },
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value;
    },
    setPlayIndex(state, value) {
      state.playCurrentIndex = value;
    },
    setLyric(state, value) {
      state.lyric = value;
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
    },
  },
  actions: {
    async reqLyric(content, payload) {
      console.log(`payload:${payload.id}`);
      let result = await api.getPlayLyric(payload.id);
      content.commit('setLyric', result.data.lrc.lyric);
      console.log(`歌词：`, result.data.lrc.lyric);
    },
  },
  modules: {},
});
