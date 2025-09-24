import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Botones() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.btnI} 
            onPress={() => navigation.navigate("Inicio")}
        >
            <Text style={styles.btnT}>Empezar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnI: {
        width: 200,
        padding: 10,
        backgroundColor: '#1b5a33ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop:'50%',
    },
    btnT: {
        color: '#fff',  
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})
