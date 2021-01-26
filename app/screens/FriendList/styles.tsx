import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textHeader: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Bold,
  },
  infoContainer: {
    flex: 8,
    backgroundColor: colors.white,
    paddingRight: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  button: {
    elevation: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.mainColor,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.mainColor,
    alignSelf: "center",
    fontFamily: fonts.IranSans_Bold,
    writingDirection: "auto",
  },
});
