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
import { ILoginState } from "../../models/reducers/login";
import { Friend } from "../../models/other/Friend";
import * as friendActions from "../../store/actions/friendActions";
import { IUserState } from "../../models/reducers/default";
import { FriendsResponse } from "../../models/responses/getFriends";
import { Api } from "../../services/api/graphQL/graphqlApi";

type IState = {
  friendReducer: IUserState;
};

const FriendList: React.FC = (): JSX.Element => {
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  // const { friends } = useSelector((state: IState) => state.friendReducer);
  const [fetchedFriends, setFriends] = useState<Array<Friend>>();
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = (): void => {
    try {
      Api.getUserFriends(loggedInUser.id).then((data: FriendsResponse) => {
        setFriends(data.friends);
      });
    } catch (error) {
      console.log(error);
    }
    // dispatch(friendActions.onUserFriendsRequest(loggedInUser.id));
  };

  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onFriend = (id: string, name: string) =>
    NavigationService.navigate("Friend", { id: id, friendName: name });
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, []);

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
