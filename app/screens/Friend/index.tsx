import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as friendActions from "../../store/actions/friendActions";
import LoadingIndicator from "../Loading";
import { styles } from "./styles";

type Props = {
  route: RouteProp<RootStackParamList, "Friend">;
};

type IState = {
  friendReducer: IUserState;
};

const Friend: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const { id, friendName } = route.params;
  const { loading } = useSelector((state: IState) => state.friendReducer);
  const dispatch = useDispatch();

  const onPressDeleteFriend = () => {
    dispatch(friendActions.onDeleteFriendRequest(id));
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.friendImage}
              source={require("../../assets/images/friend-image.jpg")}
            />
            <Text style={styles.userNameText}>{friendName}</Text>
          </View>
          <Animatable.View
            animation="slideInUp"
            duration={600}
            style={styles.infoContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={onPressDeleteFriend}>
                <Text style={styles.removeButtonText}>حذف کردن از دوستان</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Friend;
