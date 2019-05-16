import * as types from '@/store/mutation-types.js'
import getters from '@/store/getters.js'

const state = {
  headerStatus:true
};

const mutations = {
  [types.SHOW_HEADER](state) {
    state.headerStatus = true;
  },
  [types.HIDE_HEADER](state) {
    state.headerStatus = false;
  }
};

export default {
  state,
  mutations,
  getters
}