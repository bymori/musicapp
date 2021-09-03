/*
 * @Descripttion: 
 * @version: 0.01
 * @Author: by_mori
 * @Date: 2021-08-29 15:21:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-03 18:54:37
 */
import { createStore } from 'vuex';

export default createStore({
  state: {
    playlist: [{al:{}}],
    playCurrentIndex: 0,
  },
  mutations: {
    setPlaylist(state,value){
      state.playlist=value
    }
  },
  actions: {},
  modules: {},
});
