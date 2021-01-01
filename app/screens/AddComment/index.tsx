import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import * as expenseActions from "../../store/actions/expenseActions";
import LoadingIndicator from "../Loading";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import { log } from "../../utils/logger";

type Props = {
  route: RouteProp<RootStackParamList, "AddComment">;
};

type IState = {
  userReducer: IUserState;
};

const AddComment: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading } = useSelector((state: IState) => state.userReducer);
  const params = route.params;
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  log(params.expenseId);
  const addComment = () => {
    if (comment.length > 255) {
      ToastAndroid.show("یادداشت نوشته‌شده بسیار طولانی است", ToastAndroid.SHORT);
      return;
    }
    if (comment.length == 0) {
      ToastAndroid.show("یادداشت نباید خالی باشد", ToastAndroid.SHORT);
      return;
    }
    const createdAt: number = Math.floor(Date.now() / 1000);
    dispatch(
      expenseActions.onAddCommentRequest(loggedInUser.token, comment, createdAt, params.expenseId!)
    );
  };
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="یادداشت"
                multiline={true}
                numberOfLines={8}
                placeholderTextColor="#A4A4A4"
                style={styles.textInput}
                onChangeText={(text) => setComment(text)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton} onPress={addComment}>
                <Text style={styles.addButtonText}>ثبت یادداشت</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default AddComment;
