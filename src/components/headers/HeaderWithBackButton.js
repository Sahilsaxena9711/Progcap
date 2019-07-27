import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default HeaderWithBackButton = props => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.titleBack}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Enterprise')}>
                    <Icon name="arrow-left" size={24} color='black' />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    {props.headerTitle}
                </Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('AddDocument')}>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
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
    },
    headerText: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: Platform.OS === 'android' ? 'bold' : '500'
    },
    titleBack:{
        flexDirection: 'row'
    },
    subTitle: {
        color: '#8579fd',
        fontSize: 12,
        fontWeight: '500'
    }

})