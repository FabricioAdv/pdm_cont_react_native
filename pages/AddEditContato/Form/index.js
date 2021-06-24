import React, { useCallback } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Button from '../../../Components/Button';
import Foto from '../Foto';

const Form = ({ id, setNomeAtual, nomeAtual, setDescricaoAtual, descricaoAtual, startCamera, fotoAtual, onSave, onDelete }) =>
{
    const onClickDelete = useCallback(() =>
    {
        onDelete?.(id);
    }, [id])

    return (
        <View
            style={ styles.container }
        >
            <TextInput
                style={ styles.textInput }
                onChangeText={ setNomeAtual }
                value={ nomeAtual }

                placeholder="Nome"
            />
            <TextInput
                style={ styles.textArea }
                onChangeText={ setDescricaoAtual }
                value={ descricaoAtual }

                placeholder="Descricao"
                multiline={ true }
                numberOfLines={ 4 }
            />

            <View
                style={ styles.divisor }
            />

            <Button
                style={ styles.button }
                label='Tirar foto'
                type='blue'
                onClick={ startCamera }
            />
            <Foto
                style={ styles.imagem }
                url={ fotoAtual }
            />

            <View
                style={ styles.divisor }
            />

            <View
                style={ styles.buttons }
            >
                <Button
                    style={ styles.button }
                    label='Excluir'
                    type='red'

                    onClick={ onClickDelete }
                />
                <Button
                    style={ styles.button }
                    label='Salvar'
                    type='blue'

                    onClick={ onSave }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
        justifyContent: 'flex-start',
        textAlign: 'center'
    },
    textInput: {
        width: 'auto',
        height: 40,
        margin: 5,
        marginBottom: 20,
        borderBottomWidth: 1,
        alignSelf: 'stretch'
    },
    textArea: {
        width: 'auto',
        padding: 5,
        borderWidth: 1,
        alignSelf: 'stretch',
        borderRadius: 5
    },
    divisor: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 15
    },
    imagem: {
        marginTop: 10
    },
    button: {
        width: '45%',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    }
});

export default Form;