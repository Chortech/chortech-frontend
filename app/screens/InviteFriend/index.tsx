import React, { useState } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { InputType } from "../../utils/inputTypes";
import { RegexValidator } from "../../utils/regexValidator";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { User } from "../../models/other/User";
import SearchedUserItem from "../../components/SearchedUserItem";
import { ILoginState } from "../../models/reducers/login";
import { useStore } from "react-redux";

const InviteFriend: React.FC = (): JSX.Element => {
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputType, setInputType] = useState(InputType.None);
  const [fetchedUsers, setFetchedUsers] = useState<Array<User>>([]);

  const onChangeSearchQuery = (text: string) => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setEmailOrPhone(text);
    setInputType(type);
  };

  console.log("logged in user: " + JSON.stringify(loggedInUser, undefined, 2));
  console.log("fetched user: " + JSON.stringify(fetchedUsers, undefined, 2));

  const onPressSearchButton = (): void => {
    if (inputType == InputType.Email || inputType == InputType.Phone) {
      Api.getFilteredUser(emailOrPhone, inputType).then((data) => {
        if (data.success) {
          if (fetchedUsers.length > 0) {
            setFetchedUsers([]);
          }
          setFetchedUsers([data.user]);
        }
      });
    }
  };

  const onPressAddFriend = (): void => {
    let user = fetchedUsers[0];
    try {
      Api.addFriend(user.id, user.name, loggedInUser.id).then((data) =>
        console.log(JSON.stringify(data, undefined, 2))
      );
      setFetchedUsers([]);
    } catch (error) {
      console.log(JSON.stringify(error, undefined, 2));
    }
  };

  const renderSelectedItems: any = ({ item }) => (
    <SearchedUserItem
      id={item.id}
      name={item.name}
      onPress={onPressAddFriend}
    />
  );

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="slideInUp"
        duration={500}
        style={styles.infoContainer}>
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
  );
};

export default InviteFriend;
