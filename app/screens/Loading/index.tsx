import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { styles } from "./styles";

const LoadingIndicator = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#1AD927" />
    </View>
  );
};

export default LoadingIndicator;
