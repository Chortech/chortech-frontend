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
    flex: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  customInputContainer: {
    marginTop: 15,
  },
  label: {
    color: "#053751",
    fontFamily: "IRANSansWeb_Bold",
    textAlign: "right",
    paddingRight: 2,
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 5,
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

  buttonContainer: {
    flex: 4,
    justifyContent: "flex-end",
    marginTop: 30,
  },
  filledButton: {
    elevation: 5,
    backgroundColor: "#1AD927",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  outlinedButton: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  filledButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  outlinedButtonText: {
    fontSize: 18,
    color: "red",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
