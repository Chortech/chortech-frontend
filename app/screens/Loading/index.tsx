import React from "react";
import { ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../../assets/resources/colors";
import { styles } from "./styles";

const LoadingIndicator = () => {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={500}
      style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={colors.mainColor} />
    </Animatable.View>
  );
};
export default LoadingIndicator;
