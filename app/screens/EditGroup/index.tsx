import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  SafeAreaView,
  Alert,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import MemberItem from "../../components/MemberItem/index";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as groupActions from "../../store/actions/groupActions";
import * as balanceActions from "../../store/actions/balanceActions";
import { IUserState } from "../../models/reducers/default";
import { validateToken } from "../../utils/tokenValidator";
import { FloatingAction } from "react-native-floating-action";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../assets/resources/colors";
import LoadingIndicator from "../Loading";
import * as authActions from "../../store/actions/authActions";
import * as ImagePicker from "react-native-image-picker";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import messages from "../../assets/resources/messages";
import { log } from "../../utils/logger";

type Props = {
  route: RouteProp<RootStackParamList, "EditGroup">;
};

type IState = {
  userReducer: IUserState;
};

const options = {
  title: "Select Group Image",
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
  includeBase64: true,
};

const EditGroup: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const dispatch = useDispatch();
  const { loading, currentGroup } = useSelector((state: IState) => state.userReducer);
  const { groupId } = route.params;

  const [data, setData] = useState({
    name: currentGroup.name,
    image: currentGroup.picture,
    validName: true,
  });

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const fetchCurrentGroup = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(groupActions.onGetGroupInfoRequest(loggedInUser.token, groupId));
    }
  };

  useEffect(() => {
    fetchCurrentGroup();
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCurrentGroup();
    setRefreshing(false);
  }, [dispatch]);

  const onPressDeleteGroup = () => {};

  const onPressLeaveGroup = () => {
    dispatch(groupActions.onLeaveGroupRequest(loggedInUser.token, groupId));
  };

  const onPressSaveGroupInfo = () => {
    if (data.name == currentGroup.name) {
      ToastAndroid.show(messages.duplicateName, ToastAndroid.SHORT);
      return;
    }
    if (!data.validName || data.name == "" || data.image == currentGroup.picture) {
      ToastAndroid.show(messages.invalidInputInfo, ToastAndroid.SHORT);
      return;
    }
    dispatch(groupActions.onEditGroupRequest(loggedInUser.token, groupId, data.name, data.image));
  };

  const onAddMember = () =>
    NavigationService.navigate("AddMember", {
      groupId: groupId,
      members: currentGroup.members,
    });
  const onRemoveMember = (memberId: string) => {
    dispatch(groupActions.onRemoveMemberRequest(loggedInUser.token, groupId, memberId));
  };

  const onPressUpdateImage = () => {
    let uri = "../../assets/images/chortech_1.png";
    ImagePicker.launchImageLibrary(options, (response: any) => {
      uri = response.uri;
      setData({
        ...data,
        image: uri,
      });
      if (validateToken(loggedInUser.token)) {
        dispatch(groupActions.onUploadImageRequest(loggedInUser.token, {response:response, id: groupName, name: data.name}));
      }
    });
  };
  const onChangeTextGroupName = (text: string) => {
    let type = RegexValidator.validateName(text);
    setData({
      ...data,
      name: text,
      validName: text == "" || type == InputType.Name,
    });
  };

  const renderMemberItem: any = ({ item }) => (
    <MemberItem
      onPressRemoveMemberItem={() => onRemoveMember(item.id)}
      DeleteIcon="user-times"
      Name={item.name}
      ImageUrl={
        item.picture != undefined
          ? { uri: item.picture }
          : require("../../assets/images/friend-image.jpg")
      }
    />
  );

  log(currentGroup.members);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.saveButtonContainer}
              onPress={() => onPressSaveGroupInfo()}>
              <Text style={styles.saveButtonText}>ذخیره</Text>
            </TouchableOpacity>
            <Text style={styles.screenTitleText}>ویرایش اطلاعات گروه</Text>
            <TouchableOpacity
              style={styles.goBackIconContainer}
              onPress={() => NavigationService.goBack()}>
              <FontAwesomeIcon icon="arrow-left" style={styles.goBackIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.namePictureContainer}>
            <View style={styles.groupImageContainer}>
              <Image
                style={styles.groupImage}
                source={require("../../assets/images/group-image.jpg")}
              />
              <TouchableOpacity style={styles.imageUploadContainer}>
                <FontAwesomeIcon icon="camera" size={25} style={styles.cameraIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>نام گروه</Text>
              <TextInput
                placeholder="نام گروه"
                defaultValue={data.name}
                onChangeText={onChangeTextGroupName}
                style={styles.textInput}
              />
            </View>
          </View>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <Text style={styles.membersTitleText}>اعضای گروه</Text>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              ListHeaderComponent={
                <TouchableOpacity style={styles.addNewMemberContainer} onPress={onAddMember}>
                  <FontAwesomeIcon icon="user-plus" size={25} style={styles.addNewMemberIcon} />
                  <Text style={styles.addNewMemberText}>افزودن عضو جدید</Text>
                </TouchableOpacity>
              }
              data={currentGroup.members}
              renderItem={renderMemberItem}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews
              ListFooterComponent={
                <View style={styles.footerButtonsContainer}>
                  <TouchableOpacity activeOpacity={0.5} style={styles.leaveGroupButtonContainer}>
                    <Text style={styles.leaveGroupText}>خروج از گروه</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} style={styles.deleteGroupButtonContainer}>
                    <Text style={styles.deleteGroupText}>حذف گروه</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default EditGroup;
