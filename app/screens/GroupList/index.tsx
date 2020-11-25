import React, { Component } from 'react';
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

import NavigationService from '../../navigation/navigationService';
import styles from "./styles"

const GroupList: React.FC = () => {
  const onGroupSelect = () => NavigationService.navigate('Group');
  const onProfile = () => NavigationService.navigate('Profile');
  const onAddGroup = () => NavigationService.navigate('AddGroup');

  const groups = [
    {id:1, name:"گروه دوستان ۱"},
    {id:2, name:"گروه دوستان ۲"},
    {id:3, name:"گروه دوستان ۳"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={onProfile}
          >
            <Image style={styles.avatar} source={require("../../assets/images/friend-image.jpg")}/>
          </TouchableOpacity>
          <Text style={styles.name}>بابک سفیدگر</Text>
      </View>

      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}
        >
        <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList 
          data={groups}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={onGroupSelect}>
                <View style={styles.box}>
                  <Text style={styles.groupName}>{item.name}</Text>
                  <Image style={styles.image} source={require("../../assets/images/group-image.jpg")}/>
                </View>
              </TouchableOpacity>
            )
        }}/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onAddGroup}>
              <Text style={styles.buttonText}>ایجاد گروه جدید</Text>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
  </View>
  );
};

export default GroupList;