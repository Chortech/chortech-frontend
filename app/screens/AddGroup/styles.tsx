import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  screenTitleText: {
    textAlign: "center",
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    paddingVertical: 5,
  },
  groupInfoContainer: {
    backgroundColor: colors.white,
    padding: 5,
    justifyContent: "center",
  },
  groupNameTextInput: {
    color: colors.textBlack,
    backgroundColor: colors.textInputBackground,
    borderWidth: 1,
    marginHorizontal: 10,
    fontSize: common.baseFontSize,
    borderRadius: common.baseBorderRadius,
    borderColor: colors.ultraLightGray,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Light,
    textAlign: "center",
  },
  imageContainer: {
    padding: 5,
    alignSelf: "center",
    marginVertical: 10,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderWidth: 1,
    padding: 5,
    justifyContent: "center",
    backgroundColor: colors.transparentBlack,
    borderRadius: 20,
  },
  cameraIcon: {
    color: colors.white,
    alignSelf: "center",
  },
  groupImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginVertical: 20,
  },
  addGroupButtonContainer: {
    elevation: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
  },
  addGroupButtonText: {
    fontSize: common.baseFontSize,
    color: colors.mainColor,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
});
