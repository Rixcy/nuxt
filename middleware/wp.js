import axios from 'axios'
import Config from '@/middleware/wp_config'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  async posts () {
    return axios.get(`${this.apiBase}${Config.api.posts}`, {
      params: {
        page: 1,
        per_page: 5
      }
    }).then(json => {
      return { posts: json.data }
    }).catch(e => {
      return { error: e }
    })
  }

  async index () {
    return axios.get(`${this.apiBase}${Config.api.index}`).then(json => {
      return { index: json.data }
    }).catch(e => {
      return { error: e }
    })
  }

  async categories () {
    return axios.get(`${this.apiBase}${Config.api.categories}`).then(json => {
      return { categories: json.data }
    }).catch(e => {
      return { error: e }
    })
  }
}

const wp = new WpApi(process.env.WORDPRESS)

export default wp
