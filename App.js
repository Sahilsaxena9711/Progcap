import React from 'react';
import {createAppContainer, createBottomTabNavigator, createSwitchNavigator, createStackNavigator, SafeAreaView} from 'react-navigation';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from 'react-native';
import LoginScreen from './src/container/auth/LoginScreen';
import EnterpriseScreen from './src/container/app/EnterpriseScreen';
import AddApplicantScreen from './src/container/app/AddApplicantScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
},{
  headerMode: 'none'
});

const AppStack = createStackNavigator({
  Enterprise: EnterpriseScreen,
  AddApplicant: AddApplicantScreen
},{
  headerMode: 'none'
})

const Routes = createAppContainer(createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}))

export default App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
          <Routes/>
      </SafeAreaView>
    </React.Fragment>
  )
} 