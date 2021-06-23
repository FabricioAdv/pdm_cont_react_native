import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';

const Cam = ({ style, cameraType, reff, takePicture, camType, flMode, flashButton }) =>
{
    return (
        <Camera
            style={ [style, styles.camera] }
            type={ cameraType }
            ref={ reff }
            flashMode={ flMode }
        >
            <View
                style={ styles.viewCam }
            >
                <View
                    style={ styles.viewButton }
                >
                    <TouchableOpacity
                        onPress={ camType }
                    >
                        <Image
                            style={ [styles.imagem] }
                            source={ require('../../../Images/camera_arrow.png') }
                        />
                        <Text
                            style={ styles.texto }
                        >
                            { cameraType === Camera.Constants.Type.back ? 'Tras.' : 'Front.' }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ takePicture }
                        style={ styles.button }
                    />
                    <TouchableOpacity
                        onPress={ flashButton }
                    >
                        <Image
                            style={ [styles.imagem] }
                            source={ require('../../../Images/lightning.png') }
                        />
                        <Text
                            style={ styles.texto }
                        >
                            { flMode === Camera.Constants.FlashMode.on ? 'Lig.' : 'Desl.' }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Camera>
    );
};

const styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    viewCam: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    button: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    imagem: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    texto: {
        color: 'white',
        alignSelf: 'center'
    }
});

export default Cam;