import { StyleSheet, Platform } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 20;
const textColor = "#333333";
const baseFontSize = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
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
    fontFamily: "IRANSansWeb_Bold",
    color: textColor,
    fontSize: baseFontSize,
    margin: 5,
  },
  formsContainer: {
    flex: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  textInputContainer: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: borderRadius,
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
  textInput: {
    flex: 10,
    color: textColor,
    padding: 10,
    fontSize: baseFontSize,
    fontFamily: "IRANSansWeb_Light",
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
    color: mainColor,
  },
  invisiblePassword: {
    color: "gray",
  },
  validationText: {
    color: "red",
    padding: 5,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: baseFontSize - 4,
  },
  resetPasswordText: {
    margin: 10,
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: mainColor,
    fontSize: baseFontSize,
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
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  outlinedButton: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: mainColor,
  },
  filledButtonText: {
    fontSize: baseFontSize + 2,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  outlinedButtonText: {
    fontSize: baseFontSize + 2,
    color: mainColor,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  privacyText: {
    margin: 10,
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: mainColor,
  },
});
