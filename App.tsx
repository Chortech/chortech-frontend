import React from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Navigator from "./app/navigation/navigationStack";
import configureStore from "./app/store";
import { cronJob } from "./app/utils/cronJob";
import * as authActions from "./app/store/actions/authActions";
import { log } from "./app/utils/logger";
import { IUserState } from "./app/models/reducers/default";
import StartUp from "./app/screens/Startup";
import { flush } from "redux-saga/effects";

library.add(fab, fas);

const { persistor, store } = configureStore();

cronJob.init(() => {
  let state: IUserState = store.getState()["authReducer"];
  if (!state.isLoggedIn) return;
  store.dispatch(
    authActions.onLoginRequest(state.email, state.phone, state.password, state.authInputType)
  );
  log("cron job called");
}, "*/50 * * * *");

// initializing navigation and redux store and persist
const RootNavigation: React.FC = () => {
  return <Navigator />;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
