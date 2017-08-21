import { endpoint } from "../constants";
import rp from 'request-promise'

class ImagesClient {

  get(searchText) {
    let options = {
      url: `${endpoint}/images?choice=${searchText}`,
      method: "GET"
    }
    return rp(options)
      .then(response => {
        let images = JSON.parse(response).images;
        return images;
      })
  }
}

export default ImagesClient