import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { GetUserProfileRequest } from "../../models/requests/axios/user";
import {
  AddFriendRequest,
  DeleteFriendRequest,
  EditProfileRequest,
  GetUserFriendsRequest,
  GetUserProfileRequest,
  InviteFriendsRequest,
  AddExpenseRequest,
  GetExpensesRequest,
  AddCommentRequest,
  GetExpenseRequest,
  GetCommentRequest,
  UploadImageRequest,
} from "../../models/requests/axios/user";
import {
  AddActivityRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteDebtRequest,
  DeleteParticipantRequest,
} from "../../models/requests/graphql/activity";
import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/graphql/group";
import { GetUserActivitiesRequest, UpdateUserRequest } from "../../models/requests/graphql/user";
import { Response } from "../../models/responses/axios/response";
import {
  AddFriend,
  DeleteFriend,
  GetUserFriends,
  UploadImageResponse,
  UserProfileResponse,
  AddExpense,
  GetExpense,
  AddComment,
  GetExpenses,
  GetComment,
} from "../../models/responses/axios/user";
import {
  AddActivityResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/graphql/activity";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/graphql/group";
import { GetUserActivitiesResponse, UpdateUserResponse } from "../../models/responses/graphql/user";
import { navigationRef } from "../../navigation/navigationService";
import { ExpenseAPI } from "../../services/api/axios/expenseApi";
import { UserAPI } from "../../services/api/axios/userApi";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { Response } from "../../models/responses/axios/response";
import { UserProfileResponse } from "../../models/responses/axios/user";
import * as userActions from "../actions/userActions";

// export function* EditProfileAsync(action: Action<EditProfileRequest>) {
//   // yield put(userActions.onLoadingEnable());
//   const token = action.payload.token;
//   let response: Response<UploadImageResponse> = {
//     success: false,
//     status: -1,
//   };
//   const api: UserAPI = new UserAPI(token);
//   response = yield api.changeImage("image/jpeg");

//   // yield put(userActions.onLoadingDisable());

//   if (response.success) {
//     yield put(userActions.onUploadImageResponse(response));
//     yield put(userActions.onEditProfileRequest(response));
//   } else {
//     console.log("fail");
//     yield put(userActions.onGetUserProfileFail());
//     if (response.status == 400) {
//       ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
//     } else {
//       console.log(response);
//       ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
//     }
//   }
// }

export function* UploadImageAsync(action: Action<UploadImageRequest>) {
  // yield put(userActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<UploadImageResponse> = {
    success: false,
    status: -1,
  };
  const api: UserAPI = new UserAPI(token);
  response = yield api.changeImage("image/jpeg", action.payload.data);

  // yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onUploadImageResponse(response));
    // response = yield api.uploadImage(response);
    // yield put(userActions.onEditProfileRequest(response));
  } else {
    console.log("fail");
    yield put(userActions.onGetUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      console.log(response);
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* getUserProfileAsync(action: Action<GetUserProfileRequest>) {
  yield put(userActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<UserProfileResponse> = {
    success: false,
    status: -1,
  };

  const api: UserAPI = new UserAPI(token);
  response = yield api.getUserProfile();

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserProfileResponse(response));
  } else {
    yield put(userActions.onGetUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}
