import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = {
  onPressGroupItem: (event: GestureResponderEvent) => void | undefined;
  Name: string;
  ImageUrl: ImageSourcePropType;
};

const GroupItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View style={styles.groupContainer}>
      <Text style={styles.groupText}>{props.Name}</Text>
      <TouchableOpacity onPress={props.onPressGroupItem}>
        <Image style={styles.groupImage} source={props.ImageUrl} />
      </TouchableOpacity>
    </View>
  );
};

export default GroupItem;
