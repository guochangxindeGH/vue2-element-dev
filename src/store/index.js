import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

// import user from './storeModules/user'
// import money from './storeModules/money'
// import menu from './storeModules/menu'

Vue.use(Vuex)

const files = require.context('./storeModules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  // modules: {
  //   user,
  //   money,
  //   menu
  // },
  modules,
  plugins: [
    createPersistedState({
      // storage: {
      // getItem: key => wx.getStorageSync(key),
      // setItem: (key, value) => wx.setStorageSync(key, value),
      // removeItem: key => wx.clearStorage()
      // }
    })
  ]
})
