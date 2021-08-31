<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 19:20:12
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-31 23:03:45
-->
<template>
  <div class="listView">
    <listviewTop :playlist="state.playlist"></listviewTop>
    <!-- <listviewTop ></listviewTop> -->
  </div>
</template>

<script>
import listviewTop from '@/components/ListViewTop'
import { getPlaylistDetail } from '../api/index'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    let state = reactive({
      list: [], playlist: {
        creator: {}
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
    listviewTop
  }
}
</script>

<style>
</style>