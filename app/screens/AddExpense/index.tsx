import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, ToastAndroid } from "react-native";
import { SearchBar } from "react-native-elements";
import * as Animatable from "react-native-animatable";

import NavigationService from '../../navigation/navigationService';
import { styles } from "./styles";

const AddExpense: React.FC = (): JSX.Element => {
    const confirm = () => {
        if (data.activityName == "") {
            ToastAndroid.show(
                "لطفا نام فعالیت را وارد کنید.",
                ToastAndroid.SHORT
            );
        } else if (data.expenseAmount == "") {
            ToastAndroid.show(
                "لطفا مبلغ را وارد کنید.",
                ToastAndroid.SHORT
            );
        } else {
            NavigationService.navigate('GroupList');    
        }
    };    

    const cancel = () => NavigationService.navigate('GroupList');

    const setActivityName = (text: string) => {
        setData({
        ...data,
        activityName: text,
        });
    };

    const setExpenseAmount = (text: string) => {
        setData({
        ...data,
        expenseAmount: text,
        });
    };

    const [data, setData] = useState({
        activityName: "",
        expenseAmount: "",
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.expenseNameContainer}>
                    <TextInput
                        placeholder="نام فعالیت"
                        placeholderTextColor="#A4A4A4"
                        style={styles.textHeader}
                        onChangeText={(text) => setActivityName(text)}
                    />
                </View>
            </View>
            <Animatable.View
                animation="slideInUp"
                duration={1000}
                style={styles.infoContainer}>
                <SearchBar
                    lightTheme
                    searchIcon={{ size: 20 }}
                    placeholder="افراد مشترک در هزینه را اضافه کنید"
                    containerStyle={styles.searchBar}
                    inputStyle={styles.textInput}
                    leftIconContainerStyle={{ backgroundColor: "white" }}
                    inputContainerStyle={{ backgroundColor: "white" }}
                />
                <TextInput
                    placeholder="مبلغ"
                    placeholderTextColor="#A4A4A4"
                    style={styles.expenseContainer}
                    keyboardType="numeric"
                    onChangeText={(text) => setExpenseAmount(text)}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={confirm}>
                        <Text style={styles.addButtonText}>ایجاد هزینه</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.removeButton} onPress={cancel}>
                        <Text style={styles.removeButtonText}>انصراف</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default AddExpense;
