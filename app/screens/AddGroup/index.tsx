import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as Animatable from "react-native-animatable";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import * as groupActions from "../../store/actions/groupActions";
import LoadingIndicator from "../Loading";

type IState = {
  userReducer: IUserState;
};

const AddGroup: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [memberIds, setMemberIds] = useState<Array<string>>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const confirm = () => {
    if (groupName == "") {
      ToastAndroid.show("لطفا نام گروه را وارد کنید.", ToastAndroid.SHORT);
    } else {
      dispatch(groupActions.onAddGroupRequest(groupName, loggedInUser.id, memberIds));
    }
  };

  const onChangeSearchQuery = (text: string) => {
    setSearchQuery(text);
  };
  const onPressSearchButton = () => {};

  const cancel = () => NavigationService.goBack();

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.groupNameContainer}>
              <TextInput
                placeholder="نام گروه"
                placeholderTextColor="#A4A4A4"
                style={styles.textHeader}
                onChangeText={(text) => setGroupName(text)}
              />
            </View>
          </View>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <Searchbar
              placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              onChangeText={onChangeSearchQuery}
              value={searchQuery}
              iconColor="#1AD927"
              onIconPress={onPressSearchButton}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton} onPress={confirm}>
                <Text style={styles.addButtonText}>ایجاد گروه</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={cancel}>
                <Text style={styles.removeButtonText}>انصراف</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default AddGroup;
