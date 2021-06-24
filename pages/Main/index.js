import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Lista from './Lista'
import Pesquisa from './Pesquisa';

const Main = () =>
{
    const navigation = useNavigation();

    const [filtro, setFiltro] = useState('');

    const onAddContato = useCallback(() =>
    {
        navigation.navigate('Add / Edit contatos');
    }, []);

    return (
        <View
            style={ styles.container }
        >
            <Pesquisa
                filtro={ filtro }
                setFiltro={ setFiltro }
                addContato={ onAddContato }
            />
            <Lista
                filtro={ filtro }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default Main;