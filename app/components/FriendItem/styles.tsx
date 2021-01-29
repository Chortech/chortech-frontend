import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

// const mainColor = "#00bb5d";
// const borderRadius = 20;
// const textColor = "#333333";
// const baseFontSize = 16;
// const grayColor = "#aaaaaa22";

export const styles = StyleSheet.create({
  friendContainer: {
    marginTop: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
    borderTopRightRadius: common.baseBorderRadius + 30,
    borderBottomRightRadius: common.baseBorderRadius + 30,
    borderWidth: 4,
    borderLeftWidth: 0,
    borderColor: colors.ultraLightGray,
    backgroundColor: colors.ultraXLightGray,
  },
  balanceContainer: {
    flex: 4,
    justifyContent: "center",
    marginLeft: 10,
  },
  balanceNumber: {
    marginLeft: 3,
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize + 4,
  },
  balanceStatus: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Light,
    fontSize: common.baseFontSize - 2,
  },
  settledUp: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Light,
    color: colors.gray,
  },
  friendText: {
    flex: 5,
    paddingHorizontal: 15,
    letterSpacing: 1,
    alignSelf: "center",
    marginTop: 10,
    color: colors.textBlack,
    textAlign: "right",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 2,
    writingDirection: "rtl",
  },
  friendImage: {
    height: 60,
    width: 60,
    borderRadius: common.baseBorderRadius + 5,
    alignSelf: "center",
  },
});
