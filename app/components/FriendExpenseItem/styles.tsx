import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  expenseContainer: {
    marginTop: 10,
    borderWidth: 3,
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    borderColor: colors.ultraLightGray,
    padding: 15,
    flexDirection: "row-reverse",
  },
  expenseInfoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  expenseDescription: {
    textAlign: "right",
    color: colors.textBlack,
    fontFamily: fonts.IranSans_Bold,
    fontSize: 18,
  },
  expenseTotal: {
    textAlign: "right",
    color: colors.textBlack,
    fontFamily: fonts.IranSans_Light,
    fontSize: 14,
  },
  expenseStatusContainer: {
    flex: 1,
  },
  expenseBalanceContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  expenseCurrency: {
    fontFamily: fonts.IranSans_Light,
    fontSize: 12,
    alignSelf: "center",
  },
  expenseStatus: {
    textAlign: "left",
    fontFamily: fonts.IranSans_Light,
    fontSize: 14,
  },
  expenseBalance: {
    marginLeft: 3,
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: 18,
  },
});
