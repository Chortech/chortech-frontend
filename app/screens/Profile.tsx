/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../styles/ProfileStyles';

const ProfileScreen = () => {

    const { container, textStyle, userNameTextStyle, headerStyle, profileImageStyle } = styles;

    return (
    <View style={container}>
        <View style={headerStyle}>
            <Image style={profileImageStyle} source={require('../assets/images/profile-image-sample.png')}/>
            <Text style={userNameTextStyle}>Andres Walker</Text>
        </View>
        <View>
            <Text style={textStyle}>Full name: </Text>
            <Text style={textStyle}>Email: </Text>
        </View>
    </View>
    );
};

export default ProfileScreen;