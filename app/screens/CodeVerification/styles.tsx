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
    fontSize: 50,
    writingDirection: "auto",
    fontFamily: "Alex",
  },
  footer: {
    flex: Platform.OS === "ios" ? 4 : 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textInput: {
    flex: 5,
    marginTop: 0,
    color: "#053751",
    padding: 10,
    fontFamily: "Dirooz",
    writingDirection: "auto",
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
  buttonContainer: {
    flex: 5,
    width: "100%",
    marginTop: 30,
    justifyContent: "flex-end",
  },
  buttonResend: {
    fontSize: 14,
    color: "#053751",
    margin: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  timerContainer: {
    margin: 30,
    alignItems: "center",
  },
  timerLabel: {
    fontFamily: "Alex",
    borderWidth: 1,
    borderColor: "#1AD927",
    padding: 2,
  },
  seperatorLabel: {
    fontSize: 18,
    color: "#1AD927",
  },
});
