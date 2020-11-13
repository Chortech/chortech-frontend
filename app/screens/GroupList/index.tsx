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

import * as loginActions from '../../store/actions/loginActions';
import NavigationService from '../../navigation/navigationService';
import styles from "./styles"

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const onGroupSelect = () => NavigationService.navigate('Group');
  const onLogout = () => dispatch(loginActions.logOut());

  const groups = [
    {id:1, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۱"},
    {id:2, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۲"},
    {id:3, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۳"},
    {id:4, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۴"},
    {id:5, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۵"},
    {id:6, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۶"},
    {id:7, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۷"},
    {id:8, image: "../../assets/images/friend-image.jpg", name:"گروه دوستان ۸"},
  ];

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerContent}>
          <Image style={styles.avatar} source={require("../../assets/images/friend-image.jpg")}/>
          <Text style={styles.name}>گروه دوستان ۷</Text>
      </View>
    </View>

    <View style={styles.body}>
    <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}
      >
      <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList 
        style={styles.container} 
        data={groups}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={onGroupSelect}>
              <View style={styles.box}>
                <Image style={styles.image} source={require("../../assets/images/friend-image.jpg")}/>
                 <Text style={styles.username}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )
      }}/>
      </ScrollView>
      </Animatable.View>
    </View>
    <View>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
</View>
);
}

export default GroupList;