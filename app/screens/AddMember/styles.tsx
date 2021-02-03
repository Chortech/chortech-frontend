import { StyleSheet, Platform } from "react-native";
import colors from "../../assets/resources/colors";
import common from "../../assets/resources/common";
import fonts from "../../assets/resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AD927",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerTextInput: {
    width: "100%",
    color: "#053751",
    marginHorizontal: 5,
    backgroundColor: "#fff",
    fontSize: 18,
    writingDirection: "auto",
    fontFamily: "IRANSansWeb_Bold",
    borderRadius: 10,
    textAlign: "center",
  },
  infoContainer: {
    flex: 9,
    backgroundColor: "#fff",
  },
  searchBar: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#1AD927",
    margin: 10,
  },
  searchInput: {
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
    textAlign: "right",
    color: "#053751",
    justifyContent: "center",
  },
  inputContainer: {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
    marginBottom: 10,
  },
  textInput: {
    marginTop: 5,
    padding: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 12,
    textAlign: "center",
    fontSize: 16,
    color: "#000",
    fontFamily: "Dirooz",
  },
  splitOptionsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // paddingVertical: 5,
    bottom: 0,
  },
  footerComponent: {
    marginTop: 5,
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    bottom: 0,
  },
  addButton: {
    flex: 1,
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1AD927",
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 16,
    color: "#1AD927",
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  removeButton: {
    flex: 1,
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 10,
    justifyContent: "center",
  },
  removeButtonText: {
    fontSize: 16,
    color: "red",
    paddingHorizontal: 10,
    alignSelf: "center",
    fontFamily: "IRANSansWeb_Bold",
    writingDirection: "auto",
  },
  validationText: {
    color: "red",
    padding: 5,
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 12,
    textAlign: "center",
  },
  modalOutmostContainer: {
    backgroundColor: "#dbdbdbaa",
    flex: 2,
    padding: 10,
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
  },
  showModalButton: {
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "#1AD927",
    padding: 5,
    margin: 5,
    marginTop: 10,
  },
  hideModalButton: {
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "red",
    padding: 5,
    margin: 5,
    marginTop: 10,
  },
  modalButtonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#1AD927",
    fontFamily: "IRANSansWeb_Bold",
    paddingHorizontal: 20,
  },
  hideModalButtonText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "red",
    fontFamily: "IRANSansWeb_Bold",
    paddingHorizontal: 20,
  },
  modalItemContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
  },
  modalHeaderContainer: {
    marginBottom: 10,
  },
  modalNameText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#1AD927",
    fontFamily: "IRANSansWeb_Bold",
    fontSize: 16,
  },
  modalShareText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#1AD927",
    fontSize: 14,
  },
  logoutIconContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  logoutIcon: {
    color: colors.red,
    transform: [{ rotate: "180deg" }],
  },
  textContainer: {
    flex: 6,
    paddingHorizontal: 5,
    justifyContent: "center",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: common.baseFontSize - 2,
    color: colors.textBlack,
    writingDirection: "auto",
    fontFamily: fonts.IranSans_Medium,
  },
});
