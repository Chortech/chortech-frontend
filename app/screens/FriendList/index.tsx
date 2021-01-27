import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
// import cron from "node-cron";

import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as friendActions from "../../store/actions/friendActions";
import * as expenseActions from "../../store/actions/expenseActions";
import { IUserState } from "../../models/reducers/default";
import { validateToken } from "../../utils/tokenValidator";
import { log } from "../../utils/logger";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../assets/resources/colors";
import LoadingIndicator from "../Loading";

type IState = {
  userReducer: IUserState;
};

const FriendList: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  const { loading, friends } = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchFriends();
  }, [dispatch]);

  const fetchFriends = (): void => {
    if (validateToken(loggedInUser.token)) {
      dispatch(friendActions.onGetUserFriendsRequest(loggedInUser.token));
    }
  };

  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onPressFriendItem = (id: string, name: string) => {
    let index = friends.findIndex((friend) => friend.id == id);
    if (index > -1) {
      if (validateToken(loggedInUser.token)) {
        dispatch(expenseActions.onGetFriendBalanceRequest(loggedInUser.token, id, name));
      }
    }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, [dispatch]);

  const renderFriendItem: any = ({ item }) => (
    <FriendItem
      onPressFriendItem={() => onPressFriendItem(item.id, item.name)}
      Name={item.name}
      ImageUrl={
        item.picture != undefined
          ? { uri: item.picture }
          : require("../../assets/images/friend-image.jpg")
      }
      Balance={item.balance?.balance}
    />
  );

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <Text style={styles.screenTitleText}>دوستان</Text>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              data={friends}
              renderItem={renderFriendItem}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews
            />
          </Animatable.View>
          <FloatingAction
            color={colors.mainColor}
            position="left"
            overlayColor="#00000000"
            floatingIcon={<FontAwesomeIcon icon="plus" color="#fff" size={20} />}
            onPressMain={onAddFriend}
          />
        </View>
      )}
    </>
  );
};

export default FriendList;
