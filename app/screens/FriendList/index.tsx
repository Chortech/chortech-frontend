import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Image,
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

	const friends = [
		{ name: 'Babak-SSH'},
		{ name: 'Friend#2'},
		{ name: 'Friend#3'},
		{ name: 'Friend#4'},
		{ name: 'Friend#5'},
	]

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
					<FlatList 
						data={friends} 
						renderItem={({ item }) => {	
							return (
								<View>
									<TouchableOpacity style={styles.friendContainer}
										onPress={(): void => {
											navigation.navigate('Profile');
										}}>
										<Image
											style={styles.friendImage}
											source={require('../../assets/images/friend-image.jpg')}
										/>
										<Text style={styles.friendText}>{item.name}</Text>
									</TouchableOpacity>
								</View>	
							)
						}}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={(): void => {
								navigation.navigate('Profile');
							}}>
							<Text style={styles.buttonText}>بازگشت</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</Animatable.View>
		</View>
	);
};

export default FriendList;
