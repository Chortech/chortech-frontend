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
import { useStore } from "react-redux";
import { ILoginState } from "../../models/reducers/login";
import { Friend } from "../../models/other/Friend";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { FriendsResponse } from "../../models/responses/getFriends";

const FriendList: React.FC = (): JSX.Element => {
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  const [refreshing, setRefreshing] = useState(false);
  const [fetchedFriends, setFriends] = useState<Array<Friend>>([]);
  console.log(
    "fetched friends: " + JSON.stringify(fetchedFriends, undefined, 2)
  );

  console.log("logged in user: " + loggedInUser);
  const fetchFriends = (): void => {
    try {
      Api.getUserFriends(loggedInUser.id).then((data: FriendsResponse) => {
        if (data.success) {
          setFriends(data.friends);
        }
      });
    } catch (error) {
      console.log(JSON.stringify(error, undefined, 2));
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onFriend = () => NavigationService.navigate("Friend");
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, []);

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
