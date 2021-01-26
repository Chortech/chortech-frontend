import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
// import cron from "node-cron";

import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as friendActions from "../../store/actions/friendActions";
import { IUserState } from "../../models/reducers/default";
import { validateToken } from "../../utils/tokenValidator";
import { log } from "../../utils/logger";
import { take } from "redux-saga/effects";

type IState = {
  userReducer: IUserState;
};

const FriendList: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  const friends = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchFriends();
  }, [dispatch]);

  const fetchFriends = (): void => {
    // if (validateToken(loggedInUser.token)) {
    //   dispatch(friendActions.onGetUserFriendsRequest(loggedInUser.token));
    // }
  };

  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onFriend = (id: string, name: string) =>
    NavigationService.navigate("Friend", { id: id, friendName: name });
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, [dispatch]);

  const renderFriendItem: any = ({ item }) => (
    <FriendItem
      onPressFriendItem={() => onFriend(item.id, item.name)}
      Name={item.name}
      ImageUrl={require("../../assets/images/friend-image.jpg")}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            data={friends}
            renderItem={renderFriendItem}
            showsVerticalScrollIndicator={false}
          />
        </Animatable.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onAddFriend}>
            <Text style={styles.buttonText}>اضافه کردن دوستان جدید</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FriendList;
