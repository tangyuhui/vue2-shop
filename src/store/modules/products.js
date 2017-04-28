import * as types from '../mutation-types'

// initial state
const state = {
  iPhone6S: {
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    isSelected: true,
    styles: {
      '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
      '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
      '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
    },
    activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',

    storage: {
      '16GB': 5288,
      '64GB': 6088,
      '128GB': 6888
    },
    cart: []
  }
}
// getters
const getters = {
  iPhone6S: state => state.iPhone6S
}
// actions
const actions = {
  changeStyle ({ commit }, styleobj) {
    commit(types.CHANGE_STYLE, styleobj)
  },
  changePrice ({ commit }, obj) {
    commit(types.CHANGE_PRICE, obj)
  },
  addItem ({ commit }) {
    commit(types.ADD_ITEM)
  }
}

// 相关的 mutations
const mutations = {
  [types.CHANGE_STYLE] (state, { styleName, styleUrl }) {
    state.iPhone6S.activeStyle = styleName
    state.iPhone6S.activeStyleUrl = styleUrl
  },
  [types.CHANGE_PRICE] (state, { storage, price }) {
    state.iPhone6S.activeStorage = storage
    state.iPhone6S.price = price
    state.iPhone6S.isSelected = false
  },
  [types.ADD_ITEM] (state) {
    const activeStyle = state.iPhone6S.activeStyle === undefined ? '银色' : state.iPhone6S.activeStyle
    const type = activeStyle + '，' + state.iPhone6S.activeStorage
    const cartInfo = {
      type: type,
      count: 1,
      price: state.iPhone6S.price
    }
    state.iPhone6S.cart.push(cartInfo)
  },
  [types.REMOVE_ITEM] (state, index) {
    state.iPhone6S.cart.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
