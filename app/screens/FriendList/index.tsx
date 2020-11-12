import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { styles } from "./styles";

// type FriendListScreenRouteProp = RouteProp<RootStackParamList, "FriendList">;
// type FriendListScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   "FriendList"
// >;

// type Props = {
//   navigation: FriendListScreenNavigationProp;
//   route: FriendListScreenRouteProp;
// };

const FriendList: React.FC = (): JSX.Element => {
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
        style={styles.infoContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={friends}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.friendContainer}
                    // onPress={(): void => {
                    //   navigation.navigate("Friend");
                    // }}
                  >
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
            <TouchableOpacity
              style={styles.button}
              // onPress={(): void => {
              //   navigation.navigate("InviteFriend");
              // }}
            >
              <Text style={styles.buttonText}>دعوت از دوستان</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default FriendList;
