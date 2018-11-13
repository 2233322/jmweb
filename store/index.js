import { categories, listOfGoodsAndCategories } from "../utils/api"

export const actions = {
  nuxtServerInit: async ({ commit }, { app, req, redirect }) => {
    commit('category/setCategoies', await categories())
    commit('category/setGoodsHot', await listOfGoodsAndCategories(10, 0, '', 'favorite'))
  }
}
