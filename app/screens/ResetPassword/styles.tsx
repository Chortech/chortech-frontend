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
    padding: 10,
    fontFamily: "IRANSansWeb_Light",
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

  buttonContainer: {
    flex: 4,
    justifyContent: "flex-end",
  },
  confirmButton: {
    width: "70%",
    alignSelf: "center",
    marginHorizontal: 10,
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  confirmButtonText: {
    fontSize: baseFontSize + 2,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
