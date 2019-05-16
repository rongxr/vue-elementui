import * as types from '@/store/mutation-types.js'

export default {

  showHeader:({commit}) => {
    commit(types.SHOW_HEADER);
  },
  hideHeader:({commit}) => {
    commit(types.HIDE_HEADER);
  }

}