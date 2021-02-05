import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  memberContainer: {
    marginBottom: 5,
    padding: 10,
    flexDirection: "row",
    backgroundColor: colors.ultraXLightGray,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: colors.ultraLightGray,
    borderTopColor: colors.ultraLightGray,
  },
  memberName: {
    flex: 5,
    paddingHorizontal: 15,
    letterSpacing: 1,
    alignSelf: "center",
    marginTop: 10,
    color: colors.textBlack,
    textAlign: "right",
    justifyContent: "center",
    fontFamily: fonts.IranSans_Medium,
    fontSize: common.baseFontSize - 2,
    writingDirection: "rtl",
  },
  memberImage: {
    height: 50,
    width: 50,
    borderRadius: common.baseBorderRadius,
    alignSelf: "center",
  },
  DeleteMemberIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
    paddingLeft: 10,
  },
  DeleteMemberIcon: {
    alignSelf: "center",
    color: colors.red,
    justifyContent: "center",
  },
});
