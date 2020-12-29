import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as Animatable from "react-native-animatable";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import * as userActions from "../../store/actions/userActions";
import LoadingIndicator from "../Loading";

type IState = {
  userReducer: IUserState;
};

const AddComment: React.FC = (): JSX.Element => {
  const { loading } = useSelector((state: IState) => state.userReducer);

  const cancel = () => NavigationService.goBack();

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
                placeholderTextColor="#A4A4A4"
                style={styles.textInput}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton} onPress={cancel}>
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
