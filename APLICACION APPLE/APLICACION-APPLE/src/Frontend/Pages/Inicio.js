import React from 'react';
import { StyleSheet, View, Text, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CardV3 from '../components/Card';


const Inicio = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <View style={styles.appBar}>

                <Text style={styles.title}>Productos</Text>
                <View style={{ width: 20 }} />
            </View>


            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 80 }}
            >
                <CardV3

                    titulo="IPhone 17 Pro Max"
                    contenido="Todo mas Pro."
                    precio="Desde $28,499"
                    imagen="https://www.apple.com/v/iphone-17-pro/a/images/overview/welcome/hero__bdntboqignj6_xlarge.jpg"
                />
                <CardV3
                    titulo="Iphone Air"
                    contenido="El iphone mas delgado."
                    precio="desde $25,999"
                    imagen="https://www.mastekhw.com/wp-content/uploads/2025/09/iShop-trae-a-Colombia-los-nuevos-iPhone-17-iPhone-17-Pro-y-17-Pro-Max.jpg"
                />
                <CardV3
                    titulo="IPhone 17"
                    contenido="Espectaculor."
                    precio="Desde $19,999"
                    imagen="https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/article/Apple-iPhone-17-lineup-250909_big.jpg.large_2x.jpg"
                />
            </ScrollView>

            {/* Navbar */}
            <View style={styles.navbar}>
                {/* Para ti */}
                <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("ParaTi")}>
                    <FontAwesome name="th-large" size={20} color="#fff" />
                    <Text style={styles.navText}>Para ti</Text>
                </TouchableOpacity>
                {/* Productos */}
                <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Inicio")}>
                    <View style={styles.iconRow}>
                        <FontAwesome name="laptop" size={20} color="#fff" style={{ marginRight: 4 }} />
                        <FontAwesome name="mobile" size={20} color="#fff" />
                    </View>
                    <Text style={styles.navText}>Productos</Text>
                </TouchableOpacity>
                {/* Conocer más */}
                <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Formulario")}>
                    <FontAwesome name="apple" size={20} color="#fff" />
                    <Text style={styles.navText}>Inventario</Text>
                </TouchableOpacity>
                {/* busqueda */}
                <TouchableOpacity style={styles.iconColumn}>
                    <FontAwesome name="search" size={20} color="#fff" />
                    <Text style={styles.navText}>busqueda</Text>
                </TouchableOpacity>
                {/* Bolsa */}
                <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Configuracion")}>
                    <FontAwesome name="gears" size={20} color="#fff" />
                    <Text style={styles.navText}>Configuracion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        alignItems: 'center',
    },
    appBar: {

        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0b07077e',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#444',

    },
    iconColumn: {
        alignItems: 'center',
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 2,
        color: '#fff',
    },
});

export default Inicio;
