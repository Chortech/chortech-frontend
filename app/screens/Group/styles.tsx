import { StyleSheet, Platform } from "react-native";
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
  settingIconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 25,
  },
  settingIcon: {
    color: colors.white,
  },
  groupName: {
    fontSize: 25,
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    color: colors.white,
    alignItems: "center",
    fontFamily: fonts.IranSans_Bold,
  },
  groupImage: {
    height: 80,
    width: 80,
    marginTop: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
  },
  balanceStatusContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    padding: 5,
  },
  text: {
    fontFamily: fonts.IranSans_Light,
    fontSize: 14,
    color: colors.white,
    alignSelf: "center",
  },

  infoContainer: {
    flex: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  settleUpButton: {
    backgroundColor: colors.white,
    borderRadius: common.baseBorderRadius,
    marginVertical: 5,
    marginHorizontal: 5,
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

export default styles;
