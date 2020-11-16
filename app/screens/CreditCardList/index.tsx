import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CreditCard from "../../components/CreditCard/CreditCard";

const data = [
  {
    id: "1",
    cardOwnerName: "سینا",
    cardNumber: "123456789",
    bankName: "بانک ملی",
  },
  {
    id: "2",
    cardOwnerName: "نیما",
    cardNumber: "123456789",
    bankName: "بانک ملی",
  },
  {
    id: "3",
    cardOwnerName: "حسین",
    cardNumber: "123456789",
    bankName: "بانک ملی",
  },
];

type Props = {
  cardOwnerName: string;
  cardNumber: string;
  bankName: string;
};

const renderCardItem: any = (item: Props): JSX.Element => (
  <CreditCard
    ownerName={item.cardOwnerName}
    cardNumber={item.cardNumber}
    bankName={item.bankName}
  />
);
const CreditCardList: React.FC = () => {
  return (
    <View>
      <View style={{ backgroundColor: "#fff" }}>
        <FlatList
          data={data}
          renderItem={renderCardItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text>تایید</Text>
    </View>
  );
};

export default CreditCardList;
