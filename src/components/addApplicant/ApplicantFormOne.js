import React from 'react';
import {View, StyleSheet, TextInput, Dimensions, ScrollView} from 'react-native';
import HeaderWithBackButton from '../headers/HeaderWithBackButton';

export default class ApplicantFormOne extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <HeaderWithBackButton navigation={this.props.navigation} headerTitle="Add Applicant" subTitle="Use PAN CARD" />
                <ScrollView style={styles.formContainer}>
                    <TextInput placeholder="first name" style={styles.input}/>
                    <TextInput placeholder="middle name" style={styles.input}/>
                    <TextInput placeholder="last name" style={styles.input}/>
                    <TextInput placeholder="date of birth" style={styles.input}/>
                    <TextInput placeholder="Gender" style={styles.input}/>
                    <TextInput placeholder="PAN" style={styles.input}/>
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