import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/EditProfileStyles';

import * as Animatable from 'react-native-animatable';


const EditProfile = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>ویرایش اطلاعات</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
                <ScrollView style={{ margin: 0 }}>
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>نام کاربری</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                defaultValue="babak-ssh"
                                placeholder="نام کاربری"
                                style={styles.textInput}/>
                        </View>
                    </View> 
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>نام و نام خانوادگی</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                defaultValue="بابک سفیدگر"
                                placeholder='نام و نام خانوادگی'
                                style={styles.textInput}/>
                        </View>
                    </View>
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>ایمیل</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                defaultValue="sample@example.com"
                                placeholder='ایمیل'
                                style={styles.textInput}/>
                        </View>
                    </View> 
                    <View style={styles.customInputContainer}>
                        <Text style={styles.label}>شماره تلفن</Text>
                        <View style={styles.inputContainer}>
                            <TextInput 
                                defaultValue="09123456789"
                                placeholder='شماره تلفن'
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
