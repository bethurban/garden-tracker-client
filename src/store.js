import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import users from './reducers/users.js';
import locations from './reducers/locations.js';

const reducers = combineReducers({
  users,
  locations
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)),
);
