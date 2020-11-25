import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e1e2",
  },
  itemText: { fontSize: 18, flex: 2, padding: 6, alignSelf: "center" },
  plusIconStyle: { color: "#1AD927", alignSelf: "center", margin: 4 },
});
