import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput} from 'react-native';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput style={styles.input} placeholder="username"/>
                    <TextInput style={styles.input} placeholder="password"/>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Enterprise')} style={styles.button}>
                        <Text style={styles.buttonText}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotPassText}>Forgot password?</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        width: Dimensions.get('window').width*80/100,
        marginTop: Dimensions.get('window').height*20/100,
        marginLeft: Dimensions.get('window').width*10/100
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    input: {
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 25,
        width: Dimensions.get('window').width*80/100,
        height: 40,
        padding: 8
    },
    button: {
        backgroundColor: '#8377fe',
        height: 40,
        width: Dimensions.get('window').width*80/100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        color: '#e8e8e8',
        fontWeight: 'bold'
    },
    forgotPassText: {
        textAlign: 'right',
        fontSize: 14,
        marginTop: 25,
        fontWeight: '100'
    }
})