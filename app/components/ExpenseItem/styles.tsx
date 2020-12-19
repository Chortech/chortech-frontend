import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row-reverse",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  expenseDescription: {
    flex: 1,
    justifyContent: "flex-start",
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 14,
  },
  expensePrice: {
    flex: 1,
    justifyContent: "flex-end",
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 14,
  },
});
