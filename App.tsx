// import 'react-native-gesture-handler';
import React from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Navigator from "./app/navigation/navigationStack";
import configureStore from "./app/store";

library.add(fab, fas);

const { persistor, store } = configureStore();

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
