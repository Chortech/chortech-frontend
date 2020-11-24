import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as Animatable from "react-native-animatable";

import NavigationService from '../../navigation/navigationService';
import styles from "./styles"

const ActivityList: React.FC = () => {
  const onActivitySelect = () => NavigationService.navigate('Activity');
  const onAddExpense = () => NavigationService.navigate('AddExpense');
  
  const expenses = [
    {id:1, image: "../../assets/images/friend-image.jpg", name:"کالای ۱"},
    {id:2, image: "../../assets/images/friend-image.jpg", name:"کالای ۲"},
    {id:3, image: "../../assets/images/friend-image.jpg", name:"کالای ۳"},
    {id:4, image: "../../assets/images/friend-image.jpg", name:"کالای ۴"},
    {id:5, image: "../../assets/images/friend-image.jpg", name:"کالای ۵"},
    {id:6, image: "../../assets/images/friend-image.jpg", name:"کالای ۶"},
    {id:7, image: "../../assets/images/friend-image.jpg", name:"کالای ۷"},
    {id:8, image: "../../assets/images/friend-image.jpg", name:"کالای ۸"},
    {id:10, image: "../../assets/images/friend-image.jpg", name:"کالای ۹"},
    {id:11, image: "../../assets/images/friend-image.jpg", name:"کالای ۸"},
    {id:12, image: "../../assets/images/friend-image.jpg", name:"کالای ۸"},
    {id:13, image: "../../assets/images/friend-image.jpg", name:"کالای ۱۰"},
  ];

  return (
    <View style={styles.container}>
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
                    style={styles.friendContainer}
                    onPress={onActivitySelect}
                  >
                    <Text style={styles.friendText}>{item.name}</Text>
                    <Image
                      style={styles.friendImage}
                      source={require("../../assets/images/friend-image.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
        <ActionButton
          buttonColor="#1AD927"
          position="left"
          onPress={onAddExpense}
        />
      </Animatable.View>
    </View>
  );
};


export default ActivityList;