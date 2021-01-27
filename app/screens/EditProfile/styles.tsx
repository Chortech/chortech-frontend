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
  infoContainer: {
    flex: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: textColor,
    fontSize: baseFontSize,
    margin: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  buttonsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  filledButton: {
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
  },
  filledButtonText: {
    fontSize: baseFontSize + 2,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
