import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref, set } from 'firebase/database';
import { db } from '../config/config';

export default function ListaScreen() {
    const [datos, setdatos] = useState([])
    ////////LEER////////
    function leer() {
        const starCountRef = ref(db, 'usuarios/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setdatos(data)
            let lista: any = Object.keys(data).map(cedula => ({ cedula, ...data[cedula] }));
            setdatos(lista)
        });
    }

    useEffect(() => {
        leer()
        console.log(datos)
    }, [])

    type item = {
        name: string,
        age: number,
        email: string,
    }

    return (
        <View>
            <Text>ListaScreen</Text>
            <FlatList
                data={datos}
                renderItem={({ item }: { item: item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.age}</Text>
                        <Text>{item.email}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})