import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderWithClose from '../../components/headers/HeaderWithClose';
import NavBar from '../../components/navs/NavBar';
import CaseDetails from '../../components/navs/NavItems/CaseDetails';
import Documents from '../../components/navs/NavItems/Documents';

export default class EnterpriseScreen extends React.Component{
    state = {
        activeNav: 'caseDetails',
        navItems: [
            {routeName: 'caseDetails', displayName: 'Case Details'},
            {routeName: 'documents', displayName: 'Documents'},
            {routeName: 'notes', displayName: 'Notes'}
        ]
    }

    changeNav = (name) => {
        this.setState({
            activeNav: name
        })
    }

    render(){
        const { activeNav, navItems } = this.state;
        return(
            <View style={styles.container}>
                <HeaderWithClose title="SHREE BALAJI ENTERPRISES" navigation={this.props.navigation} />
                <ScrollView stickyHeaderIndices={[1]}>
                    <View style={styles.gutterSpace}/>
                    <NavBar changeNav={this.changeNav} navItems={navItems} activeNav={activeNav}  />
                     {activeNav === 'caseDetails' && <CaseDetails navigation={this.props.navigation} />}
                    {activeNav === 'documents' && <Documents />}
                     {/* {activeNav === 'notes' && <Notes />} */}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },
    gutterSpace: {
        paddingTop: 60,
        width: '100%',
        height: 50,
        backgroundColor: '#e8e8e8'
    },
    box: {
        backgroundColor: 'red',
        height: 200,
        width: '100%'
    }
})