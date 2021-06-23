import React, { useState, useContext, useMemo, useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

import { useNavigation } from '@react-navigation/native';

import ContatoContext from '../../services/ContatoContext';
import CameraPreview from './Camera/CameraPreview';
import Form from './Form';
import Cam from './Camera';

const ContatoForm = ({ id, nome = '', descricao = '', foto = '' }) =>
{
    const [nomeAtual, setNomeAtual] = useState(nome);
    const [descricaoAtual, setDescricaoAtual] = useState(descricao);
    const [fotoAtual, setFotoAtual] = useState(foto);

    const [startCamera, setStartCamera] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

    const navigation = useNavigation();

    const { save, exclude } = useContext(ContatoContext);

    const ref = useRef(null);

    const onSave = useCallback(() => 
    {
        const contato = {
            id: id ?? Math.random().toString(),
            nome: nomeAtual,
            descricao: descricaoAtual,
            foto: fotoAtual
        };

        save(contato);

        navigation.goBack();
    }, [save, nomeAtual, descricaoAtual, fotoAtual]);

    const onDelete = useCallback((contId) => 
    {
        console.log(contId);

        exclude(contId);

        navigation.goBack();
    }, [exclude]);

    const startCam = async () =>
    {
        const { status } = await Camera.requestPermissionsAsync();

        if (status === 'granted')
        {
            setStartCamera(true);
        }
        else
        {
            alert('Acesso não permitido')
        }
    }

    const takePicture = async () =>
    {
        const photo = await ref.current.takePictureAsync();

        setPreviewVisible(true);
        setCapturedImage(photo);
    }

    const retakePicture = () =>
    {
        setCapturedImage(null);
        setPreviewVisible(false);

        startCam()
    }

    const savePhoto = () =>
    {
        setCapturedImage(null);
        setPreviewVisible(false);

        setFotoAtual(capturedImage.uri);

        setStartCamera(false);
    }

    const handleFlashMode = () =>
    {
        return (flashMode == Camera.Constants.FlashMode.off) ? setFlashMode(Camera.Constants.FlashMode.on) : setFlashMode(Camera.Constants.FlashMode.off);
    }

    const camType = () =>
    {
        return (cameraType == Camera.Constants.Type.back) ? setCameraType(Camera.Constants.Type.front) : setCameraType(Camera.Constants.Type.back);
    }

    if (startCamera)
    {
        if (previewVisible && capturedImage)
        {
            return (
                <CameraPreview
                    photo={ capturedImage }
                    savePhoto={ savePhoto }
                    retakePicture={ retakePicture }
                />
            );
        }
        else
        {
            return (
                <Cam
                    cameraType={ cameraType }
                    reff={ ref }
                    takePicture={ takePicture }
                    camType={ camType }
                    flashButton={ handleFlashMode }
                    flMode={ flashMode }
                />
            );
        }
    }
    else
    {
        return (
            <Form
                id={ id }
                nomeAtual={ nomeAtual }
                setNomeAtual={ setNomeAtual }
                descricaoAtual={ descricaoAtual }
                setDescricaoAtual={ setDescricaoAtual }
                startCamera={ startCam }
                fotoAtual={ fotoAtual }
                onSave={ onSave }
                onDelete={ onDelete }
            />
        );
    }
};

const AddEditContato = ({ route }) =>
{
    const { readById } = useContext(ContatoContext);

    const contato = useMemo(() =>
    {
        return readById(route.params?.id ?? '') ?? {};
    }, [route.params?.id]);

    return <ContatoForm { ...contato } />;
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
    }
});

export default AddEditContato;