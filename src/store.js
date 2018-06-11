import { applyMiddleware, createStore, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initialState = {},
      middleware = [thunk],
      store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middleware)
        )
      );

export default store;
