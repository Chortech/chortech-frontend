/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../styles/ٍResetPasswordStyles';

import * as Animatable from 'react-native-animatable';


const ResetPassword = ({ navigation }) => {

    return (
        <View style={container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>بازیابی کلمه عبور</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <TextInput 
                    placeholder='کلمه عبور جدید'
                    style={styles.textInfo}
                    autoCapitalize="none"/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput 
                    placeholder='تکرار کلمه عبور جدید'
                    style={styles.textInfo}
                    autoCapitalize="none"/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>تایید</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>انصراف</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default ResetPassword;
