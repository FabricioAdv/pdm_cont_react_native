import React, { useCallback, useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import ContatoContext from '../../../services/ContatoContext'
import ItemLista from '../ItemLista';

const Lista = ({ filtro = '' }) =>
{
    const navigation = useNavigation();

    const { read } = useContext(ContatoContext);

    const onUpdade = useCallback((id) =>
    {
        navigation.navigate('Add / Edit contatos', { id: id });
    }, []);

    const contatosFiltrados = read().filter(item => item.nome.toLowerCase().indexOf(filtro.toLowerCase()) >= 0);

    return (
        <FlatList
            style={ styles.container }
            data={ contatosFiltrados }
            keyExtractor={ item => item.id }
            ItemSeparatorComponent={ () =>
            {
                return (<View style={ styles.separador }></View>);
            } }
            renderItem={ ({ item }) =>
            {
                return (
                    <ItemLista
                        id={ item.id }
                        nome={ item.nome }
                        descricao={ item.descricao }
                        foto={ item.foto }
                        onUpdate={ onUpdade }
                    />
                )
            } }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    separador: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 5
    }
});

export default Lista;