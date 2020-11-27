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
  Group,
} from "react-native";
import * as Animatable from "react-native-animatable";

import GroupItem from "../../components/GroupItem/index";
import NavigationService from "../../navigation/navigationService";
import { ILoginState } from "../../models/reducers/login";
import * as groupActions from "../../store/actions/groupActions";
import * as userActions from "../../store/actions/userActions";
import { IUserState } from "../../models/reducers/default";
import styles from "./styles";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { GetUserGroupsResponse } from "../../models/responses/group";

type IState = {
  groupReducer: IUserState;
};

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
  const User: IUserState = useStore().getState()["userReducer"];
  // const { groups } = useSelector((state: IState) => state.groupReducer);
  const [refreshing, setRefreshing] = useState(false);
  const [fetchedGroups, setGroups] = useState<Array<Group>>([]);
  const onProfile = () => NavigationService.navigate("Profile");
  const onAddGroup = () => NavigationService.navigate("AddGroup");
  const onGroup = (id: string, name: string) =>
    NavigationService.navigate("Group", { id: id, groupName: name });

  const userName = User.name;
  console.log(userName);
  const fetchGroups = (): void => {
    dispatch(userActions.onFetchUserRequest(loggedInUser.id));
    try {
      Api.getUserGroups(loggedInUser.id).then((data: GetUserGroupsResponse) => {
        setGroups(data.groups);
      });
    } catch (error) {
      console.log(error);
    }
    // dispatch(groupActions.getUserGroupsRequest(loggedInUser.id));
  };
  useEffect(() => {
    fetchGroups;
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchGroups();
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
          <Image
            style={styles.avatar}
            source={require("../../assets/images/friend-image.jpg")}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{userName}</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={fetchedGroups}
          renderItem={renderGroupItem}
          showsVerticalScrollIndicator={false}
        />
      </Animatable.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onAddGroup}>
          <Text style={styles.buttonText}>ایجاد گروه جدید</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupList;
