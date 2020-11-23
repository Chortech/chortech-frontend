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
import { Button } from 'react-native-paper';
import * as Animatable from "react-native-animatable";
import { useDispatch } from 'react-redux';

import * as loginActions from '../../store/actions/authActions';
import NavigationService from '../../navigation/navigationService';
import styles from "./styles"

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const onGroupSelect = () => NavigationService.navigate('Group');
  const onLogout = () => dispatch(loginActions.logOut());
  const onProfile = () => NavigationService.navigate('Profile');

  const groups = [
    {id:1, name:"گروه دوستان ۱"},
    {id:2, name:"گروه دوستان ۲"},
    {id:3, name:"گروه دوستان ۳"},
    {id:4, name:"گروه دوستان ۴"},
    {id:5, name:"گروه دوستان ۵"},
    {id:6, name:"گروه دوستان ۶"},
    {id:7, name:"گروه دوستان ۷"},
    {id:8, name:"گروه دوستان ۸"},
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
        </ScrollView>
      </Animatable.View>
  </View>
  );
};

export default GroupList;