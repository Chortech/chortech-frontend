import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    margin: 10,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  nameText: {
    flex: 10,
    color: "black",
    padding: 6,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 14,
  },
  circle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
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
