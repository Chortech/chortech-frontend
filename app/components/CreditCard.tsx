import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styles/CreditCardStyles';

type Props = {
	ownerName: string;
	cardNumber: string;
};

const CreditCard = ({ ownerName, cardNumber, bankName }: Props): void => {
	return (
		<LinearGradient
			colors={['#28fc35', '#04d912']}
			style={styles.cardContainer}>
			<View style={styles.cardItem}>
				<Text style={styles.cardNumberText}>{cardNumber}</Text>
			</View>
			<View style={styles.textWrapper}>
				<View style={styles.textContainerLeft}>
					<Text style={styles.textInfo}>{bankName}</Text>
				</View>
				<View style={styles.textContainerRight}>
					<Text style={styles.textInfo}>نام بانک</Text>
				</View>
			</View>
			<View style={styles.textWrapper}>
				<View style={styles.textContainerLeft}>
					<Text style={styles.textInfo}>{ownerName}</Text>
				</View>
				<View style={styles.textContainerRight}>
					<Text style={styles.textInfo}>نام صاحب حساب</Text>
				</View>
			</View>
		</LinearGradient>
	);
};

export default CreditCard;
