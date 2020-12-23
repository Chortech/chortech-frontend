import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import * as userActions from "../../store/actions/userActions";
import * as authActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { log } from "../../utils/logger";

type IState = {
  userReducer: IUserState;
};

const Profile: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const user: IUserState = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const fetchUser = () => {
    let difference = (loggedInUser.token.expires - Math.floor(Date.now() / 1000)) / 60;
    if (difference > 1) {
      log("profile request");
      dispatch(userActions.onGetUserProfileRequest(loggedInUser.token));
    } else {
      dispatch(
        authActions.onLoginRequest(
          loggedInUser.email,
          loggedInUser.phone,
          loggedInUser.password,
          loggedInUser.authInputType
        )
      );
    }
  };

  const onPressFriendsList = () => NavigationService.navigate("FriendList");
  const onPressEditProfile = () => NavigationService.navigate("EditProfile");
  const onLogout = () => {
    dispatch(userActions.onClearTokenRequest());
    dispatch(authActions.onLogout());
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  return (
    <>
      {user.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/images/friend-image.jpg")}
            />
            <TouchableOpacity style={styles.logoutIcon} onPress={onLogout}>
              <FontAwesomeIcon icon="sign-out-alt" style={{ color: "#ff0000" }} size={25} />
            </TouchableOpacity>
            <Text style={styles.userNameText}>{user.name}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
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
              <TouchableOpacity style={styles.button} onPress={onPressFriendsList}>
                <Text style={styles.buttonText}>دوستان</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onPressEditProfile}>
                <Text style={styles.buttonText}>ویرایش اطلاعات</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Profile;
