import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ProfileStyles';

import * as Animatable from 'react-native-animatable';


const ProfileScreen = ({ navigation }) => {

    const {
        container,
        textInfo,
        userNameText,
        header,
        profileImage,
        infoContainer,
        button,
        buttonText,
        textContainer,
        buttonContainer,} = styles;

    return (
        <View style={container}>
            <View style={header}>
                <Image style={profileImage} source={require('../assets/images/profile-image-sample.png')}/>
                <Text style={userNameText}>Babak1999</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={infoContainer}>
                <View style={textContainer}>
                    <Text style={textInfo}>نام و نام خانوادگی</Text>
                </View>
                <View style={textContainer}>
                    <Text style={textInfo}>آدرس الکترونیک</Text>
                </View>
                <View style={textContainer}>
                    <Text style={textInfo}>شماره تلفن همراه</Text>
                </View>
                <View style={buttonContainer}>
                    <TouchableOpacity style={button}>
                        <Text style={buttonText}>دوستان</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Text style={buttonText}>ویرایش اطلاعات</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default ProfileScreen;
