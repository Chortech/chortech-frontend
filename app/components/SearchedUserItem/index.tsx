import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = {
  id: string;
  name: string;
  onPress: (event: GestureResponderEvent) => void | undefined;
};

const SearchedUserItem = (props: Props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <FontAwesomeIcon
          icon="plus-circle"
          size={30}
          style={styles.plusIconStyle}
        />
      </TouchableOpacity>
      <Text style={styles.itemText}>{props.name}</Text>
    </View>
  );
};

export default SearchedUserItem;
