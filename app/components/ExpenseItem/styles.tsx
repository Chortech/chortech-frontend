import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
    padding: 15,
    flexDirection: "row-reverse",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  expenseDescription: {
    flex: 1,
    justifyContent: "flex-start",
    fontFamily: "Dirooz",
    fontSize: 16,
  },
  expensePrice: {
    flex: 1,
    justifyContent: "flex-end",
    fontFamily: "Dirooz",
    fontSize: 16,
  },
});
