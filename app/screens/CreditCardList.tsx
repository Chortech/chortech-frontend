import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { styles } from '../styles/CreditCardListStyles';



const data = [
  {
    id: "1",
    cardOwnerName: 'سینا',
    cardNumber: '123456789'
  },
  {
    id: "2",
    cardOwnerName: 'نیما',
    cardNumber: '123456789'
  },
  {
    id: "3",
    cardOwnerName: "حسین",
    cardNumber: "123456789"
  },
];

const CreditCard = (props) => (
    <View style={styles.cardItem}>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.cardNumber}</Text>
    </View>
);


const CreditCardList = ({ route, navigation }) => {

  const renderCardItem = ({item}) => (
    <CreditCard name={item.cardOwnerName} cardNumber={item.cardNumber}/>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderCardItem}
        keyExtractor={ item => item.id }/>
    </View>
  );
}

export default CreditCardList;

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