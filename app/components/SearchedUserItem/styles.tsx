import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e1e2",
  },
  itemText: {
    fontSize: 16,
    flex: 2,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
  },
  plusIconStyle: {
    color: "#1AD927",
    alignItems: "center",
    justifyContent: "center",
  },
});
