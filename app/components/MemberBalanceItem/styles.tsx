import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-start",
    backgroundColor: colors.ultraXLightGray,
    marginBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.ultraLightGray,
    borderBottomColor: colors.ultraLightGray,
  },
  itemContainer: {
    flexDirection: "row-reverse",
  },
  text: {
    alignSelf: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: 14,
    color: colors.textBlack,
    textAlign: "right",
    direction: "rtl",
  },
  balanceContainer: {
    padding: 10,
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.mainColor,
    borderBottomColor: colors.mainColor,
  },
  memberBalanceItemTextContainer: {
    paddingBottom: 5,
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
  },
  miniText: {
    alignSelf: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: 12,
    color: colors.textBlack,
    textAlign: "right",
    direction: "rtl",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
  },
  settleUpButtonContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.mainColor,
    marginHorizontal: 5,
    borderRadius: common.baseBorderRadius - 5,
  },
  settleUpButtonText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: 12,
    color: colors.mainColor,
  },
  reminderButtonContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.mainColor,
    marginHorizontal: 5,
    borderRadius: common.baseBorderRadius - 5,
  },
  reminderButtonText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: 12,
    color: colors.mainColor,
  },
});
