import React, { useEffect } from "react";
import { ActivityIndicator, Alert, View, Modal } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import messaging from "@react-native-firebase/messaging";
import Navigator from "./app/navigation/navigationStack";
import configureStore from "./app/store";
import { cronJob } from "./app/utils/cronJob";
import * as authActions from "./app/store/actions/authActions";
import { log } from "./app/utils/logger";
import { IUserState } from "./app/models/reducers/default";
import { Root, Popup, Toast } from 'popup-ui'
import notifee, { AndroidImportance } from '@notifee/react-native';
import NavigationService from "./app/navigation/navigationService";

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
  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      await notifee.createChannel({
        id: 'notification',
        name: 'Firing notification',
        lights: false,
        vibration: true,
        importance: AndroidImportance.DEFAULT,
      });

      await Toast.show({
        position: 'top',
        title: remoteMessage.notification.title,
        text: remoteMessage.notification.body,
        color: '#2ecc71',
        duration: 5000,
    })
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      // The below code gets never executed
      NavigationService.navigate("ActivityList");
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    messaging().getToken().then((token) => {
        console.log("firebase token:", token)
      });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <Root>
        <RootNavigation />
    </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
