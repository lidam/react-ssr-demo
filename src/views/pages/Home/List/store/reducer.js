import { GET_HOME_LIST } from './constants';

const defaultStates = {
  homeList: []
};

export default (state = defaultStates, action) => {
  switch(action.type) {
    case GET_HOME_LIST:
      return {
        ...state,
        homeList: action.list
      }
    default:
      return state; 
  }
}