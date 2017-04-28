import * as types from './mutation-types'

export const removeItem = ({ commit }, index) => {
  commit(types.REMOVE_ITEM, index)
}
