import React, { useState } from "react";
import { ToastAndroid, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { InputType } from "../../utils/inputTypes";
import { RegexValidator } from "../../utils/regexValidator";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { User } from "../../models/other/User";
import SearchedUserItem from "../../components/SearchedUserItem";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import { IUserState } from "../../models/reducers/default";
import LoadingIndicator from "../Loading";

type IState = {
  userReducer: IUserState;
};

const InviteFriend: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading } = useSelector((state: IState) => state.userReducer);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputType, setInputType] = useState(InputType.None);
  const [fetchedUsers, setFetchedUsers] = useState<Array<User>>([]);
  const dispatch = useDispatch();

  const onChangeSearchQuery = (text: string) => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setEmailOrPhone(text);
    setInputType(type);
  };

  const onPressSearchButton = (): void => {
    if (inputType == InputType.Email || inputType == InputType.Phone) {
      Api.getFilteredUser(emailOrPhone, inputType).then((data) => {
        if (data.success) {
          if (fetchedUsers.length > 0) {
            setFetchedUsers([]);
          }
          setFetchedUsers([data.user]);
        } else {
          ToastAndroid.show("کاربر با این مشخصات وجود ندارد", ToastAndroid.SHORT);
        }
      });
    } else {
      ToastAndroid.show("اطلاعات وارد شده نامعتبر است", ToastAndroid.SHORT);
    }
  };

  const onPressAddFriend = (): void => {
    let searchedUser = fetchedUsers[0];
    dispatch(userActions.onAddFriendRequest(loggedInUser.id, searchedUser.id, searchedUser.name));
    setFetchedUsers([]);
  };

  const renderSelectedItems: any = ({ item }) => (
    <SearchedUserItem id={item.id} name={item.name} onPress={onPressAddFriend} />
  );

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <Searchbar
              placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              onChangeText={onChangeSearchQuery}
              value={emailOrPhone}
              iconColor="#1AD927"
              onIconPress={onPressSearchButton}
            />
          </Animatable.View>
          <FlatList data={fetchedUsers} renderItem={renderSelectedItems} />
        </View>
      )}
    </>
  );
};

export default InviteFriend;
