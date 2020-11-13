import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textHeader: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
  },
  infoContainer: {
    flex: Platform.OS === "ios" ? 4 : 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  textInput: {
    flex: 10,
    color: "#053751",
    padding: 10,
    fontFamily: "Dirooz",
    textAlign: "right",
  },

  toggleIcon: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
    alignSelf: "center",
  },

  validationText: {
    color: "red",
    padding: 5,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
  },
  buttonContainer: {
    flex: 5,
    width: "100%",
    marginTop: 30,
    justifyContent: "flex-end",
  },

  confirmButton: {
    elevation: 10,
    backgroundColor: "#1AD927",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  confirmButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
