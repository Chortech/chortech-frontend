import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import { FloatingAction } from "react-native-floating-action";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { useDispatch, useSelector, useStore } from "react-redux";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import ActivityItem from "../../components/ActivityItem/index";
import SelectableItem from "../../components/SelectableItem";
import { Activity } from "../../models/other/axios/Activity";
import { Type } from "../../models/other/axios/Activity";
import { Item } from "../../models/other/axios/Item";
import { IUserState } from "../../models/reducers/default";
import navigationService from "../../navigation/navigationService";
import NavigationService from "../../navigation/navigationService";
import * as activityActions from "../../store/actions/activityActions";
import { log } from "../../utils/logger";
import { handler } from "../../utils/textBuilder";
import { validateToken } from "../../utils/tokenValidator";
import LoadingIndicator from "../Loading";
import styles from "./styles";

type IState = {
  userReducer: IUserState;
};

const ActivityList: React.FC = () => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const [renderFlatList, setRenderFlatList] = useState(false);
  const { loading, activities } = useSelector((state: IState) => state.userReducer);
  const user = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onPressActivityItem = (type: Type, id: string) => {
    if (type == "expense") {
      NavigationService.navigate("Activity", {
        // id: id,
        // activityName: name,
        // category: category,
        // total: total.toString(),
      });
    } else if (type == "payment") {
      // NavigationService.navigate("Activity", {
      //   id: id,
      // });
    } else if (type == "group") {
      navigationService.navigate("Group", {
        groupId: id,
      });
    }
  };

  const onAddExpense = () => {
    let friendItems: Item[] = [];
    let groupItems: Item[] = [];
    user.friends.forEach((element) => {
      friendItems.push({
        id: element.id,
        name: element.name != undefined ? element.name : "",
        amount: 0,
        selected: false,
      });
    });
    NavigationService.navigate("AddExpense", {
      parentScreen: "ActivityList",
      friendItems: friendItems,
      groupItems: groupItems,
    });
  };

  const fetchActivities = (): void => {
    if (validateToken(loggedInUser.token)) {
      dispatch(activityActions.onGetUserActivitiesRequest(loggedInUser.token));
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchActivities();
    setRefreshing(false);
  }, [dispatch]);

  // const renderCategory: any = ({ item }) => (
  //   <>
  //     <SelectableItem
  //       id={item.id}
  //       Name={item.name}
  //       selected={item.selected}
  //       onPressItem={() => {
  //         data.categories[item.id].selected = !data.categories[item.id].selected;
  //         setRenderFlatList(!renderFlatList);
  //       }}
  //     />
  //     <FontAwesomeIcon icon={item.icon} size={20} style={{ top: 30 }} />
  //   </>
  // );

  const renderActivityItem: any = ({ item }) => {
    // try {
    //   let txt = handler.handle(item);
    // } catch (e) {
    //   log("exception");
    //   log(e);
    //   log(item);
    // }
    return (
      <ActivityItem
        onPressActivityItem={() => onPressActivityItem(item.requested.type, item.requested.id)}
        Text={handler.handle(item)}
      />
    );
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}
              data={activities}
              renderItem={renderActivityItem}
            />
          </Animatable.View>
          <FloatingAction
            color={colors.mainColor}
            position="left"
            overlayColor={colors.transparent}
            floatingIcon={<FontAwesomeIcon icon="shopping-cart" color="#fff" size={20} />}
            onPressMain={onAddExpense}
          />
        </View>
      )}
    </>
  );
};

export default ActivityList;
