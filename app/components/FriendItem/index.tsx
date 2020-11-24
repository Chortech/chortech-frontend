import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

const FriendItem: React.FC = (): JSX.Element => {
  return (
    <View>
      <TouchableOpacity style={styles.friendContainer}>
        <Text style={styles.friendText}>Hello</Text>
        <Image
          style={styles.friendImage}
          source={require("../../assets/images/friend-image.jpg")}
        />
      </TouchableOpacity>
    </View>
  );
};
