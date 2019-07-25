import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderWithBackButton from '../../components/headers/HeaderWithBackButton';
import Pagination from '../../components/pagination/Pagination';
import ApplicantFormOne from '../../components/addApplicant/ApplicantFormOne';
import ApplicantFormTwo from '../../components/addApplicant/ApplicantFormTwo';
import AddressForm from '../../components/addAddress/AddressForm';
import AccountForm from '../../components/addAccount/accountForm';

export default class AddApplicantScreen extends React.Component{
    state = {
        currentPage: this.props.navigation.state.params.currentPage !== undefined ? this.props.navigation.state.params.currentPage : 1
    }

    onPageChange = (type) => {
        if(type === 'next'){
            this.setState({
                currentPage: this.state.currentPage+1
            });
        }else{
            this.setState({
                currentPage: this.state.currentPage-1
            });
        }
    }

    render(){
        const {currentPage} = this.state;
        return(
            <View style={styles.container}>
                    {currentPage === 1 && <ApplicantFormOne navigation={this.props.navigation}/>}
                    {currentPage === 2 && <ApplicantFormTwo navigation={this.props.navigation}/>}
                    {currentPage === 3 && <AddressForm navigation={this.props.navigation}/>}
                    {currentPage === 4 && <AccountForm navigation={this.props.navigation}/>}
                <Pagination max={4} onPageChange={this.onPageChange} currentPage={currentPage}/>
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
    }
})