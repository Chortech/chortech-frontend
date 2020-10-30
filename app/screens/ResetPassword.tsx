/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from '../styles/ResetPasswordStyles';

type ResetPasswordScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type ResetPasswordScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'CodeVerification'
>;

type Props = {
	navigation: ResetPasswordScreenNavigationProp;
	route: ResetPasswordScreenRouteProp;
};

const ResetPassword = ({ navigation }: Props): void => {
	const [data, setData] = useState({
		password: '12345678',
		secureTextEntry: true,
		confirmPassword: '12345678',
		confirmSecureTextEntry: true,
	});

	const togglePassword = (): void => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const toggleConfirmPassword = (): void => {
		setData({
			...data,
			confirmSecureTextEntry: !data.confirmSecureTextEntry,
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>بازیابی کلمه عبور</Text>
			</View>
			<Animatable.View
				animation="slideInUp"
				duration={600}
				style={styles.infoContainer}>
				<View style={styles.inputContainer}>
					<TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
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
						placeholder="رمز عبور جدید"
						secureTextEntry={data.secureTextEntry}
						style={styles.textInput}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TouchableOpacity
						onPress={toggleConfirmPassword}
						style={styles.toggleIcon}>
						{data.confirmSecureTextEntry ? (
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
						placeholder="تکرار رمز عبور جدید"
						secureTextEntry={data.confirmSecureTextEntry}
						style={styles.textInput}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.confirmButton}>
						<Text style={styles.confirmButtonText}>تایید</Text>
					</TouchableOpacity>
				</View>

				{/* <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>تایید</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>انصراف</Text>
                    </TouchableOpacity>
                </View> */}
			</Animatable.View>
		</View>
	);
};

export default ResetPassword;
