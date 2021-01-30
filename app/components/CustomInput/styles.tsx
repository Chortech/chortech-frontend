import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  customInputContainer: {
    marginTop: 15,
  },
  label: {
    color: colors.textBlack,
    fontFamily: fonts.IranSans_Bold,
    textAlign: "right",
    writingDirection: "rtl",
    paddingRight: 6,
    fontSize: common.baseFontSize - 4,
  },
  inputContainer: {
    flex: 4,
    flexDirection: "row",
    marginTop: 5,
    borderRadius: common.baseBorderRadius,
    backgroundColor: colors.textInputBackground,
    justifyContent: "center",
  },
  inputContainerError: {
    flex: 4,
    flexDirection: "row",
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 10,
    backgroundColor: colors.textInputBackground,
    justifyContent: "center",
  },
  textInput: {
    flex: 10,
    color: colors.textBlack,
    padding: 10,
    fontFamily: fonts.IranSans_Light,
    textAlign: "right",
    alignSelf: "center",
  },
  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  cancelIcon: {
    flex: 1,
    marginRight: 5,
    marginTop: 4,
    marginLeft: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  confirmIcon: {
    flex: 1,
    marginRight: 8,
    marginTop: 4,
    marginLeft: 5,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});
