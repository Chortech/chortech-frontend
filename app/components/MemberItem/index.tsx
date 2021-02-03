import React from "react";
import { GestureResponderEvent, Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ArabicNumbers } from "react-native-arabic-numbers";
import { accessibilityProps } from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  onPressMemberItem: (event: GestureResponderEvent) => void | undefined;
  onPressRemoveMemberItem: (event: GestureResponderEvent) => void | undefined;
  IconName: IconProp;
  Name: string;
  ImageUrl: ImageSourcePropType;
};

const MemberItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View>
      <TouchableOpacity
        style={styles.friendContainer}
        onPress={props.onPressMemberItem}
        activeOpacity={0.5}>
        <Text style={styles.friendText}>{props.Name}</Text>
        <Image style={styles.friendImage} source={props.ImageUrl} />
        <TouchableOpacity
        style={styles.friendContainer}
        onPress={props.onPressRemoveMemberItem}
        activeOpacity={0.5}>
          <View>
        <FontAwesomeIcon icon={props.IconName}  size={20} />
      </View>
        </TouchableOpacity>
      </TouchableOpacity>
      
    </View>
  );
};

export default MemberItem;
