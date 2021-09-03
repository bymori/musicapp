/*
 * @Descripttion:
 * @version: 0.01
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-03 23:28:57
 */
import { createStore } from 'vuex';

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
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value;
    },
    setPlayIndex(state, value) {
      state.playCurrentIndex = value;
    },
  },
  actions: {},
  modules: {},
});
