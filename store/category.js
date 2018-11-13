export const state = () => ({
  categories: [],
  goodsHot: []
})

export const mutations = {
  setCategoies(state, { data: { categories: { nodes } } }) {
    state.categories = nodes
  },
  setGoodsHot(state, { data: { listOfGoods: { nodes } } }) {
    state.goodsHot = nodes
  }
}

export const getters = {
  categories(state) {
    return state.categories
  },
  goodsHot(state) {
    return state.goodsHot
  }
}

