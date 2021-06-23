import React, { useMemo } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onClick, label, type = 'blue', style }) =>
{
    const containerStyle = useMemo(() =>
        StyleSheet.flatten([
            styles.container,
            style,
            type === 'blue' && styles.blue,
            type === 'red' && styles.red
        ])
    );
    return (
        <TouchableOpacity
            activeOpacity={ 0.7 }
            onPress={ onClick }
            style={ containerStyle }
        >
            <Text style={ styles.texto }>{ label }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    blue: {
        backgroundColor: "#e6efff",
        borderColor: "#96bdff",
    },
    red: {
        backgroundColor: "#ffe0e0",
        borderColor: "#ff9191",
    },
    texto: {
        textAlign: 'center'
    }
});

export default Button;