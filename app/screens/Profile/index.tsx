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

type IState = {
  userReducer: IUserState;
};

const Profile: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const user: IUserState = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  const fetchUser = () => {
    if (validateToken(loggedInUser.token)) {
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

  const onUploadImage = () => {
    dispatch(userActions.onUploadImageRequest(loggedInUser.token))
  }
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
            <TouchableOpacity onPress={onUploadImage}>
              <Image
                style={styles.profileImage}
                source={require("../../assets/images/friend-image.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutIcon} onPress={onLogout}>
              <FontAwesomeIcon icon="sign-out-alt" style={{ color: "#ff0000" }} size={25} />
            </TouchableOpacity>
            <Text style={styles.userNameText}>{user.name}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <ScrollView
              // style={styles.scrollViewContainer}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}>
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
