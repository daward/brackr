import { endpoint } from "../constants";
import rp from 'request-promise'
import _ from 'lodash'

class ContestantGroupClient {

  get(contestantGroupId) {
    return rp({
      url: `${endpoint}/contestantgroups/${contestantGroupId}`,
      method: "GET"
    })
  }

  save({ title, contestants, id }) {
    let url = `${endpoint}/contestantgroups`
    if (id) {
      url = `${url}/${id}`
    } 
    let options = {
      url,
      method: id ? "PUT" : "POST",
      json: {
        title: title,
        choices: _.map(_.filter(contestants, contestant => contestant.text), contestant => ({
          text: contestant.text,
          image: contestant.image
        }))
      }
    }
    return rp(options);
  }
}
const contestantGroupClient = new ContestantGroupClient();

export default contestantGroupClient;