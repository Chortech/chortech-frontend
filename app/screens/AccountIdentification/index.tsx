import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import NavigationService from '../../navigation/navigationService';
import { styles } from './styles';

const AccountIdentification: React.FC = () => {
	const onVerify = () =>
		NavigationService.navigate('CodeVerification', { parentScreen: 'AccountIdentification', userName: 'babak-ssh', password: '1234' });

	const [data, setData] = useState({
		emailOrPhone: '',
	});

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#009387" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.textHeader}>Chortech</Text>
			</View>
			<Animatable.View animation="slideInUp" duration={1000} style={styles.footer}>
				<View style={styles.inputContainer}>
					<TextInput placeholder="ایمیل یا شماره موبایل" style={styles.textInput}/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.verifyScreenButton} onPress={onVerify}>
						<Text style={styles.verifyScreenButtonText}>ادامه و دریافت کد تایید</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default AccountIdentification;
