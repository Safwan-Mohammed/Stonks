import { View, Text, StyleSheet, Animated } from 'react-native'
import HomeAnimation from '../helpers/HomeAnimation'
import Buttons from '../helpers/Buttons'

const styles = StyleSheet.create(
    {
        outerView: {
            flex: 1,
            padding: 10,
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
                    <View>
                        <Text style = { styles.mainHeading } > STONKS </Text>
                        <View style = { styles.lowerSection } >
                            <Buttons btnColor = '#3EA7B5' content = 'SIGN-IN' />
                            <Buttons btnColor = "#3EA7B5" content = 'SIGN-OUT'/>
                        </View>
                    </View>
            </View>
        </>
    )
}