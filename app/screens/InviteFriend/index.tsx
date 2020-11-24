import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";

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
  const [data, setData] = useState({
    emailOrPhone: "",
    secureTextEntry: true,
  });

  const setQueryText = (text: string) => {
    setData({
      ...data,
      emailOrPhone: text,
    });
  };

  const clearText = () => {
    setData({
      ...data,
      emailOrPhone: "",
    });
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="slideInUp"
        duration={500}
        style={styles.infoContainer}>
        <SearchBar
          lightTheme
          searchIcon={{ size: 20, color: "#1AD927" }}
          placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
          containerStyle={styles.searchBar}
          round={true}
          inputStyle={styles.searchInput}
          leftIconContainerStyle={{ backgroundColor: "white" }}
          inputContainerStyle={styles.searchInputContainer}
          onChangeText={(text) => setQueryText(text)}
          onClear={() => clearText()}
          value={data.emailOrPhone}
        />
      </Animatable.View>
    </View>
  );
};

export default InviteFriend;
