import React from "react";
import { Text, View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

const FriendItem: React.FC = (): JSX.Element => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};
