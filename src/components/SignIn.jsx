import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',  
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,  
  },
  buttonText: {
    color: 'white',  
    fontSize: 16,  
  }
});

const validationSchema = Yup.object({
  username: Yup.string().required('Username is Required'),
  password: Yup.string().required('Password is Required'),
});


const SignIn = () => {
    const [signIn] = useSignIn(); 

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            console.log(data);

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={onSubmit} 
            >
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput name="username" placeholder="Username" />
                        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default SignIn;
