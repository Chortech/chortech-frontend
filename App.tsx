import 'react-native-gesture-handler';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { request, GraphQLClient, gql } from 'graphql-request';
import { Api } from "./app/services/api/graphQL";

import Navigator from '@navigation/navigationStack';
import configureStore from './app/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const { persistor, store } = configureStore();

// const query = gql`
// 	query allUsers {
// 		getAllUsers {
// 			data {
// 				_id
// 				name
// 			}
// 		}
// 	}
// `;
// const endpoint = 'https://graphql.fauna.com/graphql';
// const client = new GraphQLClient(endpoint, {
// 	headers: {
// 		authorization: 'Bearer fnAD6M1g9GACASGXBm5sXyK1pw7C48OT190oj2JI',
// 	},
// });
// client.request(query).then((data) => console.log(data.getAllUsers.data));

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
