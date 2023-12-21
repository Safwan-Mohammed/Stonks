import { View, Text, StyleSheet } from 'react-native'

export default function Buttons({ style, content }){
    return(
        <View style = {[styles.button, style]}>
            <Text style = {styles.text}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height: 'auto',
        width: 'auto',
        borderRadius: 15,
        padding: 10
    },
    text:{
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1
    }
})