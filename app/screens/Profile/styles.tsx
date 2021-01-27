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
  header: {
    flex: 4,
  },
  imageContainer: {
    flex: 1,
  },
  cameraIconContainer: {
    flex: 1,
    backgroundColor: "#00000077",
    padding: 10,
    margin: 15,
    borderWidth: 1,
    position: "absolute",
    borderColor: "#fff",
    top: 0,
    borderRadius: borderRadius,
  },
  cameraIcon: {
    color: "#fff",
  },
  infoContainer: {
    flex: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
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
    paddingBottom: 5,
  },
  arrowIcon: {
    color: textColor,
  },
  textContainer: {
    flex: 6,
    paddingHorizontal: 5,
    justifyContent: "center",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: baseFontSize - 2,
    color: textColor,
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Medium",
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
