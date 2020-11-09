import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles';

type InviteFriendScreenRouteProp = RouteProp<RootStackParamList, 'InviteFriend'>;
type InviteFriendScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'InviteFriend'
>;

type Props = {
	navigation: InviteFriendScreenNavigationProp;
	route: InviteFriendScreenRouteProp;
};

const InviteFriend = ({ navigation }: Props): void => {

	const [data, setData] = useState({
		emailOrPhone: '',
		secureTextEntry: true,
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>Chortech</Text>
			</View>
			<Animatable.View
				animation="slideInUp"
				duration={1000}
				style={styles.infoContainer}>
                <SearchBar
                    lightTheme
                    searchIcon={{ size: 20 }}
                    placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
                    containerStyle={styles.searchBar}
                    inputStyle={styles.textInput}
                    leftIconContainerStyle={{backgroundColor: 'white'}}
                    inputContainerStyle={{backgroundColor: 'white'}}
                    onChangeText={(text) => 
                    data.emailOrPhone = text}
                    onClear={(text) => data.emailOrPhone = ''}
                    value={data.emailOrPhone}
                />
			</Animatable.View>
		</View>
	);
};

export default InviteFriend;
