import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1AD927'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textHeader: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 50,
        writingDirection: 'auto',
        fontFamily: 'Alex',
    },
    infoContainer: {
        flex: 6,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        paddingBottom: 5,
    },
    searchBar: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#EBE8E8',
    },
    textInput: {
        flex: 10,
        color: '#053751',
        fontFamily: 'Dirooz',
        textAlign: 'right',
        backgroundColor: 'white',
    },
    buttonContainer: {
		flex: 5,
		justifyContent: 'flex-end',
        marginBottom: 30,
	},
    button: {
		elevation: 1,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#1AD927',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginBottom: 15,
	},
	buttonText: {
		fontSize: 16,
		color: '#1AD927',
		alignSelf: 'center',
		fontFamily: 'IRANSansWeb_Bold',
		writingDirection: 'auto',
	},
    cancelButton: {
		elevation: 1,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: 'red',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginBottom: 15,
	},
	cancelButtonText: {
		fontSize: 16,
		color: 'red',
		alignSelf: 'center',
		fontFamily: 'IRANSansWeb_Bold',
		writingDirection: 'auto',
	},
});
