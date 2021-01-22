import { StyleSheet } from "react-native";

const mainColor = "#00bb5d";
const borderRadius = 25;
const textColor = "#333333";
const baseFontSize = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
  header: {
    flex: 3,
  },
  imageContainer: {
    flex: 4,
  },
  profileImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    flexWrap: "wrap",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  logoutIconContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderRadius: borderRadius,
    // borderColor: "#fff",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    transform: [{ rotate: "180deg" }],
  },
  logoutIcon: {
    color: "#fff",
  },
  infoContainer: {
    flex: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 15,
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  textWrapper: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    marginVertical: 5,
    borderRadius: borderRadius - 5,
  },
  textContainerRight: {
    padding: 15,
    justifyContent: "center",
  },
  textContainerLeft: {
    flex: 5,
    padding: 10,
    justifyContent: "center",
  },
  textInfo: {
    fontSize: baseFontSize - 2,
    padding: 2,
    color: textColor,
    writingDirection: "auto",
    alignSelf: "flex-start",
    fontFamily: "IRANSansWeb_Medium",
  },
  buttonContainer: {
    marginTop: 70,
  },
  editButton: {
    width: "55%",
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
    alignSelf: "center",
    backgroundColor: mainColor,
    borderRadius: borderRadius,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  editButtonText: {
    fontSize: baseFontSize,
    color: "#fff",
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  editIcon: {
    color: "#fff",
    paddingHorizontal: 5,
  },
});
