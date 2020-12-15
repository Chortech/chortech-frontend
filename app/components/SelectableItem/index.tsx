import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

import { styles } from "./styles";

type Props = {
  id: string;
  Name: string;
  selected?: boolean;
  onPressItem: (event: GestureResponderEvent) => void | undefined;
};

const SelectableItem: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.nameText}>{props.Name}</Text>
      <Animatable.View animation="flipInX" duration={1000}>
        <TouchableOpacity style={styles.circle} onPress={props.onPressItem}>
          {props.selected ? (
            <FontAwesomeIcon icon="check-circle" size={20} style={styles.selectedItem} />
          ) : (
            <FontAwesomeIcon icon="circle" size={20} style={styles.unselectedItem} />
          )}
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SelectableItem;
