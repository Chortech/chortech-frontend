import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import { Activity, Type } from "../../models/other/axios/Activity";
import { handler } from "../../utils/textBuilder";
import { styles } from "./styles";

type Props = {
  onPressActivityItem: (event: GestureResponderEvent) => void | undefined;
  item: Activity;
};

const ActivityItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View>
      <TouchableOpacity
        style={styles.activityContainer}
        onPress={props.onPressActivityItem}
        activeOpacity={0.5}>
        <Text style={styles.activityText}>{handler.handle(props.item)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActivityItem;
