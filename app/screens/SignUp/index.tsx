import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import NavigationService from '../../navigation/navigationService';
import { styles } from './styles';

const SignUp: React.FC = () => {
	const onVerify = () => NavigationService.navigate('CodeVerification', {parentScreen: "SignUp", userName: "babak-ssh", password: "1234"});

	const [data, setData] = useState({
		emailOrPhone: '',
		password: '',
		secureTextEntry: true,
	});

	const togglePassword = (): void => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#009387" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.textHeader}>Chortech</Text>
			</View>
			<Animatable.View animation="slideInUp" duration={1000} style={styles.footer}>
				<View style={styles.inputContainer}>
					<TextInput placeholder="ایمیل یا شماره موبایل" style={styles.textInput} />
				</View>
				<View style={styles.inputContainer}>
					<TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
						{data.secureTextEntry ? (
							<FontAwesomeIcon icon="eye-slash" size={20} style={{ color: 'red' }} />
						) : (
							<FontAwesomeIcon icon="eye" size={20} style={{ color: '#1AD927' }} />
						)}
					</TouchableOpacity>
					<TextInput placeholder="رمز عبور" style={styles.textInput} secureTextEntry={data.secureTextEntry} />
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

export default SignUp;
