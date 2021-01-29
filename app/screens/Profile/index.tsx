import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from "react-native";
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

  const dispatch = useDispatch();
  const [data, setData] = useState({
    imageUri: user?.imageUri,
  });
  const fetchUser = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(userActions.onGetUserProfileRequest(loggedInUser.token!));
    }
  };

  const onPressUpdateImage = () => {
    let uri = "../../assets/images/chortech_1.png";
    ImagePicker.launchImageLibrary(options, (response: any) => {
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
      }
    });
  };

  const onLogout = () => {
    // dispatch(userActions.onClearTokenRequest());
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
      {user?.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={
                data.imageUri && data.imageUri !== ""
                  ? { uri: data.imageUri }
                  : require("../../assets/images/friend-image.jpg")
              }
              style={styles.imageContainer}>
              <TouchableOpacity style={styles.cameraIconContainer} onPress={onPressUpdateImage}>
                <FontAwesomeIcon icon="camera" style={styles.cameraIcon} size={20} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            {user.name != "" ? <Text style={styles.screenTitleText}>{user.name}</Text> : null}
            <ScrollView
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={true}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonContainer}
                onPress={() => NavigationService.navigate("ProfileInfo")}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>اطلاعات حساب کاربری</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>کارت‌های برگزیده</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.5}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>مدیریت اعتبار</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onLogout}
                activeOpacity={0.5}>
                <View style={styles.logoutIconContainer}>
                  <FontAwesomeIcon icon="sign-out-alt" style={styles.logoutIcon} size={20} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={{ ...styles.titleText, color: "red" }}>خروج از حساب کاربری</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
    </>
  );
};
export default Profile;
