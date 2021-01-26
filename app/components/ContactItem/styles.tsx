import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#f9f9f9",
    flexDirection: "row-reverse",
    borderWidth: 4,
    borderColor: "#aaaaaa22",
  },
  contactIcon: {
    marginLeft: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.IranSans_Medium,
    textAlign: "right",
    color: colors.textBlack,
    justifyContent: "center",
    alignSelf: "center",
  },
});
