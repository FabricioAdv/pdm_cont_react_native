import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Foto = ({ url }) =>
{
    const urlDefault = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png';

    return (
        <Image
            style={ styles.imageApp }
            source={ {
                uri: url ?? urlDefault,
            } }
        />
    );
};

const styles = StyleSheet.create({
    imageApp: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 10
    }
});

export default Foto;