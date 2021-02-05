import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  infoContainer: {},
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: common.baseFontSize,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
    alignSelf: "center",
    justifyContent: "center",
  },
});
