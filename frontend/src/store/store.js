  
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;



// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

// import rootReducer from '../reducers/root';
// import thunk from '../thunk/thunk';

// export default (preloadedState = {}) => createStore(
//   rootReducer, preloadedState,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );