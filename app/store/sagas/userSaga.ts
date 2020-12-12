import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  AddActivityRequest,
  AddExpenseRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteDebtRequest,
  DeleteParticipantRequest,
} from "../../models/requests/activity";
import {
  AddFriendRequest,
  DeleteFriendRequest,
} from "../../models/requests/friend";
import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/group";
import {
  GetUserActivitiesRequest,
  GetUserFriendsRequest,
  GetUserRequest,
  UpdateUserRequest,
} from "../../models/requests/user";
import {
  AddActivityResponse,
  AddExpenseResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/activity";
import {
  AddFriendResponse,
  DeleteFriendResponse,
} from "../../models/responses/friend";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/group";
import {
  GetUserActivitiesResponse,
  GetUserFriendsResponse,
  GetUserResponse,
  UpdateUserResponse,
} from "../../models/responses/user";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as userActions from "../actions/userActions";

export function* fetchUserAsync(action: Action<GetUserRequest>) {
  yield put(userActions.onLoadingEnable());
  const id = action.payload.id;
  let response: GetUserResponse = {
    success: false,
    user: undefined,
  };

  try {
    response = yield Api.getUser(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserResponse(response));
  } else {
    yield put(userActions.onGetUserFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* updateUserAsync(action: Action<UpdateUserRequest>) {
  yield put(userActions.onLoadingEnable());
  const user = action.payload.user;
  let response: UpdateUserResponse = {
    success: false,
    user: undefined,
  };

  try {
    response = yield Api.updateUser(user);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onUpdateUserResponse(response));
  } else {
    yield put(userActions.onUpdateUserFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getUserActivitiesAsync(
  action: Action<GetUserActivitiesRequest>
) {
  yield put(userActions.onLoadingEnable());
  const { userId } = action.payload;
  let response: GetUserActivitiesResponse = {
    success: false,
    userId: "-1",
    activities: [],
  };

  try {
    response = yield Api.getUserActivities(userId);
  } catch (error) {
    console.log(JSON.stringify(error));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserActivitiesResponse(response));
  } else {
    yield put(userActions.onGetUserActivitiesFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addActivityAsync(action: Action<AddActivityRequest>) {
  yield put(userActions.onLoadingEnable());
  const { userId, type, groupId, expenseId, debtId } = action.payload;
  let response: AddActivityResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addActivity(userId, type, groupId, expenseId, debtId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onAddActivityResponse(response));
  } else {
    yield put(userActions.onAddActivityFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addExpenseAsync(action: Action<AddExpenseRequest>) {
  yield put(userActions.onLoadingEnable());
  const {
    userId,
    activityName,
    description,
    category,
    totalPrice,
  } = action.payload;
  let response: AddExpenseResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addExpense(
      userId,
      activityName,
      description,
      category,
      totalPrice
    );
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onAddExpenseResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show("فعالیت با موفقیت اضافه شد.", ToastAndroid.SHORT);
  } else {
    yield put(userActions.onAddExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addDebtAsync(action: Action<AddDebtRequest>) {
  yield put(userActions.onLoadingEnable());
  const {
    userId,
    activityName,
    description,
    category,
    debt,
    creditorId,
  } = action.payload;
  let response: AddDebtResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addDebt(
      userId,
      activityName,
      description,
      category,
      debt,
      creditorId
    );
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onAddDebtResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show("فعالیت با موفقیت اضافه شد.", ToastAndroid.SHORT);
  } else {
    yield put(userActions.onAddDebtFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addParticipantAsync(action: Action<AddParticipantRequest>) {
  yield put(userActions.onLoadingEnable());
  const { expenseId, userId, share } = action.payload;
  let response: AddParticipantResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addParticipant(expenseId, userId, share);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onAddParticipantResponse(response));
  } else {
    yield put(userActions.onAddParticipantFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteActivityAsync(action: Action<DeleteActivityRequest>) {
  yield put(userActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteActivityResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteActivity(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onDeleteActivityResponse(response));
    navigationRef.current?.goBack();
  } else {
    yield put(userActions.onDeleteActivityFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteExpenseAsync(action: Action<DeleteExpenseRequest>) {
  yield put(userActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteExpenseResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteExpense(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onDeleteExpenseResponse(response));
  } else {
    yield put(userActions.onDeleteExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteDebtAsync(action: Action<DeleteDebtRequest>) {
  yield put(userActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteDebtResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteDebt(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onDeleteDebtResponse(response));
  } else {
    yield put(userActions.onDeleteDebtFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteParticipantAsync(
  action: Action<DeleteParticipantRequest>
) {
  yield put(userActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteParticipantResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteParticipant(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onDeleteParticipantResponse(response));
  } else {
    yield put(userActions.onDeleteParticipantFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getUserFriendsAsync(action: Action<GetUserFriendsRequest>) {
  const { userId } = action.payload;
  let response: GetUserFriendsResponse = {
    success: false,
    userId: "-1",
    friends: [],
  };

  try {
    response = yield Api.getUserFriends(userId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  if (response.success) {
    yield put(userActions.onGetUserFriendsResponse(response));
  } else {
    yield put(userActions.onGetUserFriendsFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addFriendAsync(action: Action<AddFriendRequest>) {
  yield put(userActions.onLoadingEnable());
  const { userId, friendId, friendName } = action.payload;
  let response: AddFriendResponse = {
    success: false,
    friend: {
      id: "-1",
      friendId: "-1",
      friendName: "",
    },
  };

  try {
    response = yield Api.addFriend(friendId, friendName, userId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onAddFriendResponse(response));
    ToastAndroid.show(
      `${response.friend.friendName} به دوستان شما افزوده‌شد.`,
      ToastAndroid.SHORT
    );
  } else {
    yield put(userActions.onAddFriendFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteFriendAsync(action: Action<DeleteFriendRequest>) {
  yield put(userActions.onLoadingEnable());
  const id = action.payload.id;
  let response: DeleteFriendResponse = { success: false, id: "-1" };

  try {
    response = yield Api.deleteFriend(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onDeleteFriendResponse(response));
    yield navigationRef.current?.navigate("FriendList");
  } else {
    yield put(userActions.onDeleteFriendFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addGroupAsync(action: Action<AddGroupRequest>) {
  yield put(userActions.onLoadingEnable());
  const { name, creator, members } = action.payload;
  let response: AddGroupResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addGroup(name, creator, members);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onAddGroupResponse(response));
    navigationRef.current?.goBack();
  } else {
    yield put(userActions.onAddGroupFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* updateGroupAsync(action: Action<UpdateGroupRequest>) {
  yield put(userActions.onLoadingEnable());
  const { groupId, name, creator, members } = action.payload;
  let response: UpdateGroupResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.updateGroup(groupId, name, creator, members);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());
  if (response.success) {
    yield put(userActions.onUpdateGroupResponse(response));
  } else {
    yield put(userActions.onUpdateGroupFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteGroupAsync(action: Action<DeleteGroupRequest>) {
  yield put(userActions.onLoadingEnable());
  const { groupId } = action.payload;
  let response: DeleteGroupResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteGroup(groupId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());
  if (response.success) {
    yield put(userActions.onDeleteGroupResponse(response));
    navigationRef.current?.goBack();
  } else {
    yield put(userActions.onDeleteGroupFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getGroupByIdAsync(action: Action<GetGroupByIdRequest>) {
  yield put(userActions.onLoadingEnable());
  const { groupId } = action.payload;
  let response: GetGroupByIdResponse = {
    id: "-1",
    success: false,
    group: {
      id: "-1,",
      name: "",
      creatorId: "-1",
      membersIds: [],
      activitiesIds: [],
    },
  };

  try {
    response = yield Api.getGroupById(groupId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(userActions.onLoadingDisable());
  if (response.success) {
    yield put(userActions.onGetGroupByIdResponse(response));
  } else {
    yield put(userActions.onGetGroupByIdFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getUserGroups(action: Action<GetUserGroupsRequest>) {
  yield put(userActions.onLoadingEnable());
  const { userId } = action.payload;
  let response: GetUserGroupsResponse = {
    userId: "-1",
    success: false,
    groups: [],
  };

  try {
    response = yield Api.getUserGroups(userId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());
  if (response.success) {
    yield put(userActions.onGetUserGroupsResponse(response));
  } else {
    yield put(userActions.onGetUserGroupsFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
