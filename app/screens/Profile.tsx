/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../styles/ProfileStyles';

const ProfileScreen = () => {

    const { container, textStyle, imageViewStyle } = styles;

    return (
    <View style={container}>
        <View style={imageViewStyle}>
            <Image source={require('../assets/profile-image-sample.png')}/>
        </View>
        <Text style={textStyle}>Username: </Text>
        <Text style={textStyle}>Full name: </Text>
        <Text style={textStyle}>Email: </Text>
    </View>
    );
};

export default ProfileScreen;