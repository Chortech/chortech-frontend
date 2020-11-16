import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";

const FriendList: React.FC = (): JSX.Element => {
  const onAddFriend = () => NavigationService.navigate("InviteFriend");
  const onFriend = () => NavigationService.navigate("Friend");
  const friends = [
    { name: "بابک سفیدگر" },
    { name: "هژار آزیز" },
    { name: "سینا شعبانی" },
    { name: "نیما ابوالحسن بیگی" },
    { name: "حسین مهرمحمدی" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>دوستان</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={friends}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.friendContainer}
                    onPress={onFriend}>
                    <Text style={styles.friendText}>{item.name}</Text>
                    <Image
                      style={styles.friendImage}
                      source={require("../../assets/images/friend-image.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onAddFriend}>
              <Text style={styles.buttonText}>دعوت از دوستان</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default FriendList;
