import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import SignUp from './app/screens/SignUp/index';
import Login from './app/screens/Login/index';
import CodeVerification from './app/screens/CodeVerification/index';
import Profile from './app/screens/Profile/index';
import EditProfile from './app/screens/EditProfile/index';
import ResetPassword from './app/screens/ResetPassword/index';
import CreditCardList from './app/screens/CreditCardList/index';
import FriendList from './app/screens/FriendList/index';
import Friend from './app/screens/Friend/index';

library.add(fab, fas);

type RootStackParamList = {
	Login: undefined;
	SignUp: undefined;
	CodeVerification: undefined;
	Profile: undefined;
	EditProfile: undefined;
	ResetPassword: undefined;
	CreditCardList: undefined;
	FriendList: undefined;
	Friend: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = (): void => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen
					name="CodeVerification"
					component={CodeVerification} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="EditProfile" component={EditProfile} />
				<Stack.Screen name="ResetPassword" component={ResetPassword} />
				<Stack.Screen name="CreditCardList" component={CreditCardList} />
				<Stack.Screen name="FriendList" component={FriendList} />
				<Stack.Screen name="Friend" component={Friend} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
