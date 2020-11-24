import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, ToastAndroid } from "react-native";
import { SearchBar } from "react-native-elements";
import * as Animatable from "react-native-animatable";

import NavigationService from '../../navigation/navigationService';
import { styles } from "./styles";

const AddActivity: React.FC = (): JSX.Element => {
    const confirm = () => {
        if (data.groupName == "") {
            ToastAndroid.show(
                "لطفا نام گروه را وارد کنید.",
                ToastAndroid.SHORT
            );
        } else {
            NavigationService.navigate('GroupList');
        }
    };    

    const cancel = () => NavigationService.navigate('GroupList');

    const setGroupName = (text: string) => {
        setData({
        ...data,
        groupName: text,
        });
    };

    const [data, setData] = useState({
        groupName: "",
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.groupNameContainer}>
                    <TextInput
                        placeholder="نام فعالیت"
                        placeholderTextColor="#A4A4A4"
                        style={styles.textHeader}
                        onChangeText={(text) => setGroupName(text)}
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
                placeholder="دوستانی که در این هزینه سهیم هستند را اضافه کنید"
                containerStyle={styles.searchBar}
                inputStyle={styles.textInput}
                leftIconContainerStyle={{ backgroundColor: "white" }}
                inputContainerStyle={{ backgroundColor: "white" }}
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

export default AddActivity;
