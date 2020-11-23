import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";

const InviteFriend: React.FC = (): JSX.Element => {
  const [data, setData] = useState({
    emailOrPhone: "",
    secureTextEntry: true,
  });

  return (
    <Animatable.View style={styles.container}
        animation="slideInUp"
        duration={1000}>
        <View style={styles.header}
            animation="slideInUp"
            duration={1000}>
            {/* <Image
            style={styles.groupImage}
            source={require("../../assets/images/group-image.jpg")}
            /> */}
            <View style={styles.groupNameContainer}>
                <TextInput
                    placeholder="نام گروه"
                    placeholderTextColor="#A4A4A4"
                    style={styles.textHeader}
                />
            </View>
        </View>
        <View
            style={styles.infoContainer}>
            <SearchBar
            lightTheme
            searchIcon={{ size: 20 }}
            placeholder="دوستانی که می‌خواهید اضافه کنید را پیدا کنید"
            containerStyle={styles.searchBar}
            inputStyle={styles.textInput}
            leftIconContainerStyle={{ backgroundColor: "white" }}
            inputContainerStyle={{ backgroundColor: "white" }}
            onChangeText={(text) => (data.emailOrPhone = text)}
            onClear={() => (data.emailOrPhone = "")}
            value={data.emailOrPhone}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>ایجاد گروه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>انصراف</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Animatable.View>
  );
};

export default InviteFriend;
