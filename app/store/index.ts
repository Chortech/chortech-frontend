import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import sagas from "./sagas";
import rootReducers from "./reducers";

const config = {
  key: "root",
  storage: AsyncStorage,
  // blacklist and whitelist should be in config
  debug: true, //to get logging
};

// const middleware = [];
const sagaMiddleware = createSagaMiddleware();

// middleware.push(sagaMiddleware);

// if (__DEV__) {
//   middleware.push(createLogger());
// }

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(sagaMiddleware)];
// const initialState = {};
const persistConfig: any = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  console.log("state: ", store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
