<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 21:44:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-04 23:46:00
-->
<template>
  <div class="listViewTop">
    <div class="listViewTopNav">
      <div class="back"
           @click="$router.go(-1)">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
      <div class="right">
        <input type="text"
               v-model="searchKeyword"
               :placeholder="placeholder"
               @keydown.enter="SaveKeyWord">
      </div>
    </div>
    <div class="history">
      <div class="historyLeft">
        历史
      </div>
      <div class="historyRight">
        <div class="keywordItem">
          <div class="keywordItem"
               v-for="(item,i) in keywordList"
               :key="i">{{item}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      placeholder: "沫沫",
      keywordList: [],
      searchKeyword: ''
    }
  },
  beforeMount () {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    SaveKeyWord () {
      this.keywordList.push(this.searchKeyword)
      localStorage.keywordList = JSON.stringify(this.keywordList)
    }
  },
}
</script>

.<style lang="less" scoped>
</style>