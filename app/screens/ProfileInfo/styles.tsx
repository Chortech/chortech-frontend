import { StyleSheet } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 25;
const textColor = "#333333";
const baseFontSize = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: textColor,
    fontSize: baseFontSize,
    margin: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },

  infoContainer: {
    flex: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  buttonContainer: {
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddddddaa",
  },
  arrowIconContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 2,
  },
  arrowIcon: {
    color: textColor,
  },
  textContainer: {
    flex: 6,
    paddingHorizontal: 5,
    justifyContent: "center",
    paddingVertical: 5,
  },
  titleText: {
    fontSize: baseFontSize - 2,
    color: textColor,
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Medium",
    padding: 2,
  },
  infoText: {
    fontSize: baseFontSize - 2,
    padding: 2,
    color: textColor,
    writingDirection: "auto",
    alignSelf: "flex-end",
    fontFamily: "IRANSansWeb_Light",
  },
  logoutIconContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  logoutIcon: {
    color: "red",
    transform: [{ rotate: "180deg" }],
  },
});
