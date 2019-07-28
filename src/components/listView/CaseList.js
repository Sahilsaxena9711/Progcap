import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';

export default CaseList = React.memo(props => {
    return(
        <ScrollView>
            {/* {props.caseData.map((item, key) => ( */}
                <View style={styles.listItem}>
                    <View style={styles.marginContainer}>
                        <View style={[styles.itemDetailContainer, styles.leftDetails]}>
                            <Text style={[styles.caseName, styles.mTop10]}>SHREE BALAJI ENTERPRISES</Text>
                            <Text style={[styles.typeName, styles.mTop10]}>ORIENT FANS</Text>
                        </View>
                        <View style={[styles.itemDetailContainer, styles.rightDetails]}>
                            <Text style={[styles.amount, styles.mTop10]}>7.1 Lacs</Text>
                            <Text style={[styles.time, styles.mTop10]}>14 hrs ago</Text>
                        </View>
                    </View>
                </View> 
            {/* ))} */}
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    listItem: {
        height: 80,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
    },
    marginContainer: {
        marginLeft: Dimensions.get('window').width*5/100,
        marginRight: Dimensions.get('window').width*5/100,
        flexDirection: 'row'
    },
    itemDetailContainer: {
        flexDirection: 'column',
    },
    leftDetails: {
        width: '70%'
    },
    rightDetails: {
        width: '30%'
    },
    caseName: {
        fontSize: 16,
    },typeName: {
        fontSize: 16,
        color: '#bfbebe'
    },amount: {
        fontSize: 15,
        textAlign: 'right',
        color: '#f65656'
    },time: {
        fontSize: 15,
        textAlign: 'right',
        color: '#d8d8d8'
    },
    mTop10: {
        marginTop: 10
    }
})