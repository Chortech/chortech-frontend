import { StyleSheet } from "react-native";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";

const mainColor = "#00bb5d";
const borderRadius = 20;
const textColor = "#333333";
const baseFontSize = 16;
const grayColor = "#aaaaaa22";

export const styles = StyleSheet.create({
    activityContainer: {
        marginTop: 15,
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: "row",
        borderTopRightRadius: borderRadius + 30,
        borderBottomRightRadius: borderRadius + 30,
        borderWidth: 4,
        borderLeftWidth: 0,
        borderColor: colors.ultraLightGray,
        backgroundColor: "#f9f9f9",
    },
    activityText: {
        flex: 5,
        paddingHorizontal: 15,
        letterSpacing: 1,
        alignSelf: "center",
        marginTop: 10,
        color: textColor,
        textAlign: "right",
        fontFamily: "IRANSansWeb_Medium",
        fontSize: baseFontSize - 2,
        writingDirection: "rtl",
    },
});
