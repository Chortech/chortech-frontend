import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ٍEditProfileStyles';

import * as Animatable from 'react-native-animatable';


const EditProfile = ({ navigation }) => {

    return (
        <View style={container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ویرایش اطلاعات</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <TextInput 
                    placeholder='نام کاربری'
                    style={styles.textInfo}
                    autoCapitalize="none"/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput 
                    placeholder='نام و نام خانوادگی'
                    style={styles.textInfo}
                    autoCapitalize="none"/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput 
                    placeholder='آدرس الکترونیک'
                    style={styles.textInfo}
                    autoCapitalize="none"/>
                </View>
                <View style={styles.textContainer}>
                    <TextInput 
                    placeholder='شماره تلفن'
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

export default ProfileScreen;
