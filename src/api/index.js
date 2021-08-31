/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-08-31 15:17:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 17:13:42
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
