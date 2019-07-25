import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderWithBackButton from '../../components/headers/HeaderWithBackButton';
import Pagination from '../../components/pagination/Pagination';

export default class AddApplicantScreen extends React.Component{
    render(){
        return(
            <View>
                <HeaderWithBackButton headerTitle="Add Applicant" subTitle="Use PAN CARD" />
                <View style={styles.container}>
                    <ScrollView style={styles.scroll}>
                        <Text>erferfer</Text>
                    </ScrollView>
                </View>
                <Pagination />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    scroll: {
        flex: 1,
        height: 300
    }
})