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
  onPressMemberItem?: (event: GestureResponderEvent) => void | undefined;
  onPressRemoveMemberItem?: (event: GestureResponderEvent) => void | undefined;
  DeleteIcon: IconProp;
  Name: string;
  ImageUrl: ImageSourcePropType;
};

const MemberItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View>
      <View style={styles.memberContainer}>
        <TouchableOpacity
          style={styles.DeleteMemberIconContainer}
          onPress={props.onPressRemoveMemberItem}
          activeOpacity={0.5}>
          <FontAwesomeIcon icon={props.DeleteIcon} size={25} style={styles.DeleteMemberIcon} />
        </TouchableOpacity>
        <Text style={styles.memberName}>{props.Name}</Text>
        <Image style={styles.memberImage} source={props.ImageUrl} />
      </View>
    </View>
  );
};

export default MemberItem;
