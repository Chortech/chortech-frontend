import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as Animatable from "react-native-animatable";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import * as groupActions from "../../store/actions/groupActions";
import LoadingIndicator from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../assets/resources/colors";

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
      dispatch(
        groupActions.onAddGroupRequest(
          loggedInUser.token,
          groupName,
          "../../assets/images/group-image.jpg"
        )
      );
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
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <Text style={styles.screenTitleText}>افزودن گروه جدید</Text>
            <View style={styles.groupInfoContainer}>
              <TouchableOpacity style={styles.imageContainer}>
                <Image
                  source={require("../../assets/images/friend-image.jpg")}
                  style={styles.groupImage}
                />
                <View style={styles.cameraIconContainer}>
                  <FontAwesomeIcon icon="camera" size={25} style={styles.cameraIcon} />
                </View>
              </TouchableOpacity>
              <TextInput
                placeholder="نام گروه"
                placeholderTextColor={colors.gray}
                style={styles.groupNameTextInput}
                onChangeText={(text) => setGroupName(text)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addGroupButtonContainer} onPress={confirm}>
                <Text style={styles.addGroupButtonText}>ایجاد گروه</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default AddGroup;
