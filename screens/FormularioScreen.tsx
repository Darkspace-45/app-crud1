import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { db } from '../config/config'

export default function FormularioScreen() {
    const [cedula, setcedula] = useState('')
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    const [correo, setcorreo] = useState('')

    ///////////ESCRIBIR///////////////

    function guardar() {
        set(ref(db, 'usuarios/' + cedula), {
            name: nombre,
            age: edad,
            email: correo,

        });
    }


    return (
        <View>
            <Text>FormularioScreen</Text>
            <TextInput placeholder='Ingresar Cédula'
                style={styles.input}
                onChangeText={(text) => setcedula(text)} />
            <TextInput placeholder='Ingresar Nombre'
                style={styles.input}
                onChangeText={(text) => setnombre(text)} />
            <TextInput placeholder='Ingresar Edad'
                style={styles.input}
                onChangeText={(text) => setedad(+text)} />
            <TextInput placeholder='Ingresar Correo'
                style={styles.input}
                onChangeText={(text) => setcorreo(text)} />
            <Button title='Guardar'
                onPress={() => guardar()} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "85%",
        fontSize: 18,
        backgroundColor: '#a2c2d0',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        margin: 10
    }
})