import { RouteProp } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Alert, Image, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as expenseActions from "../../store/actions/expenseActions";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { Item } from "../../models/other/axios/Item";
import { PRole } from "../../models/other/axios/Participant";
import { validateToken } from "../../utils/tokenValidator";
import { categories } from "../../utils/categories";
import PopupMenu from "../../components/PopupMenu";
import { FloatingAction } from "react-native-floating-action";
import colors from "../../assets/resources/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import fonts from "../../assets/resources/fonts";

type Props = {
  route: RouteProp<RootStackParamList, "Activity">;
};

type IState = {
  userReducer: IUserState;
};

const Activity: React.FC<Props> = ({ route }: Props) => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { id } = route.params;
  const { loading, expenses, friends, currentExpense } = useSelector(
    (state: IState) => state.userReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseActions.onGetUserExpenseRequest(loggedInUser.token, id));
  }, [dispatch]);

  const onPressAddComment = () => NavigationService.navigate("AddComment", { expenseId: id });

  const onPressDeleteActivity = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(expenseActions.onDeleteExpenseRequest(loggedInUser.token, id));
    } else {
      ToastAndroid.show("لطفا دوباره تلاش کنید", ToastAndroid.SHORT);
    }
  };

  const getItems = (): Array<Item> => {
    let items: Array<Item> = [];
    let index = expenses.findIndex((ac) => ac.id == id);
    if (index > -1) {
      expenses[index].participants?.forEach((element) => {
        items.push({
          id: element.id,
          name: element.name!,
          amount: element.amount,
          selected: true,
          role: element.role == "creditor" ? PRole.Creditor : PRole.Debtor,
        });
      });
    }
    friends.forEach((fr) => {
      index = items.findIndex((i) => i.id == fr.id);
      if (index < 0) {
        items.push({
          id: fr.id,
          name: fr.name != undefined ? fr.name : "",
          amount: 0,
          selected: false,
        });
      }
    });

    return items;
  };

  const onPressEditExpense = () => {
    let items: Array<Item> = getItems();
    NavigationService.navigate("AddExpense", {
      parentScreen: "Activity",
      items: items,
      id: id,
      description: currentExpense.description,
      total: currentExpense.total,
    });
  };

  const onPopupEvent = (eventName, index) => {
    if (eventName !== "itemSelected") return;
    if (index === 0) {
      Alert.alert(
        "",
        "آیا از حذف دوست خود مطمئن هستید؟",
        [
          {
            text: "لغو",
            onPress: () => {},
          },
          {
            text: "تایید",
            onPress: onPressDeleteActivity,
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  const actions: any = [
    {
      text: "ویرایش هزینه",
      icon: <FontAwesomeIcon icon="pen" size={15} color={colors.white} />,
      name: "editExpense",
      textStyle: {
        fontFamily: fonts.IranSans_Light,
        textAlign: "center",
        padding: 2,
      },
      position: 1,
      color: colors.mainColor,
    },
    {
      text: "اضافه کردن یادداشت",
      icon: <FontAwesomeIcon icon="comment" size={15} color={colors.white} />,
      name: "addComment",
      color: colors.mainColor,
      textStyle: {
        fontFamily: fonts.IranSans_Light,
        textAlign: "center",
        padding: 2,
      },
      position: 2,
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.popupMenuContainer}>
              <PopupMenu actions={["حذف فعالیت"]} onPress={onPopupEvent} />
            </View>

            <Image
              style={styles.activityImage}
              source={require("../../assets/images/category-image.jpg")}
            />
            <Text style={styles.activityNameText}>{currentExpense.description}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <View style={styles.textWrapper}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>{currentExpense.total}</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfo}>مبلغ</Text>
              </View>
            </View>
            <FloatingAction
              actions={actions}
              color={colors.mainColor}
              position="left"
              onPressItem={(name) => {
                if (name == "editExpense") {
                  onPressEditExpense();
                } else {
                  onPressAddComment();
                }
              }}
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Activity;
