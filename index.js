/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//     notifee.displayNotification({
//         title: remoteMessage.notification.title,
//         body: remoteMessage.notification.body,
//       android: {
//         channelId: 'alarm',
//       },
//     });
//   });

AppRegistry.registerComponent(appName, () => App);
