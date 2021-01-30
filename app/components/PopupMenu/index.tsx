import React, { Component, useState } from "react";
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/resources/colors";
import { log } from "../../utils/logger";

type Props = {
  actions: string[];
  onPress: (item: string, index: number | undefined) => void;
};

const PopupMenu: React.FC<Props> = (props: Props) => {
  const [icon, setIcon] = useState(1);
  const ICON_SIZE = 30;

  const onRef = (icon) => {
    if (icon) {
      setIcon(icon);
    }
  };

  const onPress = (): any => {
    if (icon) {
      UIManager.showPopupMenu(findNodeHandle(icon)!, props.actions, onError, props.onPress);
    }
  };

  const onError = () => {
    log("popup error");
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon name="more-vert" size={ICON_SIZE} color={colors.white} ref={onRef} />
      </TouchableOpacity>
    </View>
  );
};

export default PopupMenu;
