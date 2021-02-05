import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  activityContainer: {
    marginTop: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 4,
    borderLeftWidth: 0,
    borderColor: colors.ultraLightGray,
    backgroundColor: colors.ultraXLightGray,
  },
  activityText: {
    flex: 5,
    paddingHorizontal: 15,
    letterSpacing: 1,
    alignSelf: "center",
    margin: 10,
    color: colors.textBlack,
    textAlign: "right",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 2,
    writingDirection: "rtl",
  },
});
