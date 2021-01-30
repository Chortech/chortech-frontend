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
    textAlign: "right",
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

  validationText: {
    color: colors.red,
    padding: 5,
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 4,
  },

  buttonContainer: {
    flex: 4,
    justifyContent: "flex-end",
  },
  confirmButton: {
    width: "70%",
    alignSelf: "center",
    marginHorizontal: 10,
    backgroundColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  confirmButtonText: {
    fontSize: common.baseFontSize + 2,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
});
