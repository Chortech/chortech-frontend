import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoContainer: {
    flex: 8,
    backgroundColor: colors.white,
    paddingRight: 10,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
  },
  friendImage: {
    height: 80,
    width: 80,
    marginTop: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
  },
  userNameText: {
    fontSize: 25,
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    color: colors.white,
    alignItems: "center",
    fontFamily: fonts.IranSans_Bold,
  },
  logoutIconContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  logoutIcon: {
    color: colors.red,
    transform: [{ rotate: "180deg" }],
  },
  textContainer: {
    flex: 6,
    paddingHorizontal: 5,
    justifyContent: "center",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: common.baseFontSize - 2,
    color: colors.textBlack,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Medium,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    bottom: 0,
  },
});
