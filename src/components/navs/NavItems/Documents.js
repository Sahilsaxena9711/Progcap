import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions, Platform} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Documents extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.line}>
                    <Text style={styles.headText}>KYC Company</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.listText}>PAN Card</Text>
                    <Icon style={styles.listIcon} name="arrow-right" size={24} color="#8579fd" />
                </View>
                <View  style={styles.listItem}>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.lightText}>GST Certificate</Text>
                        <Text style={styles.listText}>gst_certificate_shree_balaji.pdf</Text>
                    </View>
                    <Icon style={styles.listIcon} name="arrow-up" size={24} color="#8579fd" />
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
    listItem: {
        borderBottomWidth: 0.8,
        flexDirection: 'row',
        borderBottomColor: '#e8e8e8',
        height: 85,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listText: {
        marginLeft: 20,
        fontWeight: '300',
        fontSize: 15
    },
    listIcon: {
        marginRight: 20,
    },
    listTextContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    lightText: {
        color: '#ebebeb',
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: '300',
        fontSize: 15
    },
    line: {
        borderTopColor: '#ededed',
        borderTopWidth: 0.8,
        width: '88%',
        flexGrow: 1,
        marginLeft: 20,
        marginTop: 20
    },
    headText:{
        position: 'absolute',
        top: -8,
        width: 'auto',
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginLeft: 50,
        color: '#ebebeb',
        fontWeight: '400',
        fontSize: 12
    }
    
})
