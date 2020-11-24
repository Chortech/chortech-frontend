import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = {
  onPressFriendItem: (event: GestureResponderEvent) => void | undefined;
  Name: string;
  ImageUrl: ImageSourcePropType;
};

const FriendItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View>
      <TouchableOpacity
        style={styles.friendContainer}
        onPress={props.onPressFriendItem}>
        <Text style={styles.friendText}>{props.Name}</Text>
        <Image style={styles.friendImage} source={props.ImageUrl} />
      </TouchableOpacity>
    </View>
  );
};

export default FriendItem;
