import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";

const LoadingIndicator = () => {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={500}
      style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#1AD927" />
    </Animatable.View>
  );
};
export default LoadingIndicator;
