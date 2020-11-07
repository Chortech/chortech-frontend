import React, { useState } from 'react';
import {
	View,
	Text,
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

type FriendScreenRouteProp = RouteProp<RootStackParamList, 'Friend'>;
type FriendScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Friend'
>;

type Props = {
	navigation: FriendScreenNavigationProp;
	route: FriendScreenRouteProp;
};

const Friend = ({ navigation }: Props): void => {

    const [data, setData] = useState({
        username: 'babak-ssh',
	});

    return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.profileImage}
					source={require('../../assets/images/friend-image.jpg')}
				/>
				<Text style={styles.userNameText}>{data.username}</Text>
			</View>
			<Animatable.View
				animation="slideInUp"
				duration={600}
				style={styles.infoContainer}>
				
			</Animatable.View>
		</View>
	);
};

export default Friend;
