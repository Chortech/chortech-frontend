import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as friendActions from "../../store/actions/friendActions";
import { IUserState } from "../../models/reducers/default";

type IState = {
  friendReducer: IUserState;
};

const FriendList: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  const { friends } = useSelector((state: IState) => state.friendReducer);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, [dispatch]);

  const fetchFriends = (): void => {
    dispatch(friendActions.onGetUserFriendsRequest(loggedInUser.id));
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
      onPressFriendItem={() => onFriend(item.id, item.friendName)}
      Name={item.friendName}
      ImageUrl={require("../../assets/images/friend-image.jpg")}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <Animatable.View
          animation="slideInUp"
          duration={600}
          style={styles.infoContainer}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={friends}
            renderItem={renderFriendItem}
          />
        </Animatable.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onAddFriend}>
            <Text style={styles.buttonText}>دعوت از دوستان</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FriendList;
