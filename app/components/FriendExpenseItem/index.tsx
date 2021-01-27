import React from "react";
import { Text, View } from "react-native";
import colors from "../../assets/resources/colors";
import { ExpenseBalance } from "../../models/other/axios/Expense";
import { styles } from "./styles";

type Props = {
  item: ExpenseBalance;
};

const FriendExpenseItem: React.FC<Props> = (props: Props): JSX.Element => {
  let color = props.item.balance < 0 ? colors.red : colors.mainColor;

  return (
    <View style={styles.expenseContainer}>
      <View style={styles.expenseInfoContainer}>
        <Text style={styles.expenseDescription}>{props.item.expense.description}</Text>
        <Text style={styles.expenseTotal}>هزینه کل: {props.item.expense.total}</Text>
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
  );
};

export default FriendExpenseItem;
