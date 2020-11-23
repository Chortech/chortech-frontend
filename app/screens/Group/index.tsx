import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import * as Animatable from "react-native-animatable";

import styles from "./styles"

const Group: React.FC = () => {

  const [data, setData] = useState({
    name: "گروه دوستان ۱",
  });
  const expenses = [
    {id:1, image: "../../assets/images/friend-image.jpg", name:"کالای ۱"},
    {id:2, image: "../../assets/images/friend-image.jpg", name:"کالای ۲"},
    {id:3, image: "../../assets/images/friend-image.jpg", name:"کالای ۳"},
    {id:4, image: "../../assets/images/friend-image.jpg", name:"کالای ۴"},
    {id:5, image: "../../assets/images/friend-image.jpg", name:"کالای ۵"},
    {id:6, image: "../../assets/images/friend-image.jpg", name:"کالای ۶"},
    {id:7, image: "../../assets/images/friend-image.jpg", name:"کالای ۷"},
    {id:8, image: "../../assets/images/friend-image.jpg", name:"کالای ۸"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.groupImage}
          source={require("../../assets/images/group-image.jpg")}
        />
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={expenses}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.groupContainer}
                  >
                    <Text style={styles.groupText}>{item.name}</Text>
                    <Image
                      style={styles.activityImage}
                      source={require("../../assets/images/category-image.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </Animatable.View>
    </View>
  );
};


export default Group;