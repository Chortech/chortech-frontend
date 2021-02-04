import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoContainer: {
    flex: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 5,
    justifyContent: "flex-end",
    marginVertical: 20,
  },
  textInput: {
    marginTop: 5,
    padding: 10,
    backgroundColor: colors.textInputBackground,
    borderRadius: common.baseBorderRadius,
    textAlign: "center",
    fontSize: common.baseFontSize,
    color: colors.textBlack,
    fontFamily: fonts.IranSans_Light,
  },
  settleUpButton: {
    elevation: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  settleUpButtonText: {
    fontSize: common.baseFontSize,
    color: colors.mainColor,
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    paddingBottom: 5,
    marginBottom: 10,
  },
});
