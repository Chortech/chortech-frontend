import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles';

type FriendListScreenRouteProp = RouteProp<RootStackParamList, 'FriendList'>;
type FriendListScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'FriendList'
>;

type Props = {
	navigation: FriendListScreenNavigationProp;
	route: FriendListScreenRouteProp;
};

const FriendList = ({ navigation }: Props): void => {

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>دوستان</Text>
			</View>
			<Animatable.View
				animation="slideInUp"
				duration={600}
				style={styles.infoContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
				</ScrollView>
			</Animatable.View>
		</View>
	);
};

export default FriendList;
