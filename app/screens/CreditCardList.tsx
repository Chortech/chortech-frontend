import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import CreditCard from '../components/CreditCard';

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
		bankName: 'بانک ملی',
	},
	{
		id: '2',
		cardOwnerName: 'نیما',
		cardNumber: '123456789',
		bankName: 'بانک ملی',
	},
	{
		id: '3',
		cardOwnerName: 'حسین',
		cardNumber: '123456789',
		bankName: 'بانک ملی',
	},
];

type Props = {
	cardOwnerName: string;
	cardNumber: string;
	navigation: CreditCardListScreenNavigationProp;
	route: CreditCardListScreenRouteProp;
};

const CreditCardList = ({ route, navigation }: Props): void => {
	const renderCardItem = ({ item }: Props): void => (
		<CreditCard
			ownerName={item.cardOwnerName}
			cardNumber={item.cardNumber}
			bankName={item.bankName}
		/>
	);

	return (
		<View style={{ backgroundColor: '#fff' }}>
			<FlatList
				data={data}
				renderItem={renderCardItem}
				keyExtractor={(item): void => item.id}
			/>
		</View>
	);
};

export default CreditCardList;
