<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-08-31 21:44:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-09-04 23:54:38
-->
<template>
  <div class="searchTop">
    <div class="searchTopNav">
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
        <div class="keywordItem"
             v-for="(item,i) in keywordList"
             :key="i">{{item}}</div>
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
.searchTop {
  width: 7.5rem;
  height: calc(100vh - 1.2rem);
  padding: 0 0.4rem;
  .searchTopNav {
    display: flex;
    width: 100%;
    height: 1.2rem;
    padding: 0 0.4rem;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .right {
      padding: 0 0 0 0.4rem;
      flex: 1;
      input {
        border: none;
        outline: none;
        border-bottom: 1px solid #666;
        width: 100%;
        height: 0.5rem;
      }
    }
  }
  .history {
    display: flex;
    margin-top: 1.2rem;
    .historyLeft {
      width: 1.2rem;
      height: 0.6rem;
      font-weight: 900;
      margin: 0.2rem 0rem;
      line-height: 0.6rem;
    }
    .historyRight {
      color: #666;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .keywordItem {
        background-color: #eee;
        height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        line-height: 0.6rem;
        margin: 0.2rem 0.1rem;
      }
    }
  }
}
</style>