import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default Pagination = props => {
    return(
        <View style={styles.paginationContainer}>
            <TouchableOpacity onPress={() => props.onPageChange('back')}>
                {props.currentPage !== 1 && <Text style={styles.buttonText}>Back</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onPageChange('next')}>
                {props.max !== props.currentPage && <Text style={styles.buttonText}>Next</Text>}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    paginationContainer: {
        width: '90%',
        height: 30,
        bottom: 0,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText:{
        color: '#8579fd',
        fontSize: 18,
    }
})