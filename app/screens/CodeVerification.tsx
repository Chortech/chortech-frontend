import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { CountDown } from 'react-native-customizable-countdown';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from '../styles/CodeVerificationStyles';

type CodeVerificationScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type CodeVerificationScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'CodeVerification'
>;

type Props = {
	navigation: CodeVerificationScreenNavigationProp;
	route: CodeVerificationScreenRouteProp;
};

const CodeVerification = ({ route, navigation }: Props): void => {
	// const [data, setData] = useState({
	// 	verificationCode: '',
	// 	checkTextInputChange: false,
	// });

	const { nextScreen } = route.params;

	const [ref, setRef] = useState(null);

	const resetTimer = (): void => {
		ref.resetCountDown();
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#009387" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.textHeader}>Chortech</Text>
			</View>
			<Animatable.View
				animation="fadeInUpBig"
				duration={500}
				style={styles.footer}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="لطفا کد فعال‌سازی را وارد کنید"
						style={styles.textInput}
						keyboardType="number-pad"
					/>
				</View>
				<View style={styles.timerContainer}>
					<CountDown
						ref={setRef(ref)}
						initialSeconds={120}
						digitFontSize={20}
						labelFontSize={20}
						onTimeOut={}
						showHours={false}
						showSeparator
						separatorStyle={styles.seperatorLabel}
						minutesBackgroundStyle={styles.timerLabel}
						secondsBackgroundStyle={styles.timerLabel}
						width="40%"
						height={40}
					/>
					<View>
						<TouchableOpacity onPress={resetTimer}>
							<Text style={styles.buttonResend}>ارسال مجدد کد</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.confirmButton}
						onPress={(): void => {
							navigation.navigate(nextScreen);
						}}>
						<Text style={styles.confirmButtonText}>تایید</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default CodeVerification;
