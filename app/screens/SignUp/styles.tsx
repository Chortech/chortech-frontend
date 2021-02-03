import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.loginLogoBackground,
  },
  headerContainer: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: "center",
    transform: [{ scale: 0.25 }],
  },
  formsContainer: {
    flex: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
    backgroundColor: colors.white,
    borderTopRightRadius: common.baseBorderRadius,
    borderTopLeftRadius: common.baseBorderRadius,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    margin: 5,
  },
  textInputContainer: {
    flexDirection: "row",
    marginTop: 10,
    borderRadius: common.baseBorderRadius,
    backgroundColor: colors.textInputBackground,
    padding: 5,
  },
  textInput: {
    flex: 10,
    color: colors.textBlack,
    padding: 10,
    fontSize: common.baseFontSize,
    fontFamily: fonts.IranSans_Light,
    textAlign: "right",
  },
  validationText: {
    color: colors.red,
    padding: 5,
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 4,
  },
  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
    alignSelf: "center",
  },
  visiblePassword: {
    color: colors.mainColor,
  },
  invisiblePassword: {
    color: colors.gray,
  },
  buttonsContainer: {
    marginTop: 50,
    justifyContent: "center",
  },
  codeVerificationScreenButton: {
    width: "70%",
    alignSelf: "center",
    marginHorizontal: 10,
    backgroundColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  codeVerificationScreenButtonText: {
    fontSize: common.baseFontSize + 2,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
  loggedInBeforeText: {
    margin: 15,
    fontSize: common.baseFontSize,
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.mainColor,
  },
});
