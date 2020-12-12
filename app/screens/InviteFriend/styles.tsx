import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1AD927",
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
    fontSize: 12,
    textAlign: "right",
    color: "#053751",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 5,
    justifyContent: "flex-end",
    margin: 20,
  },
  button: {
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1AD927",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#1AD927",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
