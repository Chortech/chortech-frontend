import { StyleSheet, Platform } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 20;
const textColor = "#333333";
const baseFontSize = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formsContainer: {
    flex: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: textColor,
    fontSize: baseFontSize,
    margin: 5,
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
    flex: 5,
    color: textColor,
    fontSize: baseFontSize,
    padding: 10,
    fontFamily: "IRANSansWeb_Light",
    writingDirection: "auto",
    textAlign: "center",
  },
  validationText: {
    color: "red",
    padding: 5,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: baseFontSize - 4,
  },
  buttonContainer: {
    flex: 4,
    justifyContent: "flex-end",
  },
  confirmButton: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    paddingVertical: 10,
  },
  confirmButtonText: {
    fontSize: baseFontSize + 2,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
