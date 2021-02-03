import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    flex: 1.2,
    justifyContent: "center",
  },
  textHeader: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: "IRANSansWeb_Bold",
    color: colors.textBlack,
    fontSize: 16,
    marginHorizontal: 30,
    paddingTop: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  infoContainer: {
    flex: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  button: {
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1AD927",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#1AD927",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  activityContainer: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    borderBottomColor: "#EBE8E8",
    borderBottomWidth: 1,
  },
  activityText: {
    flex: 5,
    padding: 10,
    marginTop: 10,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
  },
  activityImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 10,
    borderWidth: 2,
    borderColor: "#1AD927",
  },
  userNameText: {
    fontSize: 20,
    marginVertical: 10,
    color: "#fff",
    alignItems: "center",
    fontFamily: "IRANSansWeb_Bold",
  },
});

export default styles;
