import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/EditProfileStyles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';


const EditProfile = ({ navigation }) => {

    const [data, setData] = useState({
        name: "بابک سفیدگر",
        username: "babak-ssh",
        email: "sample@example.com",
        phone: "09123456789",
        password: "12345678",
        secureTextEntry: true,
    });

    const togglePassword = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>ویرایش اطلاعات</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>نام و نام خانوادگی</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                defaultValue={data.name}
                                placeholder='نام و نام خانوادگی'
                                style={styles.textInput}/>
                        </View>
                    </View>
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>نام کاربری</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                defaultValue={data.username}
                                placeholder="نام کاربری"
                                style={styles.textInput}/>
                        </View>
                    </View> 
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>ایمیل</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                defaultValue={data.email}
                                placeholder='ایمیل'
                                style={styles.textInput}/>
                        </View>
                    </View> 
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>شماره تلفن</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                defaultValue={data.phone}
                                placeholder='شماره تلفن'
                                style={styles.textInput}/>
                        </View>
                    </View> 
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>رمز عبور</Text>
                        <View style={styles.inputContainer}>
                            <TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
                            {
                                data.secureTextEntry ?
                                <FontAwesomeIcon icon='eye-slash' size={20} style={{ color: 'red' }}/> :
                                <FontAwesomeIcon icon='eye' size={20} style={{ color: '#1AD927' }}/>
                            }
                            </TouchableOpacity>
                            <TextInput 
                                defaultValue={data.password}
                                placeholder='رمز عبور'
                                secureTextEntry={data.secureTextEntry}
                                style={styles.textInput}/>
                        </View>
                    </View> 
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.filledButton}>
                            <Text style={styles.filledButtonText}>تایید</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outlinedButton} onPress={ () => { navigation.goBack() }}>
                            <Text style={styles.outlinedButtonText}>انصراف</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default EditProfile;
