import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textHeader: {
    textAlign: "center",
    color: "#fff",
    fontSize: 50,
    writingDirection: "auto",
    fontFamily: "Alex",
  },
  infoContainer: {
    flex: 6,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
    paddingBottom: 5,
  },
  searchBar: {
    backgroundColor: "white",
  },
  textInput: {
    flex: 10,
    color: "#053751",
    fontFamily: "Dirooz",
    textAlign: "right",
    backgroundColor: "white",
    justifyContent: "center",
  },
  searchInput: {
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 14,
    textAlign: "right",
    color: "#053751",
    justifyContent: "center",
  },
  searchInputContainer: {
    fontFamily: "Dirooz",
    textAlign: "right",
    backgroundColor: "white",
  },
});
