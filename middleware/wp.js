import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  async posts () {
    // add &_embed to the route to get nested routes (i.e. featured image)
    return axios.get(`${this.apiBase}/wp/v2/posts?_embed`, {
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
}

const wp = new WpApi(process.env.WORDPRESS)

export default wp
