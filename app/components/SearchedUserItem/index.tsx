import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  id: string;
  name: string;
  onPress: (event: GestureResponderEvent) => void | undefined;
};

const SearchedUserItem = (props: Props) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <FontAwesomeIcon
          icon="plus-circle"
          size={20}
          style={{ color: "#1AD927" }}
        />
      </TouchableOpacity>
    </View>
  );
};
