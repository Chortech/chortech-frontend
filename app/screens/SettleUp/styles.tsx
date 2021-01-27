import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1AD927",
    },
    infoContainer: {
        flex: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flex: 5,
        justifyContent: "flex-end",
        marginVertical: 20,
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
    settleUpButton: {
        elevation: 1,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#1AD927",
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
    },
    settleUpButtonText: {
        fontSize: 16,
        color: "#1AD927",
        paddingHorizontal: 10,
        alignSelf: "center",
        fontFamily: "IRANSansWeb_Bold",
        writingDirection: "auto",
    },
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 10,
        paddingBottom: 5,
        marginBottom: 10,
    }
});
