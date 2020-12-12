import { useDispatch, useSelector, useStore } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import * as Animatable from "react-native-animatable";
import GroupItem from "../../components/GroupItem/index";
import NavigationService from "../../navigation/navigationService";
import * as userActions from "../../store/actions/userActions";
import { IUserState } from "../../models/reducers/default";
import styles from "./styles";

type IState = {
  userReducer: IUserState;
};

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { groups } = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);

  const onProfile = () => NavigationService.navigate("Profile");
  const onAddGroup = () => NavigationService.navigate("AddGroup");
  const onGroup = (id: string, name: string) =>
    NavigationService.navigate("Group", {
      id: id,
      groupName: name,
      ImageUrl: "",
    });
  const fetchGroups = (): void => {
    dispatch(userActions.onGetUserGroupsRequest(loggedInUser.id));
  };
  useEffect(() => {
    fetchGroups();
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchGroups();
    setRefreshing(false);
  }, [dispatch]);

  const renderGroupItem: any = ({ item }) => (
    <GroupItem
      onPressGroupItem={() => onGroup(item.id, item.name)}
      Name={item.name}
      ImageUrl={require("../../assets/images/friend-image.jpg")}
    />
  );

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={groups}
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
