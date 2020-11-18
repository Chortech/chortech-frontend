import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingIndicator: React.FunctionComponent = () => {
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingIndicator;
