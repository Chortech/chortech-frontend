import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ProfileStyles';

import * as Animatable from 'react-native-animatable';


const ProfileScreen = ({ navigation }) => {

    const[name, setName] = useState('بابک سفیدگر');
    const[username, setUsername] = useState("babak-ssh");
    const[email, setEmail] = useState("sample@example.com");
    const[phone, setPhone] = useState("09123456789");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profileImage} source={require('../assets/images/profile_picture_white.png')}/>
                <Text style={styles.userNameText}>{name}</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
                <View style={styles.textWrapper}>
                    <View style={styles.textContainerLeft}>
                        <Text style={styles.textInfo}>{username}</Text>
                    </View>
                    <View style={styles.textContainerRight}>
                        <Text style={styles.textInfo}>نام کاربری</Text>
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.textContainerLeft}>
                        <Text style={styles.textInfo}>{email}</Text>
                    </View>
                    <View style={styles.textContainerRight}>
                        <Text style={styles.textInfo}>ایمیل</Text>
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.textContainerLeft}>
                        <Text style={styles.textInfo}>{phone}</Text>
                    </View>
                    <View style={styles.textContainerRight}>
                        <Text style={styles.textInfo}>تلفن همراه</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>دوستان</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ () => { navigation.navigate('EditProfile') }}>
                        <Text style={styles.buttonText}>ویرایش اطلاعات</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default ProfileScreen;
