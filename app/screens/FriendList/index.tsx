import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import FriendItem from "../../components/FriendItem/index";

const FriendList: React.FC = (): JSX.Element => {
  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onFriend = () => NavigationService.navigate("Friend");
  const friends = [
    { name: "بابک سفیدگر" },
    { name: "هژار آزیز" },
    { name: "سینا شعبانی" },
    { name: "نیما ابوالحسن بیگی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
    { name: "حسین مهرمحمدی" },
  ];

  const renderFriendItem = ({ item }) => (
    <FriendItem
      onPressFriendItem={onFriend}
      Name={item.name}
      ImageUrl={require("../../assets/images/friend-image.jpg")}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>دوستان</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}>
        <FlatList
          data={friends}
          renderItem={renderFriendItem}
          ListFooterComponent={
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={onAddFriend}>
                <Text style={styles.buttonText}>دعوت از دوستان</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </Animatable.View>
    </View>
  );
};

export default FriendList;
