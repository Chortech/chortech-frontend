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

  return (
    <>
      {user.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.logoutIconContainer} onPress={onLogout}>
              <FontAwesomeIcon icon="sign-out-alt" style={styles.logoutIcon} size={30} />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
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
            </View>
          </View>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <ScrollView
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}>
              <View style={styles.textWrapper}>
                <View style={styles.textContainerLeft}>
                  <Text style={styles.textInfo}>{user.name}</Text>
                </View>
                <View style={styles.textContainerRight}>
                  <Text style={styles.textInfo}>نام</Text>
                </View>
              </View>

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
              <View style={styles.textWrapper}>
                <View style={styles.textContainerLeft}>
                  <Text style={styles.textInfo}>۱۰۰۰۰ تومان</Text>
                </View>
                <View style={styles.textContainerRight}>
                  <Text style={styles.textInfo}>اعتبار</Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={onPressEditProfile}>
                <FontAwesomeIcon icon="edit" style={styles.editIcon} size={30} />
                <Text style={styles.editButtonText}>ویرایش اطلاعات</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};
export default Profile;
