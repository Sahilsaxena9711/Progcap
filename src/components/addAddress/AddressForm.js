import React from 'react';
import {View, StyleSheet, TextInput, Dimensions, ScrollView, Switch, Text, CheckBox} from 'react-native';
import HeaderWithBackButton from '../headers/HeaderWithBackButton';

export default class AddressForm extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <HeaderWithBackButton navigation={this.props.navigation} headerTitle="Add Operating Address" subTitle="Use Aadhar Scan" />
                <ScrollView style={styles.formContainer}>
                    <View style={styles.checkContainer}>
                        <CheckBox style={styles.check} />
                        <Text style={styles.checkText}>Same as Registered Address</Text>
                    </View>
                    <TextInput placeholder="Address Type" style={styles.input}/>
                    <TextInput placeholder="Residing Since" style={styles.input}/>
                    <TextInput placeholder="Ownership Status" style={styles.input}/>
                    <TextInput placeholder="Address Line 1" style={styles.input}/>
                    <TextInput placeholder="City" style={styles.input}/>
                    <TextInput placeholder="State" style={styles.input}/>
                    <TextInput placeholder="Pincode" style={styles.input}/>
                    <View style={styles.toggleContainer}>
                        <Text>Is Communication Address?</Text>
                        <Switch style={styles.toggle} thumbColor="#d8d8d8"/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex: 1,
    },
    input: {
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 15,
        width: Dimensions.get('window').width*80/100,
        height: 40,
        padding: 8,
        marginLeft: Dimensions.get('window').width*10/100
    },
    toggleContainer: {
        marginTop: 15,
        width: Dimensions.get('window').width*80/100,
        marginLeft: Dimensions.get('window').width*10/100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkContainer:{
        marginTop: 15,
        width: Dimensions.get('window').width*80/100,
        marginLeft: Dimensions.get('window').width*10/100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    checkText: {
        color: '#8579fd',
        marginLeft: 15,
        fontSize: 12,
    },
    check: {
        width: 20,
        height: 20,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 2
    }
})