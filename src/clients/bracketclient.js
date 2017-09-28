import { endpoint } from "../constants";
import rp from 'request-promise'

class BracketClient {

  getRound({ bracketId, userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}/round/current`,
      method: "GET"
    }
    return rp(options)
      .then(response => JSON.parse(response));
  }

  rerun({ bracketId, userId }) {
    return rp({
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}/next`,
      method: "POST",
      json: {}
    })
  }

  getBracket({ bracketId, userId }) {
    return rp({
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}`,
      method: "GET",
    })
      .then(response => JSON.parse(response));
  }

  getTournament({ bracketId, tournamentId, userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}/tournament/${tournamentId}`,
      method: "GET"
    }
    return rp(options).then(response => JSON.parse(response))
  }

  start({ contestantGroupId, userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets`,
      method: "POST",
      json: { contestantGroupId }
    }
    return rp(options)
  }

  vote({ bracketId, matchId, winningSeed, userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}/match/${matchId}/player/${winningSeed}`,
      method: "POST",
      json: {}
    }
    return rp(options)
  }

  closeRound({ bracketId, userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}/round/next`,
      method: "POST",
      json: {}
    }
    return rp(options);
  }

  getCurrentRound({ bracketId, userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets/${bracketId}/round/current`,
      method: "GET"
    }
    return rp(options).then(response => {
      return JSON.parse(response);
    });
  }

  getBrackets({ userId }) {
    let options = {
      headers: {
        "X-User-ID": userId
      },
      url: `${endpoint}/brackets`,
      method: "GET"
    }
    return rp(options).then(response => JSON.parse(response));
  }
}

const bracketClient = new BracketClient();

export default bracketClient;