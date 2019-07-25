import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

export default NavBar = props => {
    return(
        <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => props.changeNav('caseDetails')} style={[styles.navItem, props.activeNav === 'caseDetails' ? styles.activeNavItem : null]}>
                <Text style={[styles.navText, props.activeNav === 'caseDetails' ? styles.activeNavText : null]}>Case Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.changeNav('documents')} style={[styles.navItem, props.activeNav === 'documents' ? styles.activeNavItem : null]}>
                <Text style={[styles.navText, props.activeNav === 'documents' ? styles.activeNavText : null]}>Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.changeNav('notes')} style={[styles.navItem, props.activeNav === 'notes' ? styles.activeNavItem : null]}>
                <Text style={[styles.navText, props.activeNav === 'notes' ? styles.activeNavText : null]}>Notes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        padding: 10,
    },
    navItem: {
        width: 'auto',
        marginLeft: 10,
    },
    activeNavItem:{
        borderBottomWidth: 2.2,
        paddingBottom: 4,
        borderBottomColor: '#8579fd'
    },
    navText: {
        fontSize: 14,
        fontWeight: '300'
    },
    activeNavText: {
        color: '#8579fd',
        fontWeight: Platform.OS === 'android' ? 'bold' : '500'
    }
})