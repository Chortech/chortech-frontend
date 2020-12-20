import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: 10,
  },
  textHeader: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    padding: 10,
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
  },
  infoContainer: {
    flex: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  groupContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
  },
  groupText: {
    flex: 5,
    padding: 10,
    marginTop: 10,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
  },
  groupImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  activityImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 10,
    borderWidth: 2,
    borderColor: "#1AD927",
  },
  text: {
    fontSize: 20,
    marginVertical: 8,
    color: "#fff",
    alignItems: "center",
    fontFamily: "IRANSansWeb_Bold",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  removeButton: {
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  removeButtonText: {
    fontSize: 16,
    color: "red",
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});

export default styles;
