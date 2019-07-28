import React from 'react';
import {createAppContainer, createBottomTabNavigator, createSwitchNavigator, createStackNavigator, SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from 'react-native';
import LoginScreen from './src/container/auth/LoginScreen';
import EnterpriseScreen from './src/container/app/EnterpriseScreen';
import AddApplicantScreen from './src/container/app/AddApplicantScreen';
import AddDocument from './src/components/addDocument/AddDocument';
import CasesScreen from './src/container/tabs/CasesScreen';
import RoutingScreen from './src/container/tabs/RoutingScreen';
import ContactsScreen from './src/container/tabs/ContactsScreen';
import UploadsScreen from './src/container/tabs/UploadsScreen';
import AccountScreen from './src/container/tabs/AccountScreen';
import UpScreen from './src/container/tabs/UpScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
},{
  headerMode: 'none',
});

const CasesStack = createStackNavigator({
  Cases: CasesScreen,
  Enterprise: EnterpriseScreen,
  AddApplicant: AddApplicantScreen,
  AddDocument: AddDocument
},{
  headerMode: 'none'
})

const AppStack = createBottomTabNavigator({
  Cases: CasesStack,
  Routing: {
    screen: RoutingScreen,
    navigationOptions: {
      title: "Routing",
    }
  },
  Contacts: {
    screen: ContactsScreen,
    navigationOptions: {
      title: "Contacts",
    }
  },
  Uploads: {
    screen: UploadsScreen,
    navigationOptions: {
      title: "Uploads",
    }
  },
  Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: "Account",
      }
  },
  Up: {
    screen: UpScreen,
    navigationOptions: {
      title: "",
    }
  },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Cases') {
            iconName = `file-document-box-outline`;
            title = "Cases"
          } else if (routeName === 'Routing') {
            iconName = `map-marker-outline`;
          } else if (routeName === 'Contacts') {
            iconName = `phone`;
          } else if (routeName === 'Uploads') {
            iconName = `upload-outline`;
          } else if (routeName === 'Account') {
            iconName = `account-outline`;
          } else if (routeName === 'Up') {
            iconName = `chevron-up`;
          }
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#8377fe',
        inactiveTintColor: '#000000',
        safeAreaInset: { bottom: 'never', top: 'never' }
    },
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