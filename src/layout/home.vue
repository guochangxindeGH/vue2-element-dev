<template>
    <div class="home rflex">
        <left-menu></left-menu>
        <div class="menu_right wflex el-scrollbar" ref="menu_right" style="left: 180px">
            <div class="menu_content" ref="menu_content">
<!--                <bread></bread>-->
                <router-view></router-view><!--页面渲染入口-->
            </div>
<!--            <backTop :ele="$refs.menu_right"></backTop>-->
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import LeftMenu from './leftMenu.vue'
// import Bread from './bread.vue'
// import backTop from 'cps/backTop'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  components: {
    LeftMenu
    // Bread,
    // backTop
  },
  created () {
  },
  mounted () {
  },
  watch: {

  }
}
</script>
<style scoped lang='less'>
    .home{
        .menu_right{
            overflow: auto;
            position: absolute;
            right:0;
            top:0;
            bottom:0;
            background:#F6F7FC;
            .menu_content{
                position: relative;
                margin-top:60px;
                width:100%;
                background:#f0f2f5;
            }

        }
    }
</style>
