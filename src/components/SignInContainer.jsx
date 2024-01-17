import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikTextInput from './FormikTextInput'; 

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

const SignInContainer = ({ onSubmit }) => {
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

export default SignInContainer;
