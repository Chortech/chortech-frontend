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
    flex: 6,
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
    paddingVertical: 20,
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
  validationText: {
    color: "red",
    padding: 5,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
  },
  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
    alignSelf: "center",
  },
  visiblePassword: {
    color: mainColor,
  },
  invisiblePassword: {
    color: "red",
  },
  footerContainer: {
    flex: 2,
    bottom: 0,
  },
  buttonsContainer: {
    flex: 2,
    marginTop: 50,
    justifyContent: "center",
  },
  verifyScreenButton: {
    width: "60%",
    alignSelf: "center",
    elevation: 2,
    marginHorizontal: 10,
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  verifyScreenButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  loggedInBeforeText: {
    margin: 10,
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: mainColor,
  },
});
