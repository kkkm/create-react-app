import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/index';
import createHistory from 'history/createHashHistory';

const kkmmiddleware=applyMiddleware(logger);
const thunkmiddleware=applyMiddleware(thunk);
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const enchancers = compose (
window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(rootReducer, kkmmiddleware,  thunkmiddleware);
export const history = createHistory();

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
      
  });
}

export default store;