import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

export default NavBar = React.memo(props => {
    return(
        <View style={styles.navContainer}>
            {props.navItems.map((item, key) => (
                <TouchableOpacity key={key} onPress={() => props.changeNav(item.routeName)} style={[styles.navItem, props.activeNav === item.routeName ? styles.activeNavItem : null]}>
                    <Text style={[styles.navText, props.activeNav === item.routeName ? styles.activeNavText : null]}>{item.displayName}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
})

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