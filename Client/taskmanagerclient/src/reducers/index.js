import { AUTH, GET_USER , GET_TASKS} from '../actions/type';

function reducer(state = {}, action) {
  const { signedIn, user, tasks } = action;

  switch(action.type) {
    case AUTH:
      return { ...state, signedIn };

    case GET_USER:
      return { ...state, user }

    case GET_TASKS:
      return { ...state, tasks }

    default:
      return {};
  }
}

export default reducer;