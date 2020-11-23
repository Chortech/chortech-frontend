import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 2,
    alignItems: "center",
    paddingTop: 10,
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
    height: 100,
    width: 100,
    borderRadius: 50,
    padding: 10,
    borderWidth: 4,
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
    marginVertical: 10,
    color: "#fff",
    alignItems: "center",
    fontFamily: "IRANSansWeb_Bold",
  },
});

export default styles;