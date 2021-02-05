import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  viewContainer: {
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderTopColor: colors.ultraLightGray,
    borderBottomColor: colors.ultraLightGray,
    backgroundColor: colors.ultraXLightGray,
  },
  nameText: {
    flex: 10,
    color: colors.textBlack,
    padding: 6,
    textAlign: "right",
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    fontSize: common.baseFontSize,
  },
  textInput: {
    flex: 6,
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.ultraLightGray,
    borderRadius: 10,
    alignContent: "center",
  },
  circle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 8,
  },
  selectedItem: {
    color: colors.mainColor,
    borderRadius: 50,
  },
  unselectedItem: {
    color: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 50,
  },
});
