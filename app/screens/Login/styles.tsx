import { StyleSheet, Platform } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 20;
const textColor = "#333333";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: "center",
    transform: [{ scale: 0.25 }],
  },
  textHeader: {
    textAlign: "center",
    color: mainColor,
    fontSize: 50,
    writingDirection: "auto",
    fontFamily: "Alex",
  },
  contentWrapper: {
    flex: 4,
    elevation: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  text: {
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: textColor,
    fontSize: 18,
  },
  formsContainer: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    fontSize: 16,
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
    color: "red",
  },
  validationText: {
    color: "red",
    padding: 5,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
  },
  resetPasswordText: {
    margin: 10,
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: mainColor,
  },
  footerContainer: {
    flex: 2,
  },
  buttonsContainer: {
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
  },
  filledButton: {
    width: "40%",
    elevation: 2,
    marginHorizontal: 10,
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  outlinedButton: {
    width: "40%",
    elevation: 2,
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
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  outlinedButtonText: {
    fontSize: 18,
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
