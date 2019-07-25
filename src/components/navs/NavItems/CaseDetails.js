import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions, Platform, TouchableOpacity} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CaseDetails extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldHeader}>
                        <Text style={styles.fieldTitle}>Applicants</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddApplicant')} style={styles.addWrapper}>
                            <Icon name="plus" size={20} color="#8579fd"/>
                            <Text style={styles.addTitle}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldHeader}>
                        <Text style={styles.fieldTitle}>Addresses</Text>
                        <TouchableOpacity style={styles.addWrapper}>
                            <Icon name="plus" size={20} color="#8579fd"/>
                            <Text style={styles.addTitle}>Add Operating Address</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.fieldContainer}>
                    <View style={styles.fieldHeader}>
                        <Text style={styles.fieldTitle}>Bank Accounts</Text>
                        <TouchableOpacity style={styles.addWrapper}>
                            <Icon name="plus" size={20} color="#8579fd"/>
                            <Text style={styles.addTitle}>Add Account</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 200
    },
    fieldContainer: {
        flexDirection: 'column',
        width: Dimensions.get('window').width*90/100,
        marginLeft: Dimensions.get('window').width*5/100,
        height: 'auto',
        marginTop: 30
    },
    fieldHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fieldTitle: {
        fontSize: 16,
        fontWeight: Platform.OS === 'android' ? 'bold' : '500'
    },
    addWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addTitle: {
        color: '#8579fd',
        fontWeight: '300'
    },
    input: {
        height: 70,
        marginTop: 12,
        backgroundColor: '#ffffff',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 2
    }
})
