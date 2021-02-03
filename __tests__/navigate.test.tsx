/**
 * @format
 */

import "react-native";
import React from "react";
import { Provider } from 'react-redux'

import {render} from "react-native-testing-library"
import { act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import MockedNavigator from "../__mocks__/mockedNavigator"
import GroupScreen from "../app/screens/Group/index"
import GroupListScreen from "../app/screens/GroupList/index"
import FriendListScreen from "../app/screens/FriendList/index"
import ActivityListScreen from "../app/screens/ActivityList/index"


let groupsData: { id: string, name: string }[] = [
];

for(let i =1; i<= 500; i++)
{
    groupsData.push({"id":i.toString(), "name":"test"+i.toString()})
}

const initialState = { id: 1};
const mockStore = configureStore();

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe("Navigation", () => {
    it('should render correctly', async () => {
        const {toJSON} = render(
            <Provider store={mockStore(initialState)}>
          <MockedNavigator component={GroupScreen}
          params={{id:1, groupName:"test"}} />
          </Provider>
        );
        await act(async () => {expect(toJSON()).toMatchSnapshot(); })
      });

      it('should render correctly', async () => {
        const {toJSON} = render(
            <Provider store={mockStore(initialState)}>
          <MockedNavigator component={GroupListScreen} />
          </Provider>
        );
        await act(async () => {expect(toJSON()).toMatchSnapshot(); })
      });

      it('should render correctly', async () => {
        const {toJSON} = render(
            <Provider store={mockStore(initialState)}>
          <MockedNavigator component={FriendListScreen} />
          </Provider>
        );
        await act(async () => {expect(toJSON()).toMatchSnapshot(); })
      });

      it('should render correctly', async () => {
        const {toJSON} = render(
            <Provider store={mockStore(initialState)}>
          <MockedNavigator component={ActivityListScreen} />
          </Provider>
        );
        await act(async () => {expect(toJSON()).toMatchSnapshot(); })
      });
    });