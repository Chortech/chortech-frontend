import { useDispatch, useSelector, useStore } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import GroupItem from "../../components/GroupItem/index";
import NavigationService, { navigationRef } from "../../navigation/navigationService";
import * as groupActions from "../../store/actions/groupActions";
import { IUserState } from "../../models/reducers/default";
import styles from "./styles";
import { validateToken } from "../../utils/tokenValidator";
import { log } from "../../utils/logger";
import { FloatingAction } from "react-native-floating-action";
import colors from "../../assets/resources/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type IState = {
  userReducer: IUserState;
};

const GroupList: React.FC = () => {
  const dispatch = useDispatch();
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { groups } = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);
  const onAddGroup = () => NavigationService.navigate("AddGroup");
  const onGroup = (id: string, name: string) => {
    if (validateToken(loggedInUser.token)) {
      dispatch(groupActions.onGetGroupInfoRequest(loggedInUser.token, id));
    }
    NavigationService.navigate("Group", { groupId: id });
  };
  const fetchGroups = (): void => {
    if (validateToken(loggedInUser.token)) {
      dispatch(groupActions.onGetUserGroupsRequest(loggedInUser.token));
    }
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
      Balance={item.balance}
    />
  );

  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
        <Text style={styles.screenTitleText}>گروه‌ها</Text>
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={groups}
          renderItem={renderGroupItem}
          showsVerticalScrollIndicator={false}
          initialNumToRender={8}
        />
      </Animatable.View>
      <FloatingAction
        color={colors.mainColor}
        position="left"
        overlayColor="#00000000"
        floatingIcon={<FontAwesomeIcon icon="plus" color="#fff" size={20} />}
        onPressMain={onAddGroup}
      />
    </View>
  );
};

export default GroupList;
