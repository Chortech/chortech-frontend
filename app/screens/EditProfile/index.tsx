import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import NavigationService from "../../navigation/navigationService";
import * as userActions from "../../store/actions/userActions";
import LoadingIndicator from "../Loading";

type IState = {
  userReducer: IUserState;
};

const EditProfile: React.FC = (): JSX.Element => {
  let user = useSelector((state: IState) => state.userReducer);
  console.log(JSON.stringify(user, undefined, 2));
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "بابک سفیدگر",
    email: "sample@example.com",
    phone: "09123456789",
    password: "12345678",
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onPressUpdateUser = () => {
    user = {
      ...user,
      name: data.name,
      password: data.password,
      phone: data.phone,
      email: data.email,
    };
    dispatch(userActions.onUpdateUserRequest(user));
  };

  const onChangeName = (text: string) => {
    setData({
      ...data,
      name: text,
    });
  };

  const onChangeEmail = (text: string) => {
    setData({
      ...data,
      email: text,
    });
  };
  const onChangePhone = (text: string) => {
    setData({
      ...data,
      phone: text,
    });
  };
  const onChangePassword = (text: string) => {
    setData({
      ...data,
      password: text,
    });
  };

  const togglePassword = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <>
      {user.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>ویرایش اطلاعات</Text>
          </View>
          <Animatable.View
            animation="slideInUp"
            duration={600}
            style={styles.infoContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>نام و نام خانوادگی</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={user.name}
                    placeholder="نام و نام خانوادگی"
                    style={styles.textInput}
                    onChangeText={onChangeName}
                  />
                </View>
              </View>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>ایمیل</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={user.email}
                    placeholder="ایمیل"
                    style={styles.textInput}
                    onChangeText={onChangeEmail}
                  />
                </View>
              </View>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>شماره تلفن</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={user.phone}
                    placeholder="شماره تلفن"
                    style={styles.textInput}
                    onChangeText={onChangePhone}
                  />
                </View>
              </View>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>رمز عبور</Text>
                <View style={styles.inputContainer}>
                  <TouchableOpacity
                    onPress={togglePassword}
                    style={styles.toggleIcon}>
                    {secureTextEntry ? (
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
                    defaultValue={user.password}
                    placeholder="رمز عبور"
                    secureTextEntry={secureTextEntry}
                    style={styles.textInput}
                    onChangeText={onChangePassword}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.filledButton}
                  onPress={onPressUpdateUser}>
                  <Text style={styles.filledButtonText}>تایید</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.outlinedButton}
                  onPress={() => NavigationService.goBack()}>
                  <Text style={styles.outlinedButtonText}>انصراف</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default EditProfile;
