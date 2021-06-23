import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Pesquisa = ({ filtro, setFiltro, addContato }) =>
{
    return (
        <View
            style={ styles.pesquisa }
        >
            <View
                style={ styles.textInputView }
            >
                <TextInput
                    style={ styles.textInput }
                    onChangeText={ setFiltro }
                    value={ filtro }

                    placeholder="Pesquisar"
                />
            </View>
            <TouchableOpacity
                style={ styles.buttonAdd }
                onPress={ addContato }
            >
                <Text
                    style={ styles.textButtonAdd }
                >
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    pesquisa: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 5
    },
    textInputView: {
        flexBasis: 200,
        flexGrow: 1,
        flexShrink: 1
    },
    textInput: {
        height: 50,
        marginEnd: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        borderBottomWidth: 1
    },
    buttonAdd: {
        flexBasis: 50,
        flexGrow: 0,
        flexShrink: 1,
        justifyContent: 'center',
        height: 50,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: "#e6efff",
        borderColor: "#96bdff",
    },
    textButtonAdd: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center'
    }
});

export default Pesquisa;