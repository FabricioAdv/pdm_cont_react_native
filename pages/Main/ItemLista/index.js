import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Foto from './FotoLista';

const ItemLista = ({ id, nome, descricao, foto, onUpdate }) =>
{
    const onPressUpdate = useCallback(() =>
    {
        onUpdate?.(id);
    }, [id]);

    return (
        <TouchableOpacity
            style={ styles.container }
            onPress={ onPressUpdate }
        >
            <View
                style={ styles.imagem }
            >
                <Foto
                    url={ foto }
                />
            </View>
            <View
                style={ styles.dados }
            >
                <Text
                    style={ styles.nome }
                >
                    { nome }
                </Text>
                <Text
                    style={ styles.descricao }
                >
                    { descricao }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        padding: 5,
        width: '100%',
        borderColor: 'gray'
    },
    imagem: {
        paddingEnd: 10,
        marginEnd: 10,
        borderEndWidth: 1,
        borderEndColor: 'gray'
    },
    dados: {
        flexDirection: "column",
        flexGrow: 1,
    },
    nome: {
        flexGrow: 1,
        fontSize: 20,
        marginVertical: 10
    },
    descricao: {
        flexGrow: 1
    }
});

export default ItemLista;