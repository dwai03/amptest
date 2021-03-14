  
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

export default function configureStore(preloadedState = {}) {
  const middlewares = [logger, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}





// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

// import rootReducer from '../reducers/root';
// import thunk from '../thunk/thunk';

// export default (preloadedState = {}) => createStore(
//   rootReducer, preloadedState,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );