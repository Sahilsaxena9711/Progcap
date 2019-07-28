import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Text, ScrollView} from 'react-native';
import NavBar from '../../components/navs/NavBar';
import CaseList from '../../components/listView/CaseList';

export default class CasesScreen extends React.Component {
  state = {
    activeNav: 'caseCollate',
    navItems: [
        {routeName: 'caseCollate', displayName: 'Case Collate'},
        {routeName: 'caseCompliance', displayName: 'Case Compliance'}
    ]
}

changeNav = (name) => {
    this.setState({
        activeNav: name
    })
}
  render() {
    const { activeNav, navItems } = this.state;
    return (
        <View style={styles.container}>
          <HeaderWithClose title="INBOX" navigation={this.props.navigation} />
          <NavBar changeNav={this.changeNav} navItems={navItems} activeNav={activeNav} />
          <View style={styles.gutterSpace} />
          <View style={styles.line}>
              <TextInput placeholder="Search" style={styles.searchBar} />
              {/* <Text style={styles.headText}>KYC Company</Text> */}
              <View style={styles.listContainer}>
                <CaseList/>
              </View>
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gutterSpace:{
    height: 30,
    width: '100%',
    backgroundColor: '#e8e8e8'
  },
  line: {
    flexGrow: 1,
  },
  searchBar:{
      position: 'absolute',
      top: -25,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1,
      height: 50,
      width: Dimensions.get('window').width*90/100,
      paddingHorizontal: 20,
      backgroundColor: 'white',
      marginLeft: Dimensions.get('window').width*5/100,
      color: '#ebebeb',
      fontWeight: '400',
      fontSize: 12,
      
  },
  listContainer: {
    marginTop: 40,
    flex: 1
  }
})