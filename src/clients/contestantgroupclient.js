import { endpoint } from "../constants";
import rp from 'request-promise'
import _ from 'lodash'

class ContestantGroupClient {

  get({ contestantGroupId, userId }) {
    return rp({
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/contestantgroups/${contestantGroupId}`,
      method: "GET"
    }).then(response => {
      return JSON.parse(response)
    })
  }

  getContestantGroups({ userId }) {
    return rp({
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/contestantgroups`,
      method: "GET"
    }).then(response => {
      return JSON.parse(response)
    })
  }

  save({ title, contestants, id, userId }) {
    let url = `${endpoint}/contestantgroups`
    if (id) {
      url = `${url}/${id}`
    }
    let options = {
      url,
      method: id ? "PUT" : "POST",
      headers: {
        "X-User-ID": userId
      },
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