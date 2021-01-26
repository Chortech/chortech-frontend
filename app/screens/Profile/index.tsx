import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
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
import { validateToken } from "../../utils/tokenValidator";
import { InputType } from "../../utils/inputTypes";
import * as ImagePicker from "react-native-image-picker";

type IState = {
  userReducer: IUserState;
};

const options = {
  title: "Select Avatar",
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
  includeBase64: true,
};

const Profile: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  let user: IUserState = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);

  log(user.picture);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    imageUri: user.imageUri,
  });
  const fetchUser = () => {
    // if (validateToken(loggedInUser.token)) {
    //   dispatch(userActions.onGetUserProfileRequest(loggedInUser.token!));
    // }
  };

  const onPressUpdateImage = () => {
    let uri = "../../assets/images/friend-image.jpg";
    ImagePicker.launchImageLibrary(options, (response) => {
      uri = response.uri;
      setData({
        ...data,
        imageUri: uri,
      });
      user = {
        ...user,
        imageUri: data.imageUri,
      };
      if (validateToken(loggedInUser.token)) {
        dispatch(userActions.onUploadImageRequest(loggedInUser.token, response));
      } else {
        console.log("getting new token");
        dispatch(
          authActions.onLoginRequest(
            loggedInUser.email,
            loggedInUser.phone,
            loggedInUser.password,
            loggedInUser.authInputType
          )
        );
      }
    });
  };
  const onPressFriendsList = () => NavigationService.navigate("FriendList");
  const onPressEditProfile = () => NavigationService.navigate("EditProfile");
  const onLogout = () => {
    dispatch(userActions.onClearTokenRequest());
    dispatch(authActions.onLogout());
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchUser();
    setRefreshing(false);
  }, [dispatch]);

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
            <TouchableOpacity onPress={onPressUpdateImage}>
              <Image
                style={styles.profileImage}
                source={
                  data.imageUri && data.imageUri !== ""
                    ? { uri: data.imageUri }
                    : require("../../assets/images/friend-image.jpg")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutIcon} onPress={onLogout}>
              <FontAwesomeIcon icon="sign-out-alt" style={{ color: "#ff0000" }} size={25} />
            </TouchableOpacity>
            <Text style={styles.userNameText}>{user.name}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <ScrollView
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}>
              {loggedInUser.authInputType == InputType.Email ? (
                <View style={styles.textWrapper}>
                  <View style={styles.textContainerLeft}>
                    <Text style={styles.textInfo}>{loggedInUser.email}</Text>
                  </View>
                  <View style={styles.textContainerRight}>
                    <Text style={styles.textInfo}>ایمیل</Text>
                  </View>
                </View>
              ) : null}
              {loggedInUser.authInputType == InputType.Phone ? (
                <View style={styles.textWrapper}>
                  <View style={styles.textContainerLeft}>
                    <Text style={styles.textInfo}>{loggedInUser.phone}</Text>
                  </View>
                  <View style={styles.textContainerRight}>
                    <Text style={styles.textInfo}>تلفن همراه</Text>
                  </View>
                </View>
              ) : null}
            </ScrollView>
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
