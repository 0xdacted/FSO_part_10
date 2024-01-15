import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  inputField: {
    padding: 12,
    borderWidth: 1,  
    borderColor: 'lightgray', 
    marginBottom: 10,  
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

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <View style={styles.inputField}>
              <FormikTextInput name="username" placeholder="Username" />
            </View>
            <View style={styles.inputField}>
              <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
