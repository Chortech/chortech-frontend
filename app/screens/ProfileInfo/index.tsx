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
import { FloatingAction } from "react-native-floating-action";

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
      dispatch(userActions.onGetUserProfileRequest(loggedInUser.token!));
    }
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
          <Text style={styles.screenTitleText}>اطلاعات حساب کاربری</Text>
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
                  <Text style={styles.infoText}>{user.name == "" ? "-" : user.name}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer} onPress={onEditEmail}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>ایمیل</Text>
                  <Text style={styles.infoText}>
                    {loggedInUser.email == "" ? "-" : loggedInUser.email}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={onEditPhone}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>تلفن همراه</Text>
                  <Text style={styles.infoText}>
                    {loggedInUser.phone == "" ? "-" : loggedInUser.phone}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={onEditPassword}>
                <View style={styles.arrowIconContainer}>
                  <FontAwesomeIcon icon="chevron-left" style={styles.arrowIcon} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.titleText}>رمز عبور</Text>
                  <Text style={styles.infoText}>********</Text>
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
