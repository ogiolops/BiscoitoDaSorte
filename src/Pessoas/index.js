import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native'

function Pessoas(props) {

    const [name, setName] = useState('Giovanni')
    const [cargo, setCargo] = useState('dev')

    return(
        <View>
            <Text style={styles.txtList}>Nome: {name}</Text>
            <Text style={styles.txtList}>Cargo: {cargo}</Text>
        </View>
    )
}

export default Pessoas

const styles = StyleSheet.create({
    txtList:{
        color: '#fff',
        fontSize: 25,
    }
})