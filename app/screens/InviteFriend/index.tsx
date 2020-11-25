import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { CheckBox, SearchBar } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { InputType } from "../../utils/inputTypes";
import { RegexValidator } from "../../utils/regexValidator";
import { Friend } from "../../models/other/Friend";

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

type Props = {
  id: string;
  name: string;
};

const SelectedItem = (props: Props) => (
  <View>
    <Text>{props.name}</Text>
  </View>
);

const InviteFriend: React.FC = (): JSX.Element => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<Array<Friend>>([]);

  const searchQuery = (text: string) => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setEmailOrPhone(text);
    if (type == InputType.Email || type == InputType.Phone) {
    }
  };

  const clearText = () => {
    setEmailOrPhone("");
  };

  const renderSelectedItems: any = ({ item }) => (
    <SelectedItem id={item.friendId} name={item.friendName} />
  );

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
          onChangeText={searchQuery}
          onClear={() => clearText()}
          value={emailOrPhone}
        />
      </Animatable.View>
      <FlatList
        data={selectedUsers}
        renderItem={renderSelectedItems}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>تایید</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default InviteFriend;
