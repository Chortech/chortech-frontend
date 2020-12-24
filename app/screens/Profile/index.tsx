import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import * as userActions from "../../store/actions/userActions";
import * as authActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import * as ImagePicker from 'react-native-image-picker';

type IState = {
  userReducer: IUserState;
};

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Profile: React.FC = (): JSX.Element => {
  const loggedInUserId: string = useStore().getState()["authReducer"].id;
  let user = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    imageUri: user.imageUri,
  });
  const fetchUser = () => {
    dispatch(userActions.onGetUserRequest(loggedInUserId));
  };
  const onPressUpdateImage = () => {
    let uri = "../../assets/images/friend-image.jpg";
    ImagePicker.launchImageLibrary(options,
      (response) => {
        uri = response.uri;
        setData({
          ...data,
          imageUri: uri,
        })
    user={
      ...user,
      imageUri: data.imageUri,
    }
    dispatch(userActions.onUpdateUserRequest(user));})
  }
  const onPressFriendsList = () => NavigationService.navigate("FriendList");
  const onPressEditProfile = () => NavigationService.navigate("EditProfile");
  const onLogout = () => dispatch(authActions.onLogout());

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
                source={{uri: data.imageUri}}
              />
            </TouchableOpacity>

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
