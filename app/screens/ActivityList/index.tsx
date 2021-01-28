import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Item } from "../../models/other/axios/Item";
import { IUserState } from "../../models/reducers/default";
import NavigationService from "../../navigation/navigationService";
import * as expenseActions from "../../store/actions/expenseActions";
import { log } from "../../utils/logger";
import { validateToken } from "../../utils/tokenValidator";
import styles from "./styles";

type IState = {
  userReducer: IUserState;
};

const ActivityList: React.FC = () => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const [renderFlatList, setRenderFlatList] = useState(false);
  const [data, setData] = useState({
    categories: [{id:"0", selected:false,  name: "مواد غذایی", icon: "utensils"}, 
                    {id:"1", selected:false,  name: "پوشاک", icon: "tshirt"}, 
                    {id:"2", selected:false,  name: "هدیه", icon: "gift"},
                    {id:"3", selected:false,  name: "سلامت", icon: "heartbeat"},
                    {id:"4", selected:false,  name: "لوازم تحریر", icon: "pencil-ruler"},
                    {id:"5", selected:false,  name: "ورزش", icon: "dumbbell"},
                    {id:"6", selected:false,  name: "سفر", icon: "suitcase-rolling"},
                    {id:"7", selected:false,  name: "کالای دیجیتال", icon: "laptop"}]
  });
  const { activities } = useSelector((state: IState) => state.userReducer);
  const user = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const onPressActivityItem = (id: string, name: string, category: string, total: number) =>
    NavigationService.navigate("Activity", {
      id: id,
      activityName: name,
      category: category,
      total: total.toString(),
    });
  const onAddExpense = () => {
    let items: Array<Item> = [];

    user.friends.forEach((element) => {
      items.push({ id: element.id, name: element.name, amount: 0, selected: false });
    });
    NavigationService.navigate("AddExpense", { parentScreen: "ActivityList", items: items });
  };
  const [refreshing, setRefreshing] = useState(false);
  const fetchActivities = (): void => {
    if (validateToken(loggedInUser.token)) {
      dispatch(expenseActions.onGetUserExpensesRequest(loggedInUser.token));
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

  const renderCategory: any = ({ item }) => (
      <>
    <SelectableItem
      id={item.id}
      Name={item.name}
      selected={item.selected}
      onPressItem={() => {data.categories[item.id].selected = !data.categories[item.id].selected;
        setRenderFlatList(!renderFlatList);
      }
    }
    />
      <FontAwesomeIcon icon={item.icon} size={20} style={{top:30}}/>
    </>
  );  

  return (
    <>
      <View style={styles.container}>
          <FlatList
                horizontal={true}
                data={data.categories}
                renderItem={renderCategory}
                extraData={renderFlatList}
                scrollEnabled={true}
                keyExtractor={item => item.id}
                style={{
                position: "relative",
                backgroundColor: "white",
                marginHorizontal: 0,
                paddingBottom: -10,
                marginBottom: -40,}}
              />
        <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsVerticalScrollIndicator={false}
            data={user?.activities}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.activityContainer}
                    onPress={() => onPressActivityItem(item.id, item.description, "", item.total)}>
                    <Text style={styles.activityText}>{item.description}</Text>
                    <Image
                      style={styles.activityImage}
                      source={require("../../assets/images/category-image.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </Animatable.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onAddExpense}>
            <Text style={styles.buttonText}>ثبت فعالیت جدید</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ActivityList;
