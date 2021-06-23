import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import Button from '../../../Components/Button';

const CameraPreview = ({ style, photo, retakePicture, savePhoto }) =>
{
    return (
        <View
            style={ [style, styles.container] }
        >
            <ImageBackground
                source={ { uri: photo && photo.uri } }
                style={ styles.imagem }
            >
                <View
                    style={ styles.viewGeral }
                >
                    <View
                        style={ styles.viewButtons }
                    >
                        <Button
                            style={ styles.button }
                            label='Tirar foto'
                            onClick={ retakePicture }
                        />
                        <Button
                            style={ styles.button }
                            label='Concluído'
                            onClick={ savePhoto }
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
    },
    imagem: {
        flex: 1
    },
    viewGeral: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        justifyContent: 'flex-end'
    },
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%',
        alignSelf: 'center'
    }
});

export default CameraPreview;