import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Animation from '../helpers/Animation'
import Buttons from '../helpers/Buttons'

const styles = StyleSheet.create(
    {
        outerView: {
            flex: 1,
            padding: 10,
            backgroundColor: "black",
        },
        safeArea: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        mainHeading: {
            color:'white',
            fontSize: 60,
        },
        lowerSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50
        }
    }
)

export default function HomePage(){
    return(
        <>
            <View style = { styles.outerView }>
                <SafeAreaView style = { styles.safeArea }>
                <StatusBar barStyle={'light-content'}/>
                    <Animation />
                    <View>
                        <Text style = { styles.mainHeading } > STONKS </Text>
                        <View style = { styles.lowerSection } >
                            <Buttons style={{backgroundColor: '#3EA7B5'}} content = 'SIGN-IN' />
                            <Buttons style= {{backgroundColor: '#3EA7B5'}} content = 'SIGN-OUT'/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </>
    )
}