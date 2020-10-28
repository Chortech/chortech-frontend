/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 800,
        backgroundColor: '#1AD927',
    },
    header: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 10,
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'lightgreen',
    },
    userNameText: {
        fontSize: 20,
        marginVertical: 15,
        color: '#fff',
        alignItems: 'center',
        fontFamily: 'Alex',
    },
    infoContainer: {
        flex: 6,
        backgroundColor: '#fff',
        height: 450,
        paddingHorizontal: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    textContainer: {
        padding: 15,
        borderBottomColor: '#EBE8E8',
        borderBottomWidth: 1,
    },
    textInfo: {
        fontSize: 12,
        padding: 2,
        color: '#053751',
        writingDirection: 'auto',
        fontFamily: 'IRANSansWeb_Bold',
    },
    buttonContainer: { 
        flex: 5,
        justifyContent: 'flex-end',
        margin: 20,
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
});
