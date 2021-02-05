import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 1.2,
    justifyContent: "center",
  },
  textHeader: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Bold,
  },
  screenTitleText: {
    textAlign: "center",
    fontFamily: fonts.IranSans_Bold,
    color: colors.textBlack,
    fontSize: 16,
    marginHorizontal: 30,
    paddingTop: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ultraLightGray,
  },
  infoContainer: {
    flex: 8,
    backgroundColor: colors.white,
    paddingBottom: 10,
  },
});

export default styles;
