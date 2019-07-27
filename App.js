import React from 'react';
import {createAppContainer, createBottomTabNavigator, createSwitchNavigator, createStackNavigator, SafeAreaView} from 'react-navigation';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from 'react-native';
import LoginScreen from './src/container/auth/LoginScreen';
import EnterpriseScreen from './src/container/app/EnterpriseScreen';
import AddApplicantScreen from './src/container/app/AddApplicantScreen';
import AddDocument from './src/components/addDocument/AddDocument';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
},{
  headerMode: 'none',
});

const AppStack = createStackNavigator({
  Enterprise: EnterpriseScreen,
  AddApplicant: AddApplicantScreen,
  AddDocument: AddDocument
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
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Routes/>
      </SafeAreaView>
    </React.Fragment>
  )
} 