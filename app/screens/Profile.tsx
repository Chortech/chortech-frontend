import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ProfileStyles';

const ProfileScreen = ({ navigation }) => {

    const {
        container,
        textStyle,
        userNameTextStyle,
        headerStyle,
        profileImageStyle,
        infoStyle,
        buttonStyle,
        buttonTextStyle,
        textContainer } = styles;

    return (
        <View style={container}>
            <View style={headerStyle}>
                <Image style={profileImageStyle} source={require('../assets/images/profile-image-sample.png')}/>
                <Text style={userNameTextStyle}>Babak1999</Text>
            </View>
            <View style={infoStyle}>
                <View style={textContainer}>
                    <Text style={textStyle}>نام و نام خانوادگی</Text>
                </View>
                <View style={textContainer}>
                    <Text style={textStyle}>آدرس الکترونیک</Text>
                </View>
                <View style={textContainer}>
                    <Text style={textStyle}>شماره تلفن همراه</Text>
                </View>
                <View style={{marginTop: 100}}>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTextStyle}>دوستان</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTextStyle}>ویرایش اطلاعات</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;
