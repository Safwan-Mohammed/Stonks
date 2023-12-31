import { setStatusBarBackgroundColor } from 'expo-status-bar'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Buttons({ btnColor, content, onPress }){
    return(
        <Pressable
            onPress = {onPress}
            style = {({ pressed }) => ([
                {backgroundColor: pressed ? 'yellow' : btnColor},
                styles.button
            ])}
        >
            <Text style = {styles.text}>{content}</Text>
        </Pressable>
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