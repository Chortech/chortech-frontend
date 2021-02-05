import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as friendActions from "../../store/actions/friendActions";
import * as balanceActions from "../../store/actions/balanceActions";
import { IUserState } from "../../models/reducers/default";
import { validateToken } from "../../utils/tokenValidator";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../assets/resources/colors";
import LoadingIndicator from "../Loading";
import { log } from "../../utils/logger";
import fonts from "../../assets/resources/fonts";

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

  const renderFriendItem = ({ item }) => {
    log(item.picture);
    return (
      <FriendItem
        onPressFriendItem={() => onPressFriendItem(item.id, item.name, item.balance)}
        Name={item.name}
        ImageUrl={
          item.picture != undefined
            ? { uri: item.picture }
            : require("../../assets/images/friend-image.jpg")
        }
        Balance={item.balance}
      />
    );
  };

  const actions: any = [
    {
      text: "افزودن هزینه جدید",
      icon: <FontAwesomeIcon icon="shopping-cart" size={15} color={colors.white} />,
      name: "addExpense",
      textStyle: {
        fontFamily: fonts.IranSans_Light,
        textAlign: "center",
        padding: 2,
      },
      position: 1,
      color: colors.mainColor,
    },
    {
      text: "دعوت یا افزودن دوستان جدید",
      icon: <FontAwesomeIcon icon="user-plus" size={15} color={colors.white} />,
      name: "addFriend",
      color: colors.mainColor,
      textStyle: {
        fontFamily: fonts.IranSans_Light,
        textAlign: "center",
        padding: 2,
      },
      position: 2,
    },
  ];

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
            actions={actions}
            color={colors.mainColor}
            position="left"
            onPressItem={(name) => {
              if (name == "addExpense") {
                NavigationService.navigate("AddExpense", { parentScreen: "FriendList", items: [] });
              } else {
                NavigationService.navigate("InviteFriend");
              }
            }}
          />
        </View>
      )}
    </>
  );
};

export default FriendList;
