import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Modal, Alert, Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from 'react-native-actionsheet'
import HeaderWithBackButton from '../headers/HeaderWithBackButton';
import { SafeAreaView } from 'react-navigation';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class AddDocument extends React.Component {
    state = {
        imagePath: '',
        upload: false,
        progress: 0,
        success: false,
    }

    async componentDidMount() {
        this.ActionSheet.show();
    }

    openSelection = (type) => {
        switch (type) {
            case 0:
                ImagePicker.openCamera({
                    width: 350,
                    height: 250,
                    cropping: true,
                }).then(image => {
                    console.log(image);
                    if(Platform.OS === 'android'){
                        this.setState({
                            imagePath: image.path
                        })
                    }else{
                        this.setState({
                            imagePath: image.sourceURL
                        })
                    }
                }).catch((e) => {
                    console.log(e)
                });
                break;
            case 1:
                ImagePicker.openPicker({
                    width: 350,
                    height: 250,
                    cropping: true,
                }).then(image => {
                    console.log(image);
                    if(Platform.OS === 'android'){
                        this.setState({
                            imagePath: image.path
                        })
                    }else{
                        this.setState({
                            imagePath: image.sourceURL
                        })
                    }
                }).catch((e) => {
                    console.log(e)
                });
                break;
            default:
                break;
        }
    }

    upload = () => {
        this.setState({
            upload: true
        });
        const uploadInterval = setInterval(() => {
            if(this.state.progress > 100){
                clearInterval(uploadInterval);
            }else{
                this.setState({
                    progress: this.state.progress + 10
                })
            }
        }, 1000)
    }

    render() {
        const { imagePath, upload, progress, success } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <HeaderWithBackButton navigation={this.props.navigation} headerTitle="PAN Card" />
                {imagePath !== '' ? <View style={styles.container}>
                    <Text style={styles.titleText}>Preview</Text>
                    <Image
                        source={{ uri: imagePath }}
                        style={styles.imageContainer}
                    />
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity onPress={() => this.ActionSheet.show()} style={styles.button}>
                            <Text style={styles.buttonText}>Retry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.upload} style={styles.button}>
                            <Text style={styles.buttonText}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                </View> : 
                success ? <View>
                    <Text>Success!!</Text>
                </View>
                    : null}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={upload}
                    onRequestClose={() => { this.setState({upload: false, progress: 0, success: false})}}>
                    <SafeAreaView style={{ flex: 1 }}>
                        {progress > 100 ? <View style={styles.detailContainer}>
                            <Text style={styles.detailsText}>Name: XXXX XXXXX XXXXX</Text>
                            <Text style={styles.detailsText}>DOB: XX-XX-XXXXX</Text>
                            <Text style={styles.detailsText}>PAN: XXXXXXXXXXXXXX</Text>
                            <View style={styles.detailActions}>
                                <TouchableOpacity onPress={() => this.setState({progress: 0, upload: false, imagePath: '', success: true })} style={styles.detailsButtonAccept}>
                                    <Text style={styles.detailsButtonAcceptText}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({upload: false, progress: 0, success: false})} style={styles.detailsButton}>
                                    <Text style={styles.detailsCancel}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            : <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>Processing Image for Text Extraction</Text>
                            <ProgressBarAnimated
                                width={250}
                                value={progress}
                                backgroundColorOnComplete="#6CC644"
                            />
                            <TouchableOpacity onPress={() => this.setState({upload: false, progress: 0, success: false})} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>}
                    </SafeAreaView>
                </Modal>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Select Image from?'}
                    options={['Camera', 'Gallery', 'Cancel']}
                    cancelButtonIndex={2}
                    onPress={(index) => { this.openSelection(index) }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
        width: Dimensions.get('window').width * 80 / 100,
        marginLeft: Dimensions.get('window').width * 10 / 100,
        justifyContent: 'flex-start'
    },
    imageContainer: {
        width: '100%',
        marginTop: 30,
        height: 200,
        borderColor: 'lightgray',
        borderRadius: 0.5
    },
    optionsContainer: {
        width: '100%',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%',
        backgroundColor: '#8377fe',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        color: '#e8e8e8',
        fontWeight: 'bold'
    },
    titleText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginTop: 50
    },
    modalButtonText: {
        color: '#8579fd',
        fontSize: 14,
        textAlign: 'center'
    },
    detailsCancel: {
        color: '#0091ff',
        fontSize: 14,
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
    },
    detailContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        width: Dimensions.get('window').width*60/100,
        marginLeft: Dimensions.get('window').width*20/100
    },
    detailsText: {
        marginLeft: 0,
        fontSize: 16,
        marginBottom: 15,
    },
    detailsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginTop: 15
    },
    detailsButtonAccept: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width*30/100,
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#0091ff',
        marginTop: 15
    },
    detailsButtonAcceptText: {
        color: '#ffffff'
    },
    detailActions: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})