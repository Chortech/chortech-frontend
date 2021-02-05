import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import colors from "../../assets/resources/colors";
import { ExpenseBalance } from "../../models/other/axios/Balance";
import { styles } from "./styles";
import { ArabicNumbers } from "react-native-arabic-numbers";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  item: ExpenseBalance;
  onPressItem?: (event: GestureResponderEvent) => void;
};

const BalanceItem: React.FC<Props> = (props: Props): JSX.Element => {
  let color = props.item.balance < 0 ? colors.red : colors.mainColor;
  let paymentSentence =
    props.item.type === "payment"
      ? props.item.balance > 0
        ? `${props.item.to} ${props.item.amount} به شما پرداخت کرده‌است`
        : `شما ${ArabicNumbers(props.item.amount)} به ${props.item.to} پرداخت کرده‌اید`
      : "";

  return (
    <TouchableOpacity onPress={props.onPressItem}>
      {props.item.type === "expense" ? (
        <View style={styles.expenseContainer}>
          <View style={styles.expenseInfoContainer}>
            <Text style={styles.expenseDescription}>{props.item.description}</Text>
            <Text style={styles.expenseTotal}>هزینه کل: {ArabicNumbers(props.item.total)}</Text>
          </View>
          <View style={styles.expenseStatusContainer}>
            <View style={styles.expenseBalanceContainer}>
              <Text style={{ ...styles.expenseCurrency, color: color }}>تومان</Text>
              <Text style={{ ...styles.expenseBalance, color: color }}>
                {ArabicNumbers(Math.abs(props.item.balance))}
              </Text>
            </View>
            <Text style={{ ...styles.expenseStatus, color: color }}>
              {props.item.balance < 0 ? "قرض گرفتی" : "قرض دادی"}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.paymentContainer}>
          <FontAwesomeIcon icon="coins" size={20} style={styles.coinIcon} />
          <Text
            lineBreakMode="head"
            selectable
            selectionColor={colors.lightGray}
            style={styles.paymentText}>
            {paymentSentence}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BalanceItem;
