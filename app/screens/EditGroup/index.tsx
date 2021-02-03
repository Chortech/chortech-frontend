import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl, Image, TouchableOpacity, Button, 
  TouchableHighlight, SafeAreaView, Alert} from "react-native";
  import CustomInput from "../../components/CustomInput";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import MemberItem from "../../components/MemberItem/index"
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
import { Modal, ModalFooter, ModalButton, ModalContent } from 'react-native-modals';


type Props = {
  route: RouteProp<RootStackParamList, "EditGroup">;
};

type IState = {
  userReducer: IUserState;
};

const EditGroup: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { groups } = useSelector((state: IState) => state.userReducer);
  const { id, groupName, ImageUrl, members } = route.params;
  const dispatch = useDispatch();
  const { loading } = useSelector((state: IState) => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);
  const [
    defaultAnimationDialog, setDefaultAnimationDialog
  ] = useState(false);
  console.log("members", members);
  const onPressLeaveGroup = () => {
    dispatch(groupActions.onLeaveGroupRequest(loggedInUser.token, id));
  };

  const onAddMember = () => NavigationService.navigate("AddMember", {
    groupId: id, members: members
  });
  const onPressMemberItem = (id: string, name: string, balance: number) => {
  };
  const onRemoveMember = (memberId) => {
    dispatch(groupActions.onRemoveMemberRequest(loggedInUser.token, id, memberId))
  }

  const onGroupNameChange = (text: string) => {
  };


  const renderMemberItem: any = ({ item }) => (
    <MemberItem
      onPressMemberItem={() => onPressMemberItem(item.id, item.name, item.balance)}
      onPressRemoveMemberItem={() => onRemoveMember(item.id)}
      IconName="times"
      Name={item.name}
      ImageUrl={
        item.picture != undefined
          ? { uri: item.picture }
          : require("../../assets/images/friend-image.jpg")
      }
    />
  );
  
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
              <Image
                  style={styles.friendImage}
                  source={require("../../assets/images/group-image.jpg")}
                />
              <Text style={styles.screenTitleText}>{groupName}</Text>
              <CustomInput
                  label="نام گروه"
                  defaultValue={groupName}
                  placeholder="نام گروه"
                  onChangeText={onGroupNameChange}
                />
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <FlatList
              data={members}
              renderItem={renderMemberItem}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews
            />
          </Animatable.View>
          <FloatingAction
            color={colors.mainColor}
            position="left"
            overlayColor="#00000000"
            floatingIcon={<FontAwesomeIcon icon="plus" color="#fff" size={20} />}
            onPressMain={onAddMember}
          />
          <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onPressLeaveGroup}
                activeOpacity={0.5}>
                <View style={styles.logoutIconContainer}>
                  <FontAwesomeIcon icon="sign-out-alt" style={styles.logoutIcon} size={20} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={{ ...styles.titleText, color: "red" }}>خروج از گروه</Text>
                </View> 
              </TouchableOpacity>
          {/* <Dialog
          onDismiss={() => {
            setDefaultAnimationDialog(false);
          }}
          onTouchOutside={() => {
            console.log("you touched outsied yaaay")
            setDefaultAnimationDialog(false);
          }}
          width={0.9}
          visible={defaultAnimationDialog}
          rounded
          actionsBordered
          >
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}>
            <DialogButton
                text= {groupName + " حذف"}
                bordered
                onPress={() => {
                  
                  console.log("something happening");
                  setDefaultAnimationDialog(false);
                  console.log(defaultAnimationDialog);
                  onRemoveMember()
                }}
                key="button"
              />
          </DialogContent>
        </Dialog>  */}
        
        </View>
      )}
    </>
  );
};

export default EditGroup;
