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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Chortech</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={1000}
        style={styles.infoContainer}>
        <SearchBar
          lightTheme={false}
          searchIcon={{ size: 20 }}
          placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
          containerStyle={styles.searchBar}
          round={true}
          inputStyle={styles.textInput}
          leftIconContainerStyle={{ backgroundColor: "white" }}
          inputContainerStyle={{ backgroundColor: "white" }}
          onChangeText={(text) => setQueryText(text)}
          onClear={() => (data.emailOrPhone = "")}
          value={data.emailOrPhone}
        />
      </Animatable.View>
    </View>
  );
};

export default InviteFriend;
