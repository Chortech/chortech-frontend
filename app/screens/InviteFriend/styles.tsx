import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    backgroundColor: colors.white,
    elevation: 5,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    marginHorizontal: 30,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
  },
  loadContactsButtonContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: common.baseBorderRadius,
    borderColor: colors.mainColor,
  },
  loadContactsButtonText: {
    alignSelf: "center",
    padding: 5,
    textAlign: "center",
    color: colors.mainColor,
    fontFamily: fonts.IranSans_Medium,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: common.baseBorderRadius,
    fontSize: common.baseFontSize,
    fontFamily: fonts.IranSans_Light,
    textAlign: "center",
  },
  addNewContactButton: {
    flexDirection: "row-reverse",
    padding: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: common.baseBorderRadius,
    borderColor: colors.mainColor,
  },
  addNewContactButtonText: {
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  addNewContactIcon: {
    color: colors.mainColor,
  },
  selectedList: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  userContainer: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignSelf: "center",
    borderRightWidth: 1,
    borderRightColor: colors.lightGray,
  },
  userIcon: {
    color: colors.mainColor,
    alignSelf: "center",
  },
  userText: {
    paddingTop: 5,
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 2,
  },
  cancelIcon: {
    borderWidth: 1,
    color: colors.red,
    borderColor: colors.red,
    borderRadius: 10,
  },
  contactList: {
    paddingTop: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: common.baseFontSize,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
});
