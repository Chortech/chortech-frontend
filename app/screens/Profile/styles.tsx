import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 4,
  },
  imageContainer: {
    flex: 1,
  },
  cameraIconContainer: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
    padding: 10,
    margin: 15,
    borderWidth: 1,
    position: "absolute",
    borderColor: colors.white,
    top: 0,
    borderRadius: common.baseBorderRadius,
  },
  cameraIcon: {
    color: colors.white,
  },
  infoContainer: {
    flex: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderTopRightRadius: common.baseBorderRadius,
    borderTopLeftRadius: common.baseBorderRadius,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    margin: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
  },
  buttonContainer: {
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.textInputBackground,
  },
  arrowIconContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  arrowIcon: {
    color: colors.textBlack,
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
  infoText: {
    fontSize: common.baseFontSize - 2,
    padding: 2,
    color: colors.textBlack,
    writingDirection: "auto",
    alignSelf: "flex-end",
    fontFamily: fonts.IranSans_Light,
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
});
