import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import * as userActions from "../../store/actions/userActions";
import * as authActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";

type IState = {
  userReducer: IUserState;
};

const Profile: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const onLogout = () => dispatch(authActions.onLogout());
  const user = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const fetchUser = () => {
    dispatch(userActions.onGetUserRequest(loggedInUser.id));
  };
  const onPressFriendsList = () => NavigationService.navigate("FriendList");
  const onPressEditProfile = () => NavigationService.navigate("EditProfile");

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {user.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/images/profile_picture_white.png")}
            />
            <Text style={styles.userNameText}>{user.name}</Text>
          </View>
          <Animatable.View
            animation="slideInUp"
            duration={600}
            style={styles.infoContainer}>
            <View style={styles.textWrapper}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>{user.email}</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfo}>ایمیل</Text>
              </View>
            </View>
            <View style={styles.textWrapper}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>{user.phone}</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfo}>تلفن همراه</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={onPressFriendsList}>
                <Text style={styles.buttonText}>دوستان</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onPressEditProfile}>
                <Text style={styles.buttonText}>ویرایش اطلاعات</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
          <View>
            <Button icon="logout" mode="outlined" onPress={onLogout}>
              Logout
            </Button>
          </View>
        </View>
      )}
    </>
  );
};

export default Profile;
