import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  formsContainer: {
    flex: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    flex: 5,
    color: colors.textBlack,
    padding: 10,
    fontFamily: fonts.IranSans_Light,
    writingDirection: "auto",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 4,
    justifyContent: "flex-end",
  },
  confirmButton: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
  },
  confirmButtonText: {
    fontSize: common.baseFontSize + 2,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
  resendButtonText: {
    fontSize: common.baseFontSize,
    color: colors.textBlack,
    margin: 15,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
  timerContainer: {
    margin: 25,
    alignItems: "center",
  },
  timerLabel: {
    fontFamily: "Alex",
    borderWidth: 1,
    borderColor: colors.mainColor,
    padding: 2,
  },
  seperatorLabel: {
    fontSize: common.baseFontSize + 2,
    color: colors.mainColor,
  },
});
