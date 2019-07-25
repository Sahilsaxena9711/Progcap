import React from 'react';
import {View, StyleSheet, TextInput, Dimensions, ScrollView} from 'react-native';
import HeaderWithBackButton from '../headers/HeaderWithBackButton';

export default class AccountForm extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <HeaderWithBackButton navigation={this.props.navigation} headerTitle="Add Bank Account" subTitle="Use Bank Statement" />
                <ScrollView style={styles.formContainer}>
                    <TextInput placeholder="Account Of" style={styles.input}/>
                    <TextInput placeholder="Account Type" style={styles.input}/>
                    <TextInput placeholder="ccount Holder Name" style={styles.input}/>
                    <TextInput placeholder="A/C No" style={styles.input}/>
                    <TextInput placeholder="IFSC Code" style={styles.input}/>
                    <TextInput placeholder="Bank Branch Name" style={styles.input}/>
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
    }
})