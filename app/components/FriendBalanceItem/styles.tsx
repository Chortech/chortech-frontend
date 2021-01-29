import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  expenseContainer: {
    marginTop: 10,
    borderWidth: 3,
    backgroundColor: colors.ultraXLightGray,
    borderRadius: common.baseBorderRadius - 5,
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
    fontSize: common.baseFontSize + 2,
  },
  expenseTotal: {
    textAlign: "right",
    color: colors.textBlack,
    fontFamily: fonts.IranSans_Light,
    fontSize: common.baseFontSize - 2,
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
    fontSize: common.baseFontSize - 2,
    alignSelf: "center",
  },
  expenseStatus: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: common.baseFontSize - 2,
  },
  expenseBalance: {
    marginLeft: 3,
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize + 2,
  },
  paymentContainer: {
    padding: 10,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: colors.ultraLightGray,
    backgroundColor: colors.ultraXLightGray,
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
