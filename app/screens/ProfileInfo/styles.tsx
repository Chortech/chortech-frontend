import { StyleSheet } from "react-native";
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
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    margin: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
  },

  infoContainer: {
    flex: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderTopRightRadius: common.baseBorderRadius,
    borderTopLeftRadius: common.baseBorderRadius,
  },
  buttonContainer: {
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
  },
  arrowIconContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 2,
  },
  arrowIcon: {
    color: colors.textBlack,
  },
  textContainer: {
    flex: 6,
    paddingHorizontal: 5,
    justifyContent: "center",
    paddingVertical: 5,
  },
  titleText: {
    fontSize: common.baseFontSize - 2,
    color: colors.textBlack,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Medium,
    padding: 2,
  },
  infoText: {
    fontSize: common.baseFontSize - 2,
    padding: 2,
    color: colors.textBlack,
    writingDirection: "auto",
    alignSelf: "flex-end",
    fontFamily: fonts.IranSans_Medium,
  },
});
