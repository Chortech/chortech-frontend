import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contactsContainer: {
    // flex: 1,
  },
  inputContainer: {
    backgroundColor: colors.white,
    elevation: 5,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    fontSize: 16,
    fontFamily: fonts.IranSans_Light,
    textAlign: "center",
  },
  addNewContactButton: {
    flexDirection: "row-reverse",
    padding: 15,
    marginBottom: 5,
    justifyContent: "center",
  },
  addNewContactButtonText: {
    fontFamily: fonts.IranSans_Medium,
    fontSize: 16,
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
    fontSize: 14,
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
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
});
