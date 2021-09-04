/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-08-31 15:17:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-04 15:02:39
 */
import axios from 'axios';

let baseUrl = 'https://api.ioinn.cn';

/* 
type:资源类型,对应以下类型,默认为 0 即PC
    0: pc 1: android 2: iphone 3: ipad 
    getBanner 获取轮播图api
*/
export function getBanner(typeId = 1) {
  return axios.get(`${baseUrl}/banner?type=${typeId}`);
}

//获取推荐歌单
// limit: 取出数量 (不支持 offset)
export function getMusicList(limit = 10) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}
//获取歌单详情
// 必选参数 : id : 歌单 id
export function getPlaylistDetail(id) {
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//获取歌词
//必选参数 : id: 音乐 id
export function getPlayLyric(id) {
  return axios.get(`${baseUrl}/lyric?id=${id}`);
}

export default {
  getBanner,
  getMusicList,
  getPlaylistDetail,
  getPlayLyric,
};
