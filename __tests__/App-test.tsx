/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";
import { act } from 'react-test-renderer';

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

export async function wait(ms = 0) {
  return await act(async () => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
}

jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
it("renders correctly", async () => {
  const result = renderer.create(<App />);
  await act(async () => { expect(result).toMatchSnapshot(); })
});
