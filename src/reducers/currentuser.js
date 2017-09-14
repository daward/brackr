import { userData } from '../clients/userdata'

const currentUser = (state = { name: undefined, id: undefined }, action) => {
  switch (action.type) {

    // when a round is loaded, we need to clear
    // out the monitor
    case 'LOGIN':
      let data = userData.set(action);
      return Object.assign({}, state, {
        // assume we start with no votes
        id: data.id,
        name: data.name
      });

    // when we check a round, we want to know two things: how many votes and if the round
    // has advanced
    case 'LOGOUT':
      userData.delete();
      return Object.assign({}, state, {
        id: undefined,
        name: undefined
      });

    case 'LOAD_USER':
      let loadedData = userData.get();
      return Object.assign({}, state, {
        // assume we start with no votes
        id: loadedData.id,
        name: loadedData.name
      });

    default:
      return state;
  }
}

export default currentUser