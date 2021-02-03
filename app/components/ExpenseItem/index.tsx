import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  description: string;
  price: string;
  onPressExpenseItem?: (event: GestureResponderEvent) => void | undefined;
};

const ExpenseItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={props.onPressExpenseItem}>
      <View style={styles.itemContainer}>
        <Text style={styles.expenseDescription}>{props.description}</Text>
        <Text style={styles.expensePrice}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseItem;
