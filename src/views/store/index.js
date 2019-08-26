import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../pages/Home/List/store/index';
import { reducer as downloadReducer } from '../pages/Download/store/index';
import clientAxios from '../../client/request';
import serverAxios from '../../server/request';

const reducer  = combineReducers({
  home: homeReducer,
  download: downloadReducer
});

export const getServerStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}