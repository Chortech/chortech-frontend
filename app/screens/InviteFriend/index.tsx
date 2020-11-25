import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  GestureResponderEvent,
} from "react-native";
import { CheckBox } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { InputType } from "../../utils/inputTypes";
import { RegexValidator } from "../../utils/regexValidator";
import { Friend } from "../../models/other/Friend";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { User } from "../../models/other/User";
import { UserByFilterResponse } from "../../models/responses/userByFilter";

// type InviteFriendScreenRouteProp = RouteProp<
//   RootStackParamList,
//   "InviteFriend"
// >;
// type InviteFriendScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   "InviteFriend"
// >;

// type Props = {
//   navigation: InviteFriendScreenNavigationProp;
//   route: InviteFriendScreenRouteProp;
// };

const InviteFriend: React.FC = (): JSX.Element => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputType, setInputType] = useState(InputType.None);
  const [fetchedUsers, setFetchedUsers] = useState<Array<User>>([]);

  const onChangeSearchQuery = (text: string) => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setEmailOrPhone(text);
    setInputType(type);
  };

  console.log(JSON.stringify(fetchedUsers, undefined, 2));

  const onPressSearchButton = (): void => {
    if (inputType == InputType.Email || inputType == InputType.Phone) {
      Api.getFilteredUser(emailOrPhone, inputType).then((data) => {
        if (fetchedUsers.length > 0) {
          setFetchedUsers([]);
        }
        setFetchedUsers([data.user]);
      });
    }
  };

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
    </View>
  );
};

export default InviteFriend;
