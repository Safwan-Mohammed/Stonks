import React from "react";
import { View ,Text ,TextInput, StyleSheet, SafeAreaView} from "react-native";
import Buttons from "../helpers/Buttons";
import { Formik } from 'formik';
import * as yup from 'yup';
import { loadLocalRawResourceDefault } from "react-native-svg/lib/typescript/LocalSvg";

const loginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email("Please ente a valid email")
    .required("Email address is required"),

    password: yup
    .string()
    .min(8, ({ min }) => 'Password must be atleast ${min} characters')
    .required("Passsword is required"),
})

export default function Login() {
    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.loginContainer}>
                <Text style = {styles.text}>Log In</Text>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: '', password: ''}}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <TextInput
                                name="email"
                                placeholder="Email Address"
                                style={ styles.textInput }
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType= 'email-address'
                            >
                            </TextInput>
                            <TextInput
                                name="password"
                                placeholder="password"
                                style={styles.textInput}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            >
                            </TextInput>
                            <Buttons onPress={handleSubmit} btnColor='red' content="submit"/>
                        </>
                    )}
                
                </Formik>

            </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '80%',
        backgroundColor: '#e6e621',
        padding: 10,
        elevation: 10,
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10
    },
    text: {
        color: '#fff',

    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 6,
    }
})