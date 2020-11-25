import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { RootStackParamList } from "../../navigation/rootStackParams";
import { styles } from "./styles";

type Props = {
  route: RouteProp<RootStackParamList, "Friend">;
};

const Friend: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const { id, friendName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.friendImage}
          source={require("../../assets/images/friend-image.jpg")}
        />
        <Text style={styles.userNameText}>{friendName}</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeButtonText}>حذف کردن از دوستان</Text>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Friend;
