import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  header: {
    flex: 2,
    alignItems: "center",
    padding: 5,
  },
  friendImage: {
    height: 80,
    width: 80,
    marginTop: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userNameText: {
    fontSize: 25,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#ffffff55",
    color: colors.white,
    alignItems: "center",
    fontFamily: fonts.IranSans_Bold,
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
    flex: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  buttonContainer: {
    justifyContent: "center",
  },
  removeButton: {
    elevation: 1,
    backgroundColor: colors.red,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  removeButtonText: {
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
});
