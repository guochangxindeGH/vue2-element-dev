import Vue from 'vue'
import Vuex from 'vuex'
import user from './storeModules/user'
import money from './storeModules/money'
import menu from './storeModules/menu'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}

export default new Vuex.Store({
  modules: {
    user,
    money,
    menu
  }
})
