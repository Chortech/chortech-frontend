import { RouteProp } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { IUserState } from "../../models/reducers/default";
import { useDispatch, useSelector, useStore } from "react-redux";
import { validateToken } from "../../utils/tokenValidator";
import * as groupActions from "../../store/actions/groupActions";
import LoadingIndicator from "../Loading";
import { Member } from "../../models/other/axios/Group";
import MemberBalanceItem from "../../components/MemberBalanceItem";
import { GroupMemberBalanceItem } from "../../models/other/axios/Item";
import { log } from "../../utils/logger";

type Props = {
  route: RouteProp<RootStackParamList, "GroupBalances">;
};

type IState = {
  userReducer: IUserState;
};

const GroupBalances: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading, currentGroup } = useSelector((state: IState) => state.userReducer);
  const { groupId } = route.params;
  const dispatch = useDispatch();
  const [members, setMembers] = useState<GroupMemberBalanceItem[]>([]);
  const [renderList, setRenderList] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchCurrentGroup();
  }, [dispatch]);

  const fetchCurrentGroup = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(groupActions.onGetGroupInfoRequest(loggedInUser.token, groupId));
    }
    let balances: GroupMemberBalanceItem[] = members;
    currentGroup.members?.forEach((member) => {
      const index = balances.findIndex((balance) => balance.member.id == member.id);
      if (index < 0) {
        balances.push({ member: member, selected: false });
      } else {
        balances[index].member = member;
      }
    });
  };
  log(currentGroup.members);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCurrentGroup();
    setRefreshing(false);
  }, [dispatch]);

  const onSelectItem = (item: GroupMemberBalanceItem) => {
    item.selected = !item.selected;
    setRenderList(!renderList);
  };

  const renderMemberBalanceItem = ({ item }) => {
    return <MemberBalanceItem balance={item} onPressItem={() => onSelectItem(item)} />;
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Text style={styles.screenTitleText}>حساب و کتاب‌های گروه</Text>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              data={members}
              renderItem={renderMemberBalanceItem}
              keyExtractor={(item) => item.member.id}
              removeClippedSubviews
              extraData={renderList}
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default GroupBalances;
