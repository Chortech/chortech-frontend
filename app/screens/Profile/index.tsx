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
    imageUri: user.imageUri,
  });
  const fetchUser = () => {
    // if (validateToken(loggedInUser.token)) {
    //   dispatch(userActions.onGetUserProfileRequest(loggedInUser.token!));
    // }
  };

  const onPressUpdateImage = () => {
    let uri = "../../assets/images/friend-image.jpg";
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
      // dispatch(
      //   userActions.onUploadImageResponse({
      //     status: 200,
      //     success: true,
      //     response: {
      //       key: "1290",
      //       url: data.imageUri,
      //     },
      //   })
      // );
      if (validateToken(loggedInUser.token)) {
        // dispatch(userActions.onUploadImageRequest(loggedInUser.token, response));
      } else {
        // dispatch(
        //   authActions.onLoginRequest(
        //     loggedInUser.email,
        //     loggedInUser.phone,
        //     loggedInUser.password,
        //     loggedInUser.authInputType
        //   )
        // );
      }
    });
  };
  const onPressEditProfile = () => NavigationService.navigate("EditProfile");
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

  const onEditName = () => {
    NavigationService.navigate("EditProfile", {
      name: true,
    });
  };

  const onEditEmail = () => {
    NavigationService.navigate("EditProfile", {
      email: true,
    });
  };
  const onEditPhone = () => {
    NavigationService.navigate("EditProfile", {
      phone: true,
    });
  };
  const onEditPassword = () => {
    NavigationService.navigate("EditProfile", {
      password: true,
    });
  };

  return (
    <>
      {user.loading ? (
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
              <TouchableOpacity style={styles.cameraIconContainer} onPress={onLogout}>
                <FontAwesomeIcon icon="camera" style={styles.cameraIcon} size={20} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <ScrollView
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={true}>
              <TouchableOpacity style={styles.buttonContainer} onPress={onEditName}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>نام</Text>
                  <Text style={styles.infoText}>{user.name}</Text>
                </View>
              </TouchableOpacity>

              {loggedInUser.authInputType == InputType.Email ? (
                <TouchableOpacity style={styles.buttonContainer} onPress={onEditEmail}>
                  <View style={styles.arrowIconContainer}>
                    <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>ایمیل</Text>
                    <Text style={styles.infoText}>{loggedInUser.email}</Text>
                  </View>
                </TouchableOpacity>
              ) : null}
              {loggedInUser.authInputType == InputType.Phone ? (
                <TouchableOpacity style={styles.buttonContainer} onPress={onEditPhone}>
                  <View style={styles.arrowIconContainer}>
                    <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>تلفن همراه</Text>
                    <Text style={styles.infoText}>{user.phone}</Text>
                  </View>
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity style={styles.buttonContainer} onPress={onEditPassword}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>رمز عبور</Text>
                  <Text style={styles.infoText}>**********</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>اعتبار</Text>
                  <Text style={styles.infoText}>۱۰۰۰۰ تومان</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={onLogout}>
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
