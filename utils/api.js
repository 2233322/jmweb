import axios from 'axios'

// axios.defaults.baseURL = 'http://192.168.10.191:3006/graphql/'
axios.defaults.baseURL = 'https://api.9-mi.cn/graphql/'

export async function categories () {
  return axios.post('/graphql', {
    query: `query {
      categories {
        nodes {
          id
          name: title
          key
          diskfile{
            path
          }
          children {
            id
            name: title
            key
            diskfile{
              path
            }
          }
        }
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}

export async function listOfGoodsAndCategories (first = 20, skip = 0, categoryKey, sort = 'sort', query) {
  return axios.post('/graphql', {
    query: `query {
      categories(key: "${categoryKey}") {
        currentCate {
          id
          title
          key
          webSiteTitle
          description
        }
        cateNodes: currentCategories {
          id
          title
          key
          children {
            id
            text: title
            value: key
          }
        }
      }
      listOfGoods(first: ${first}, skip: ${skip}, categoryKey: "${categoryKey}", sort: "${sort}"){
        totalCount
        nodes {
          id
          name
          subtitle
          view
          favorite
          description
          diskfile{
            path
          }
        }
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}

export async function searchGoods (first = 20, skip = 0, query, sort = 'sort') {
  return axios.post('/graphql', {
    query: `query {
      listOfGoods(first: ${first}, skip: ${skip}, query: "${query}", sort: "${sort}"){
        totalCount
        nodes {
          id
          name
          subtitle
          view
          favorite
          description
          diskfile{
            path
          }
        }
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}

export async function goods (id) {
  return axios.post('/graphql', {
    query: `query {
      goods(id: ${id}){
        id
        name
        subtitle
        favorite
        description
        category{
          id
          key
          title
        }
        diskfile{
          path
        }
        galleryList{
          url: path
          image: path
        }
        detailsList{
          path
        }
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}

export function addFavorite (id) {
  if (Number(id) === 'NaN') {
    return
  }
  axios.post('/graphql', {
    query: `mutation {
      addFavorite(id: ${id}){
        code
        message
      }
    }`
  }).catch(error => {
    console.log(error)
  })
}

export async function articleCategories (articleCategoryKey = 'guide') {
  return axios.post('/graphql', {
    query: `query {
      articleCategories(key: "${articleCategoryKey}") {
        currentCategories {
          id
          title
          key
          children {
            id
            title
            articles {
              id
              title
            }
          }
        }
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}

export async function listOfArticle (first = 20, skip = 0, articleCategoryKey) {
  return axios.post('/graphql', {
    query: `query {
      listOfArticle(first: ${first}, skip: ${skip}, articleCategoryKey: "${articleCategoryKey}") {
        totalCount
        nodes {
          id
          title
          subtitle
          description
          cover {
            path
            w
            h
          }
          articleCategory {
            key
            title
          }
          createdDate
        }
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}

export async function article (id) {
  return axios.post('/graphql', {
    query: `query {
      article(id: ${id}) {
        title
        subtitle
        description
        cover {
          path
        }
        content
        articleCategory {
          title
          key
        }
        createdDate
      }
    }`
  }).then(({ data }) => data)
    .catch(error => {
      console.log(error)
    })
}
