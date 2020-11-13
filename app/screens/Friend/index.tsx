import React, { useState } from "react";
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
import { styles } from "./styles";

// type FriendScreenRouteProp = RouteProp<RootStackParamList, "Friend">;
// type FriendScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   "Friend"
// >;

// type Props = {
//   navigation: FriendScreenNavigationProp;
//   route: FriendScreenRouteProp;
// };

const Friend: React.FC = (): JSX.Element => {
  const [data, setData] = useState({
    name: "بابک سفیدگر",
    isFriend: 1,
    doOwe: 1,
    balance: 200000,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.friendImage}
          source={require("../../assets/images/friend-image.jpg")}
        />
        <Text style={styles.userNameText}>{data.name}</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}>
        <View style={styles.textContainer}>
          {!data.doOwe ? (
            <Text style={styles.textInfo}>
              شما مبلغ {data.balance} تومان از {data.name} طلب کار هستید.
            </Text>
          ) : (
            <Text style={styles.textInfo}>
              شما مبلغ {data.balance} تومان به {data.name} بدهکار هستید.
            </Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          {data.isFriend ? (
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>حذف کردن از دوستان</Text>
              <Text style={styles.minus}>-</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>اضافه کردن به دوستان</Text>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animatable.View>
    </View>
  );
};

export default Friend;
