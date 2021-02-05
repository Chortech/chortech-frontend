import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity, ToastAndroid } from "react-native";
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
import MemberItem from "../../components/MemberItem/index";
import { Item } from "../../models/other/axios/Item";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { log } from "../../utils/logger";
import messages from "../../assets/resources/messages";

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
  const [allFriends, setAllFriends] = useState<Item[]>();
  const selectedFriends = useRef<Item[]>([]);
  const [renderList, setRenderList] = useState(false);

  useEffect(() => {
    fetchFriends();
  }, [dispatch]);

  const fetchFriends = (): void => {
    let items: Item[] = [];
    friends.forEach((friend) => {
      if (members.findIndex((member) => member.id == friend.id) < 0) {
        if (items.findIndex((item) => item.id == friend.id) < 0) {
          let item: Item = {
            id: friend.id,
            name: friend.name != undefined ? friend.name : "",
            amount: 0,
            selected: false,
          };
          items.push(item);
        }
      }
    });

    items.forEach((item) => {
      const index = selectedFriends.current.findIndex((selected) => selected.id == item.id);
      if (index > -1) {
        item.selected = selectedFriends.current[index].selected;
      }
    });

    setAllFriends(items);
    selectedFriends.current = [];
    // if (validateToken(loggedInUser.token)) {
    //   dispatch(friendActions.onGetUserFriendsRequest(loggedInUser.token));
    // }
  };

  const onAddMembers = () => {
    if (selectedFriends.current.length == 0) {
      ToastAndroid.show(messages.noBodySelected, ToastAndroid.SHORT);
      return;
    }
    if (validateToken(loggedInUser.token)) {
      const members: string[] = selectedFriends.current.map((selected) => selected.id);
      dispatch(groupActions.onAddFriendToGroupRequest(loggedInUser.token, groupId, members));
    }
  };

  const onSelectItem = (item: Item) => {
    item.selected = !item.selected;
    const index = selectedFriends.current.findIndex((selected) => selected.id == item.id);
    if (index < 0) {
      selectedFriends.current.push(item);
    } else {
      selectedFriends.current.splice(index, 1);
    }
    setRenderList(!renderList);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFriends();
    setRefreshing(false);
  }, [dispatch]);

  const renderMemberItem: any = ({ item }) => {
    return (
      <SelectableItem
        Name={item.name}
        selected={item.selected}
        onPressItem={() => onSelectItem(item)}
        hasBottomBorder
      />
    );
  };
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.screenTitleText}>افزودن اعضای جدید</Text>
            <Text style={styles.normaText}>اعضای جدید را از بین دوستان خود انتخاب کنید</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              data={allFriends}
              renderItem={renderMemberItem}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews
              extraData={renderList}
            />
          </Animatable.View>
          <TouchableOpacity style={styles.addMembersButtonContainer} onPress={onAddMembers}>
            <Text style={styles.addMembersButtonText}>افزودن منتخبین به گروه</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default FriendList;
