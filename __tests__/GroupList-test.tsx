/**
 * @format
 */

import "react-native";
import React from "react";

import { Text, View, Image, FlatList, RefreshControl, ListRenderItem } from "react-native";
import * as Animatable from "react-native-animatable";

import GroupItem from "../app/components/GroupItem/index";
import {randomNumber} from "../app/lib/randomNumGen"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

let groupsData: { id: string, name: string }[] = [
];
for(let i =1; i<= 500; i++)
{
  groupsData.push({"id":i.toString(), "name":"test"+i.toString()})
}

const renderGroupItem: any = ({ item }) => (
    <GroupItem
    onPressGroupItem={()=>{}}
      Name={item.name}
      ImageUrl={require("../app/assets/images/friend-image.jpg")}
    />
  );

const list = <Animatable.View animation="slideInUp" duration={600}>
<FlatList
  data={groupsData}
  renderItem={renderGroupItem}
  showsVerticalScrollIndicator={false}
  initialNumToRender={500}
/>
</Animatable.View>

describe("FlatList", () => {
  let f = renderer.create(list);
  let r = f.root;
    it("renders", () => {
        expect(renderer.create(list)).toMatchSnapshot();
    });

    it('should render all items in data list', () => {
        let groupCount = r.findAllByType(GroupItem).length;
        expect(groupCount).toEqual(groupsData.length);
    });

    it('should render in the right order', () => {
      let testIndex = randomNumber(0, groupsData.length);
      let testName = r.findAllByType(GroupItem)[testIndex].props.Name;
      expect(testName).toEqual("test"+(testIndex+1).toString())
    })
});