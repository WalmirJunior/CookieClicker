import React, {useState} from 'react'
import {View, Text, Image,TouchableOpacity,StyleSheet} from "react-native"


export default function Teste(){
    const [count, setCount] = useState(0)
    return (
        <View style={styles.container}>
            <Text>Você clicou {count} vezes</Text>
            <TouchableOpacity onPress={()=>setCount(count + 1) } title='Clique aqui!'>
            <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5473/5473473.png' }} 
                    style={styles.cookie}
            />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    cookie: {
        width: 300,  
        height: 300, 
    },
});