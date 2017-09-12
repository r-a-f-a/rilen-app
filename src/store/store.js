import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import vuexI18n from 'vuex-i18n'
import langPtBr from './internationalization/pt-br.js'
import langEnUs from './internationalization/en-us.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  state
})

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('pt-br', langPtBr)
Vue.i18n.add('en-us', langEnUs)
Vue.i18n.set('pt-br')
Vue.i18n.fallback('en-us')

export default store
