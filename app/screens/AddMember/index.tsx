import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";
import SelectableItem from "../../components/SelectableItem";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as friendActions from "../../store/actions/friendActions";
import * as balanceActions from "../../store/actions/balanceActions";
import { IUserState } from "../../models/reducers/default";
import { validateToken } from "../../utils/tokenValidator";
import { RootStackParamList } from "../../navigation/rootStackParams";
import { RouteProp } from "@react-navigation/native";
import * as groupActions from "../../store/actions/groupActions";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../assets/resources/colors";
import LoadingIndicator from "../Loading";
import MemberItem from "../../components/MemberItem/index"

type IState = {
  userReducer: IUserState;
};

type Props = {
  route: RouteProp<RootStackParamList, "AddMember">;
};

const FriendList: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  let { loading, friends } = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);
  const { groupId, members } = route.params;

  useEffect(() => {
    fetchFriends();
  }, [dispatch]);
  
  const fetchFriends = (): void => {
    if (validateToken(loggedInUser.token)) {
      dispatch(friendActions.onGetUserFriendsRequest(loggedInUser.token));
    }
  };

  const onPressMemberItem = (id: string, name: string, balance: number) => {
  };
  const onAddMember = (memberId) => {
    dispatch(groupActions.onAddFriendToGroupRequest(loggedInUser.token, groupId, [memberId]))
  };
  const onSelectItem = (item) => {};
  const onPressFriendItem = (id: string, name: string, balance: number) => {
    if (validateToken(loggedInUser.token)) {
      dispatch(balanceActions.onGetFriendBalanceRequest(loggedInUser.token, id, name, balance));
    }
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, [dispatch]);
  const membersId = members.map(obj=> (obj.id));
console.log(membersId);
  const friendsData = friends.map(obj=> ({ ...obj, selected: true }))
  console.log(friendsData);
  const newFriendsData = friendsData.filter(friend => {
    console.log(friend);
    let n = true;
    membersId.forEach((e) =>
      {
        if (e == friend.id)
        {
          console.log("hmmmm", e, friend.id);
          n = false;
        } 
      })
      return n;
  } )

    const renderMemberItem: any = ({ item }) => (
      <MemberItem
        onPressMemberItem={() => onPressMemberItem(item.id, item.name, item.balance)}
        onPressRemoveMemberItem={() => onAddMember(item.id)}
        IconName="plus"
        Name={item.name}
        ImageUrl={
          item.picture != undefined
            ? { uri: item.picture }
            : require("../../assets/images/friend-image.jpg")
        }
      />
    );
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              data={newFriendsData}
              renderItem={renderMemberItem}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default FriendList;
