import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type CreditCardListScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type CreditCardListScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'CreditCardList'
>;

const data = [
	{
		id: '1',
		cardOwnerName: 'سینا',
		cardNumber: '123456789',
	},
	{
		id: '2',
		cardOwnerName: 'نیما',
		cardNumber: '123456789',
	},
	{
		id: '3',
		cardOwnerName: 'حسین',
		cardNumber: '123456789',
	},
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
	cardItem: {
		backgroundColor: '#fff',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		borderWidth: 1,
		borderColor: '#1AD927',
	},
	text: {
		fontSize: 18,
		color: '#000',
		fontFamily: 'IRANSansWeb_Bold',
	},
});

type Props = {
	cardOwnerName: string;
	cardNumber: string;
	navigation: CreditCardListScreenNavigationProp;
	route: CreditCardListScreenRouteProp;
};

const CreditCard = ({ cardOwnerName, cardNumber }: Props): void => (
	<View style={styles.cardItem}>
		<Text style={styles.text}>{cardOwnerName}</Text>
		<Text style={styles.text}>{cardNumber}</Text>
	</View>
);

const CreditCardList = ({ route, navigation }: Props): void => {
	const renderCardItem = ({ item }: Props): void => (
		<CreditCard name={item.cardOwnerName} cardNumber={item.cardNumber} />
	);

	return (
		<View>
			<FlatList
				data={data}
				renderItem={renderCardItem}
				keyExtractor={(item): void => item.id}
			/>
		</View>
	);
};

export default CreditCardList;
