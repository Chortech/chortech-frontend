import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";
import { useStore } from "react-redux";
import colors from "../../assets/resources/colors";
import { ExpenseBalance } from "../../models/other/axios/Expense";
import { IUserState } from "../../models/reducers/default";
import { styles } from "./styles";

type Props = {
  item: ExpenseBalance;
};

const FriendBalanceItem: React.FC<Props> = (props: Props): JSX.Element => {
  let color = props.item.balance < 0 ? colors.red : colors.mainColor;
  let paymentSentence =
    props.item.type === "payment"
      ? props.item.balance > 0
        ? `${props.item.to} ${props.item.amount} به شما پرداخت کرده‌است`
        : `شما ${props.item.amount} به ${props.item.to} پرداخت کرده‌اید`
      : "";

  return (
    <>
      {props.item.type === "expense" ? (
        <View style={styles.expenseContainer}>
          <View style={styles.expenseInfoContainer}>
            <Text style={styles.expenseDescription}>{props.item.description}</Text>
            <Text style={styles.expenseTotal}>هزینه کل: {props.item.total}</Text>
          </View>
          <View style={styles.expenseStatusContainer}>
            <View style={styles.expenseBalanceContainer}>
              <Text style={{ ...styles.expenseCurrency, color: color }}>تومان</Text>
              <Text style={{ ...styles.expenseBalance, color: color }}>
                {Math.abs(props.item.balance)}
              </Text>
            </View>
            <Text style={{ ...styles.expenseStatus, color: color }}>
              {props.item.balance < 0 ? "ازش قرض گرفتی" : "بهش قرض دادی"}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.paymentContainer}>
          <FontAwesomeIcon icon="coins" size={25} style={styles.coinIcon} />
          <Text style={styles.paymentText}>{paymentSentence}</Text>
        </View>
      )}
    </>
  );
};

export default FriendBalanceItem;
