import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FriendItem: React.FC = (): JSX.Element => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Hello</Text>
        <Image source={require("../../assets/images/friend-image.jpg")} />
      </TouchableOpacity>
    </View>
  );
};
