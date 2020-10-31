import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from './styles';

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Login'
>;

type Props = {
	navigation: LoginScreenNavigationProp;
	route: LoginScreenRouteProp;
};

const Login = ({ navigation }: Props): void => {
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
			<View style={styles.header}>
				<Text style={styles.textHeader}>Chortech</Text>
			</View>
			<Animatable.View
				animation="slideInUp"
				duration={1000}
				style={styles.footer}>
				<ScrollView>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="ایمیل یا شماره موبایل"
							style={styles.textInput}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TouchableOpacity
							onPress={togglePassword}
							style={styles.toggleIcon}>
							{data.secureTextEntry ? (
								<FontAwesomeIcon
									icon="eye-slash"
									size={20}
									style={{ color: 'red' }}
								/>
							) : (
								<FontAwesomeIcon
									icon="eye"
									size={20}
									style={{ color: '#1AD927' }}
								/>
							)}
						</TouchableOpacity>
						<TextInput
							placeholder="رمز عبور"
							style={styles.textInput}
							secureTextEntry={data.secureTextEntry}
						/>
					</View>
					<View>
						<TouchableOpacity
							onPress={(): void => {
								navigation.navigate('CodeVerification', { nextScreen: 'ResetPassword' });
							}}>
							<Text style={styles.resetPasswordText}>
								کلمه عبور خود را فراموش کرده‌اید؟
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.filledButton}
							onPress={(): void => navigation.navigate('CreditCardList')}>
							<Text style={styles.filledButtonText}>ورود</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.outlinedButton}
							onPress={(): void => navigation.navigate('SignUp')}>
							<Text style={styles.outlinedButtonText}>ثبت نام</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.outlinedButton}>
							<Text style={styles.outlinedButtonText}>قوانین حریم خصوصی</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</Animatable.View>
		</View>
	);
};

export default Login;
