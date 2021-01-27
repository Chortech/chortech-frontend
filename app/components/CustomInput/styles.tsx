import { StyleSheet } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 15;
const textColor = "#333333";
const baseFontSize = 16;
const grayColor = "#f2f2f2";

export const styles = StyleSheet.create({
  customInputContainer: {
    marginTop: 15,
  },
  label: {
    color: textColor,
    fontFamily: "IRANSansWeb_Bold",
    textAlign: "right",
    writingDirection: "rtl",
    paddingRight: 6,
    fontSize: baseFontSize - 4,
  },
  inputContainer: {
    flex: 4,
    flexDirection: "row",
    marginTop: 5,
    borderRadius: borderRadius,
    backgroundColor: grayColor,
    paddingBottom: 5,
  },
  textContainer: {
    flex: 4,
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "rgba(0,0,0,0)",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: grayColor,
  },
  inputContainerError: {
    flex: 4,
    flexDirection: "row",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    backgroundColor: grayColor,
    paddingBottom: 5,
  },
  textInput: {
    flex: 10,
    color: textColor,
    padding: 10,
    fontFamily: "Dirooz",
    textAlign: "right",
  },
  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginTop: 4,
    marginLeft: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
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
