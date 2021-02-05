import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginHorizontal: 20,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    paddingVertical: 5,
  },
  normaText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    color: colors.textBlack,
    fontSize: common.baseFontSize - 2,
    paddingVertical: 5,
  },
  infoContainer: {
    flex: 9,
    backgroundColor: colors.white,
  },
  addMembersButtonContainer: {
    borderWidth: 1,
    borderRadius: common.baseBorderRadius,
    borderColor: colors.mainColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  addMembersButtonText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize,
    color: colors.mainColor,
  },
});
