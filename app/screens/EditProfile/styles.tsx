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
    paddingHorizontal: 20,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    margin: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
  },
  buttonsContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  filledButton: {
    backgroundColor: colors.mainColor,
    borderRadius: common.baseBorderRadius,
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
  },
  filledButtonText: {
    fontSize: common.baseFontSize + 2,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
});
