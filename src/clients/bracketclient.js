import { endpoint } from "../constants";
import rp from 'request-promise'

class BracketClient {

  getRound(bracketId) {
    let options = {
      url: `${endpoint}/bracket/${bracketId}/round/current`,
      method: "GET"
    }
    return rp(options)
      .then(response => JSON.parse(response));
  }

  rerun(bracketId) {
    return rp({
      url: `${endpoint}/bracket/${bracketId}/next`,
      method: "POST",
      json: {}
    })
  }

  getBracket(bracketId) {
    return rp({
      url: `${endpoint}/bracket/${bracketId}`,
      method: "GET",
    })
      .then(response => JSON.parse(response));
  }

  getTournament({ bracketId, tournamentId }) {
    let options = {
      url: `${endpoint}/bracket/${bracketId}/tournament/${tournamentId}`,
      method: "GET"
    }
    return rp(options).then(response => JSON.parse(response))
  }

  start(contestantGroupId) {
    let options = {
      url: `${endpoint}/bracket`,
      method: "POST",
      json: { contestantGroupId }
    }
    return rp(options)
  }

  vote({ bracketId, matchId, winningSeed }) {
    let options = {
      url: `${endpoint}/bracket/${bracketId}/match/${matchId}/player/${winningSeed}`,
      method: "POST",
      json: {}
    }
    return rp(options)
  }

  closeRound(bracketId) {
    let options = {
      url: `${endpoint}/bracket/${bracketId}/round/next`,
      method: "POST",
      json: {}
    }
    return rp(options);
  }

  getCurrentRound(bracketId) {
    let options = {
      url: `${endpoint}/bracket/${bracketId}/round/current`,
      method: "GET"
    }
    return rp(options).then(response => JSON.parse(response));
  }
}

const bracketClient = new BracketClient();

export default bracketClient;