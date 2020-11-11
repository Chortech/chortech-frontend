/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";

import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";

const ResetPassword: React.FC = (): JSX.Element => {
  const resetToHome = () => NavigationService.resetTo("Login");

  const [data, setData] = useState({
    password: "12345678",
    secureTextEntry: true,
    confirmPassword: "12345678",
    confirmSecureTextEntry: true,
  });

  const togglePassword = (): void => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const toggleConfirmPassword = (): void => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>بازیابی کلمه عبور</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}
      >
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon
                icon="eye-slash"
                size={20}
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon="eye"
                size={20}
                style={{ color: "#1AD927" }}
              />
            )}
          </TouchableOpacity>
          <TextInput
            placeholder="رمز عبور جدید"
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={toggleConfirmPassword}
            style={styles.toggleIcon}
          >
            {data.confirmSecureTextEntry ? (
              <FontAwesomeIcon
                icon="eye-slash"
                size={20}
                style={{ color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon="eye"
                size={20}
                style={{ color: "#1AD927" }}
              />
            )}
          </TouchableOpacity>
          <TextInput
            placeholder="تکرار رمز عبور جدید"
            secureTextEntry={data.confirmSecureTextEntry}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={resetToHome}>
            <Text style={styles.confirmButtonText}>تایید</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default ResetPassword;
