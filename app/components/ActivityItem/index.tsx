import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import { styles } from "./styles";

type Props = {
    onPressActivityItem: (event: GestureResponderEvent) => void | undefined;
    Text: string;
};

const ActivityItem: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <View>
            <TouchableOpacity
                style={styles.activityContainer}
                onPress={props.onPressActivityItem}
                activeOpacity={0.5}>
                <Text style={styles.activityText}>{props.Text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ActivityItem;
