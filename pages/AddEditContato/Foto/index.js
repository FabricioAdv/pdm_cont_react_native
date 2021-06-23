import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Foto = ({ url = null, style }) =>
{
    const urlDefault = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png';

    return (
        <Image
            style={ [styles.imageApp, style] }
            source={ {
                uri: !url ? urlDefault : url
            } }
        />
    );
};

const styles = StyleSheet.create({
    imageApp: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderRadius: 10
    }
});

export default Foto;