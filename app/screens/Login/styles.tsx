import { StyleSheet, Platform } from "react-native";
import { color } from "react-native-reanimated";
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
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    margin: 5,
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
  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
    alignSelf: "center",
    alignContent: "center",
  },
  visiblePassword: {
    color: colors.mainColor,
  },
  invisiblePassword: {
    color: colors.gray,
  },
  validationText: {
    color: colors.red,
    padding: 5,
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 4,
  },
  resetPasswordText: {
    margin: 10,
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    color: colors.mainColor,
    fontSize: common.baseFontSize,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  filledButton: {
    flex: 2,
    marginHorizontal: 10,
    backgroundColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  outlinedButton: {
    flex: 2,
    backgroundColor: colors.white,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.mainColor,
  },
  filledButtonText: {
    fontSize: common.baseFontSize + 2,
    color: "#fff",
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
  outlinedButtonText: {
    fontSize: common.baseFontSize + 2,
    color: colors.mainColor,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
  privacyText: {
    margin: 10,
    textAlign: "center",
    fontFamily: fonts.IranSans_Medium,
    color: colors.mainColor,
  },
});
