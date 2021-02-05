import { StyleSheet, Platform } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  header: {
    alignItems: "center",
    padding: 5,
  },
  popupMenuContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingHorizontal: 10,
    marginVertical: 20,
    marginRight: 10,
  },
  friendImage: {
    height: 80,
    width: 80,
    marginTop: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
  },
  text: {
    fontFamily: fonts.IranSans_Light,
    fontSize: 14,
    color: colors.white,
    alignSelf: "center",
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
  balanceStatusContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    padding: 5,
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
  infoContainer: {
    flex: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderTopRightRadius: common.baseBorderRadius - 5,
    borderTopLeftRadius: common.baseBorderRadius - 5,
  },
  flatList: {
    marginHorizontal: 5,
    marginBottom: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  settleUpButton: {
    backgroundColor: colors.white,
    borderRadius: common.baseBorderRadius,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  settleUpButtonText: {
    fontSize: common.baseFontSize - 2,
    color: colors.mainColor,
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Medium,
    writingDirection: "auto",
  },
});
