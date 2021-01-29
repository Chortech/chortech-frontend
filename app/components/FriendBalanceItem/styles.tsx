import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
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
    flex: 2,
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
    justifyContent: "center",
    borderRadius: 10,
  },
  expenseBalanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  expenseCurrency: {
    fontFamily: fonts.IranSans_Light,
    fontSize: 12,
    alignSelf: "center",
  },
  expenseStatus: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: 14,
  },
  expenseBalance: {
    marginLeft: 3,
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: 18,
  },
  paymentContainer: {
    padding: 10,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: colors.ultraLightGray,
    backgroundColor: "#f9f9f9",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  coinIcon: {
    color: colors.gold,
    alignSelf: "center",
    marginRight: 10,
  },
  paymentText: {
    textAlign: "right",
    fontFamily: fonts.IranSans_Medium,
    marginRight: 5,
    marginLeft: 10,
    padding: 5,
    color: colors.textBlack,
  },
});
