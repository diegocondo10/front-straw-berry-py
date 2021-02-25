import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '.';

const middleware = [thunk];
const applied = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, applied);

export default store;
