import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as Animatable from "react-native-animatable";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import LoadingIndicator from "../Loading";

import NavigationService from '../../navigation/navigationService';
import { IUserState } from "../../models/reducers/default";

import styles from "./styles"
import { useDispatch, useSelector, useStore } from "react-redux";
import * as groupActions from "../../store/actions/groupActions";
  
type Props = {
  route: RouteProp<RootStackParamList, "Group">;
};

type IState = {
  groupReducer: IUserState;
};

const Group: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const { id, groupName } = route.params;
  const { loading } = useSelector((state: IState) => state.groupReducer);
  const dispatch = useDispatch();

  const onAddExpense = () => NavigationService.navigate('AddExpense');
  const onPressDeleteGroup = () => {
    dispatch(groupActions.deleteGroup(id));
  };

  const expenses = [
    {id:1, image: "../../assets/images/friend-image.jpg", name:"کالای ۱"},
    {id:2, image: "../../assets/images/friend-image.jpg", name:"کالای ۲"},
    {id:3, image: "../../assets/images/friend-image.jpg", name:"کالای ۳"},
    {id:4, image: "../../assets/images/friend-image.jpg", name:"کالای ۴"},
    {id:5, image: "../../assets/images/friend-image.jpg", name:"کالای ۵"},
    {id:6, image: "../../assets/images/friend-image.jpg", name:"کالای ۶"},
    {id:7, image: "../../assets/images/friend-image.jpg", name:"کالای ۷"},
    {id:8, image: "../../assets/images/friend-image.jpg", name:"کالای ۸"},
  ];
  
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) :
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.groupImage}
          source={require("../../assets/images/group-image.jpg")}
        />
        <Text style={styles.text}>{groupName}</Text>
      </View>
       <Animatable.View
        animation="slideInUp"
        duration={600}
        style={styles.infoContainer}
      >
          <FlatList
            data={expenses}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.groupContainer}
                  >
                    <Text style={styles.groupText}>{item.name}</Text>
                    <Image
                      style={styles.activityImage}
                      source={require("../../assets/images/category-image.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        <ActionButton
          buttonColor="#1AD927"
          position="left"
          onPress={onAddExpense}
        />
      </Animatable.View>
    </View>
    }
    </>
  );
};
  
  
export default Group;
