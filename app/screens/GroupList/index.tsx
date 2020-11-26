import { useDispatch, useSelector, useStore } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import * as Animatable from "react-native-animatable";

import GroupItem from "../../components/GroupItem/index";
import NavigationService from '../../navigation/navigationService';
import { ILoginState } from "../../models/reducers/login";
import * as groupActions from "../../store/actions/groupActions";
import { IUserState } from "../../models/reducers/default";
import styles from "./styles"

type IState = {
  groupReducer: IUserState;
};

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  const { groups } = useSelector((state: IState) => state.groupReducer);
  const [refreshing, setRefreshing] = useState(false);
  const onProfile = () => NavigationService.navigate('Profile');
  const onAddGroup = () => NavigationService.navigate('AddGroup');
  const userName = loggedInUser.name;
  console.log(userName);
  const fetchGroups = (): void => {
    dispatch(groupActions.getUserGroupsRequest(loggedInUser.id));
  };
  useEffect(() => {
    fetchGroups
  }, []);

  const onGroup = (id: string, name: string) =>
  NavigationService.navigate("Group", { id: id, groupName: name });
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchGroups();
    }, 200);
    setRefreshing(false);
  }, []);

  const renderGroupItem: any = ({ item }) => (
    <GroupItem
      onPressGroupItem={() => onGroup(item.id, item.name)}
      Name={item.name}
      ImageUrl={require("../../assets/images/friend-image.jpg")}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
          <TouchableOpacity onPress={onProfile}>
            <Image style={styles.avatar} source={require("../../assets/images/friend-image.jpg")}/>
          </TouchableOpacity>
          <Text style={styles.name}>{userName}</Text>
      </View>

      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}
        >
        <FlatList 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
          data={groups}
          renderItem={( renderGroupItem )}
        />
      </Animatable.View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onAddGroup}>
              <Text style={styles.buttonText}>ایجاد گروه جدید</Text>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
      </View>
  </View>
  );
};

export default GroupList;