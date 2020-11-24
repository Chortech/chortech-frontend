import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import { navigationRef } from "./navigationService";

import Login from "../screens/Login";
import ResetPassword from "../screens/ResetPassword";
import CodeVerification from "../screens/CodeVerification";
import SignUp from "../screens/SignUp";
import AccountIdentification from "../screens/AccountIdentification";

import FriendList from "../screens/FriendList";
import Friend from "../screens/Friend";
import InviteFriend from "../screens/InviteFriend";

import GroupList from "../screens/GroupList";
import Group from "../screens/Group";
import AddGroup from "../screens/AddGroup";

import Activity from "../screens/Activity";
import ActivityList from "../screens/ActivityList";
import AddExpense from "../screens/AddExpense";

import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";

import { StatusBar } from "react-native";
import { ILoginState } from "../models/reducers/login";
import LoadingIndicator from "../screens/Loading";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInTab = createMaterialTopTabNavigator();
const GroupStack = createStackNavigator();
const FriendStack = createStackNavigator();
const ActivityStack = createStackNavigator();
const LoadingStack = createStackNavigator();

interface IState {
  authReducer: ILoginState;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animationTypeForReplace: isLoggedIn ? "push" : "pop",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          animationTypeForReplace: isLoggedIn ? "push" : "pop",
        }}
      />
      <Stack.Screen
        name="AccountIdentification"
        component={AccountIdentification}
        options={{
          animationTypeForReplace: isLoggedIn ? "push" : "pop",
        }}
      />
      <Stack.Screen
        name="CodeVerification"
        component={CodeVerification}
        options={{
          animationTypeForReplace: isLoggedIn ? "push" : "pop",
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          animationTypeForReplace: isLoggedIn ? "push" : "pop",
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInTab.Navigator
    initialRouteName="گروه‌ها"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "گروه‌ها") {
          iconName = focused;
        } else if (route.name === "دوستان") {
          iconName = focused;
        } else if (route.name === "فعالیت‌ها") {
          iconName = focused;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#1AD927",
      inactiveTintColor: "#A4A4A4",
      labelStyle: {
				fontSize: 18,
			},
      tabStyle: {
        borderBottomColor: "#1AD927",
        borderBottomWidth: 2,
      },
    }}>
    <LoggedInTab.Screen name="دوستان" component={FriendNavigator} />
    <LoggedInTab.Screen name="گروه‌ها" component={GroupNavigator} />
    <LoggedInTab.Screen name="فعالیت‌ها" component={ActivityNavigator} />
  </LoggedInTab.Navigator>
);

const GroupNavigator = () => (
  <GroupStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="GroupList">
    <LoggedInTab.Screen name="GroupList" component={GroupList} />
    <LoggedInTab.Screen name="Group" component={Group} />
    <LoggedInTab.Screen name="AddGroup" component={AddGroup} />
  </GroupStack.Navigator>
);

const ActivityNavigator = () => (
  <ActivityStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ActivityList">
    <LoggedInTab.Screen name="ActivityList" component={ActivityList} />
    <LoggedInTab.Screen name="Activity" component={Activity} />
    <LoggedInTab.Screen name="AddExpense" component={AddExpense} />
  </ActivityStack.Navigator>
);

const FriendNavigator = () => (
  <FriendStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="FriendList">
    <LoggedInTab.Screen name="FriendList" component={FriendList} />
    <LoggedInTab.Screen name="Friend" component={Friend} />
    <LoggedInTab.Screen name="InviteFriend" component={InviteFriend} />
    <LoggedInTab.Screen name="Profile" component={Profile} />
    <LoggedInTab.Screen name="EditProfile" component={EditProfile} />
  </FriendStack.Navigator>
);

const App: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IState) => state.authReducer);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar />

      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="GroupList"
            component={LoggedInNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              animationTypeForReplace: isLoggedIn ? "push" : "pop",
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
