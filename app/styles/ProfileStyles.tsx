/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // adding flex is needed.
        height: 800,
        backgroundColor: '#1AD927',
    },
    headerStyle: {
        alignItems: 'center',
        paddingTop: 20,
    },
    infoStyle: {
        backgroundColor: '#fff',
        height: 450,
        paddingHorizontal: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    profileImageStyle: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userNameTextStyle: {
        fontSize: 20,
        marginVertical: 15,
        color: '#fff',
        alignItems: 'center',
        fontFamily: 'Dirooz',
    },
    textStyle: {
        fontSize: 18,
        color: '#053751',
        writingDirection: 'auto',
        fontFamily: 'Dirooz',
    },
    buttonStyle: {
        elevation: 2,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#1AD927',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    buttonTextStyle: {
        fontSize: 18,
        color: '#1AD927',
        alignSelf: 'center',
        fontFamily: 'IRANSansWeb_Bold',
        writingDirection: 'auto',
    },
    textContainer: {
        padding: 20,
        borderBottomColor: '#EBE8E8',
        borderBottomWidth: 1,
    },
});
