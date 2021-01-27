import React from "react";
import { Image, View } from "react-native";

const StartUp = (): JSX.Element => {
  return (
    <View>
      <Image source={require("../../assets/images/startup.gif")} />
    </View>
  );
};

export default StartUp;
