import * as React from "react";
import {
  NavigationContainerRef,
  useNavigationState,
} from "@react-navigation/native";
import { State } from "react-native-paper/lib/typescript/src/components/TextInput/types";

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

function resetTo(rootScreen: string, params?: any) {
  navigationRef.current?.reset({ index: 0, routes: [{ name: rootScreen }] });
}

export default {
  navigate,
  goBack,
  resetTo,
};
