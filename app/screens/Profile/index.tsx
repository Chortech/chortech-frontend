import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { ILoginState } from "../../models/reducers/login";
import * as userActions from "../../store/actions/userActions";
import LoadingIndicator from "../Loading";
import { styles } from "./styles";

type IState = {
  userReducer: IUserState;
};

const Profile: React.FC = (): JSX.Element => {
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  console.log(loggedInUser.id);
  const user = useSelector((state: IState) => state.userReducer);
  console.log(JSON.stringify(user, undefined, 2));
  const dispatch = useDispatch();

  const fetchUser = () => {
    dispatch(userActions.onFetchUserRequest(loggedInUser.id));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // const [data, setData] = useState({
  //   name: user.name == "" ? "-" : user.name,
  //   email: user.email == "" ? "-" : user.email,
  //   phone: user.phone == "" ? "-" : user.phone,
  // });

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
                // onPress={(): void => {
                //   navigation.navigate("FriendList");
                // }}
              >
                <Text style={styles.buttonText}>دوستان</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                // onPress={(): void => {
                //   navigation.navigate("EditProfile");
                // }}
              >
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
