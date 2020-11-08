import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import * as loginActions from '../../store/actions/loginActions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;