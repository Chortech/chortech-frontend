import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    margin: 10,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    borderBottomColor: "#cccccc",
  },
  nameText: {
    flex: 10,
    color: "black",
    padding: 6,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 14,
  },
  textInput: {
    flex: 6,
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    alignContent: "center",
  },
  circle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 8,
  },
  selectedItem: {
    color: "#1AD927",
    borderRadius: 50,
  },
  unselectedItem: {
    color: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
  },
});
