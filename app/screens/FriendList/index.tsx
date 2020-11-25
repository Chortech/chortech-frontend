import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import LoadingIndicator from "../Loading";
import { ILoginState } from "../../models/reducers/login";
import { Friend } from "../../models/other/Friend";
import * as friendActions from "../../store/actions/friendActions";

type IState = {
  friendReducer: IUserState;
};

const FriendList: React.FC = (): JSX.Element => {
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  const { loading, friends } = useSelector(
    (state: IState) => state.friendReducer
  );

  const [refreshing, setRefreshing] = useState(false);
  const [fetchedFriends, setFriends] = useState<Array<Friend>>(friends);
  console.log(
    "fetched friends: " + JSON.stringify(fetchedFriends, undefined, 2)
  );

  console.log("logged in user id: " + loggedInUser.id);

  useEffect(() => {
    dispatch(friendActions.onUserFriendsRequest(loggedInUser.id));
    setFriends(friends);
  }, [refreshing]);

  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onFriend = () => NavigationService.navigate("Friend");
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(friendActions.onUserFriendsRequest(loggedInUser.id));
      setFriends(friends);
    }, 500);
    setRefreshing(false);
  }, [refreshing]);

  const renderFriendItem: any = ({ item }) => (
    <FriendItem
      onPressFriendItem={onFriend}
      Name={item.friendName}
      ImageUrl={require("../../assets/images/friend-image.jpg")}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>دوستان</Text>
        </View>
        <Animatable.View
          animation="slideInUp"
          duration={600}
          style={styles.infoContainer}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={fetchedFriends}
            renderItem={renderFriendItem}
            ListFooterComponent={
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onAddFriend}>
                  <Text style={styles.buttonText}>دعوت از دوستان</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </Animatable.View>
      </View>
    </>
  );
};

export default FriendList;
