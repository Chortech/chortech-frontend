import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import { Contact, EmailAddress, PhoneNumber } from "react-native-contacts";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/resources/colors";
import { CustomContact } from "../../models/other/CustomContact";
import { styles } from "./styles";

type Props = {
  contact: CustomContact;
  onPressContact?: ((event: GestureResponderEvent) => void) | undefined;
  selected?: boolean;
};

const ContactItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={props.onPressContact} activeOpacity={0.5}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon="address-book"
          style={styles.contactIcon}
          size={20}
          color={props.selected ? colors.mainColor : colors.textBlack}
        />
        <Text style={styles.text}>{props.contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;
