import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 3,
    alignItems: "center",
    paddingTop: 10,
  },
  profileImage: {
    height: 80,
    width: 80,
    marginTop: 10,
    borderRadius: 50,
  },
  userNameText: {
    fontSize: 20,
    marginVertical: 10,
    padding: 5,
    color: "#fff",
    alignItems: "center",
    fontFamily: "IRANSansWeb_Bold",
  },
  infoContainer: {
    flex: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  textWrapper: {
    flexDirection: "row",
  },
  textContainerRight: {
    padding: 15,
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
    justifyContent: "flex-start",
  },
  textContainerLeft: {
    flex: 5,
    padding: 15,
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
    justifyContent: "flex-end",
  },
  textInfo: {
    fontSize: 12,
    padding: 2,
    color: "#053751",
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
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
