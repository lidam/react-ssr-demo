import { GET_DOWNLOAD_LIST } from './constants';

const defaultState = {
  type: GET_DOWNLOAD_LIST,
  downloadList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_DOWNLOAD_LIST:
      return {
        ...state,
        downloadList: action.list
      };
    default:
      return state;
  }
}