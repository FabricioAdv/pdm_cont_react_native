import React, { useState, useEffect } from 'react';
import { Keyboard, Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../Components/Button'

const Login = () =>
{
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [loginInvalido, setLoginInvalido] = useState(false);
    const [imagem, setImagem] = useState({ x: 300, y: 300 });

    const navigation = useNavigation();

    useEffect(() =>
    {
        var keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        var keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    }, []);

    function keyboardDidShow ()
    {
        setImagem({ x: 100, y: 100 });
    }

    function keyboardDidHide ()
    {
        setImagem({ x: 300, y: 300 });
    }

    const validarAcesso = () =>
    {
        if (usuario.toLocaleLowerCase() === 'admin' && senha.toLocaleLowerCase() === 'admin')
        {
            setLoginInvalido(false);
            setUsuario("");
            setSenha("");
            navigation.navigate('Main')
        }
        else
        {
            setLoginInvalido(true);
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={ Keyboard.dismiss }
        >
            <View
                style={ styles.container }
            >
                <Image
                    style={ [styles.imageApp, { width: imagem.x, height: imagem.y }] }
                    source={ require('../../Images/chaves_desenho.png') }
                />

                <Text
                    style={ styles.tituloApp }
                >
                    Chaves móvel
                </Text>

                <View
                    style={ styles.divisor }
                />

                { loginInvalido ?
                    <Text
                        style={ styles.loginInvalido }
                    >
                        Usuário e/ou senha invalido(s)!
                    </Text>
                    :
                    <></>
                }

                <TextInput
                    style={ styles.textInput }
                    onChangeText={ setUsuario }
                    value={ usuario }
                    placeholder="Usuario"
                />
                <TextInput
                    style={ styles.textInput }
                    onChangeText={ setSenha }
                    value={ senha }
                    placeholder="Senha"
                    secureTextEntry={ true }
                />
                <View
                    style={ styles.viewButtonLogin }
                >
                    <Button
                        style={ styles.buttonLogin }
                        onClick={ validarAcesso }
                        label='Entrar'
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 30,
        width: 'auto',
        justifyContent: 'center',
        textAlign: 'center'
    },
    imageApp: {
        alignSelf: 'center',
        marginTop: 50
    },
    tituloApp: {
        margin: 20,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginInvalido: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15
    },
    divisor: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 20
    },
    textInput: {
        width: 'auto',
        height: 40,
        margin: 5,
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    viewButtonLogin: {
        margin: 20
    },
    buttonLogin: {
        backgroundColor: 'blue',
        color: 'white'
    }
});

export default Login;