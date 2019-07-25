import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default HeaderWithClose = (props) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                SHREE BALAJI ENTERPRISES
            </Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="close" size={30} color='black' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e8e8e8'
    },
    headerText: {
        fontSize: 18,
        fontWeight: Platform.OS === 'android' ? 'bold' : '500'
    }
})