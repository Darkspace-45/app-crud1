import { View, Text, TextInput, Button } from "react-native"
import React, { useState } from "react"
import { ref, remove } from "firebase/database";
import { db } from "../config/config";

export default function EliminarScreen() {

    const [cedula, setcedula] = useState('')

    function eliminar() {
        remove(ref(db, 'usuarios/' + cedula));
    }

    return (
        <View>
            <Text>EliminarScreen</Text>
            <TextInput
            placeholder="Ingresar Cedula"
            keyboardType="numeric"
            />
            <Button color="red" title="Eliminar" onPress={() => eliminar()}/>
        </View>
    )
}