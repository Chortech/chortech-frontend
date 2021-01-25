import { StyleSheet } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 20;
const textColor = "#333333";
const baseFontSize = 16;
const grayColor = "#aaaaaa22";

export const styles = StyleSheet.create({
  friendContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    borderTopRightRadius: borderRadius + 30,
    borderBottomRightRadius: borderRadius + 30,
    borderWidth: 4,
    borderLeftWidth: 0,
    borderColor: grayColor,
    backgroundColor: "#f9f9f9",
  },
  friendText: {
    flex: 5,
    paddingHorizontal: 15,
    letterSpacing: 1,
    alignSelf: "center",
    marginTop: 10,
    color: textColor,
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    fontSize: baseFontSize,
    writingDirection: "rtl",
  },
  friendImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: mainColor,
    alignSelf: "center",
  },
});
