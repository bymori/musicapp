<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 19:20:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-01 00:00:49
-->
<template>
  <div class="listView">
    <listviewTop :playlist="state.playlist"></listviewTop >
    <playlist :playlist="state.playlist"></playlist>
    <!-- <listviewTop ></listviewTop> -->
  </div>
</template>

<script>
import listviewTop from '@/components/ListViewTop'
import playlist from '@/components/PlayList'
import { getPlaylistDetail } from '../api/index'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    let state = reactive({
      list: [], playlist: {
        creator: {},
        trackIds:[]
      }
    })
    onMounted(async () => {
      let id = route.query.id
      //   console.log(route);
      let result = await getPlaylistDetail(id)
      console.log(result);
      console.log(result.data.playlist);
      state.playlist = result.data.playlist

    })
    return {
      state
    }
  },
  components: {
    listviewTop,playlist
  }
}
</script>

<style>
</style>