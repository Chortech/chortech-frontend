import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector, useStore } from "react-redux";
import colors from "../../assets/resources/colors";
import ActivityItem from "../../components/ActivityItem/index";
import SelectableItem from "../../components/SelectableItem";
import { Item } from "../../models/other/axios/Item";
import { IUserState } from "../../models/reducers/default";
import NavigationService from "../../navigation/navigationService";
import * as activityActions from "../../store/actions/activityActions";
import { log } from "../../utils/logger";
import { validateToken } from "../../utils/tokenValidator";
import LoadingIndicator from "../Loading";
import styles from "./styles";

type IState = {
  userReducer: IUserState;
};

const ActivityList: React.FC = () => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const [renderFlatList, setRenderFlatList] = useState(false);
  // const [data, setData] = useState({
  //   categories: [
  //     { id: "0", selected: false, name: "مواد غذایی", icon: "utensils" },
  //     { id: "1", selected: false, name: "پوشاک", icon: "tshirt" },
  //     { id: "2", selected: false, name: "هدیه", icon: "gift" },
  //     { id: "3", selected: false, name: "سلامت", icon: "heartbeat" },
  //     { id: "4", selected: false, name: "لوازم تحریر", icon: "pencil-ruler" },
  //     { id: "5", selected: false, name: "ورزش", icon: "dumbbell" },
  //     { id: "6", selected: false, name: "سفر", icon: "suitcase-rolling" },
  //     { id: "7", selected: false, name: "کالای دیجیتال", icon: "laptop" },
  //   ],
  // });
  const { loading, activities } = useSelector((state: IState) => state.userReducer);
  const user = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onPressActivityItem = () =>
    NavigationService.navigate("Activity", {
      // id: id,
      // activityName: name,
      // category: category,
      // total: total.toString(),
    });

  const onAddExpense = () => {
    let items: Array<Item> = [];

    user.friends.forEach((element) => {
      items.push({ id: element.id, name: element.name, amount: 0, selected: false });
    });
    NavigationService.navigate("AddExpense", { parentScreen: "ActivityList", items: items });
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

  const renderActivityItem: any = ({ item }) => (
    <ActivityItem
      onPressActivityItem={() => onPressActivityItem()}
      Text="hmm"
    />
  );

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
          <View style={styles.container}>
            <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
              <Text style={styles.screenTitleText}>فعالیت‌ها</Text>
              <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={activities}
                renderItem={renderActivityItem}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
              />
            </Animatable.View>
            <FloatingAction
              color={colors.mainColor}
              position="left"
              overlayColor="#00000000"
              floatingIcon={<FontAwesomeIcon icon="plus" color="#fff" size={20} />}
              onPressMain={onAddExpense}
            />
          </View>
        )}
    </>
  );
};

export default ActivityList;
