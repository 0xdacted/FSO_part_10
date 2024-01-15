import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    height: 20, 
    marginTop: 5,
    color: '#d73a4a',
  },
  invisibleText: {
    color: 'transparent', 
  },
  inputField: {
    padding: 12,
    borderWidth: 1,  
    borderColor: 'lightgray', 
    borderRadius: 5,
  },
  inputFieldError: {
    borderColor: '#d73a4a',
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      <View style={[styles.inputField, showError && styles.inputFieldError]}>
        <TextInput
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </View>
      <Text style={[styles.errorText, !showError && styles.invisibleText]}>
        {showError ? meta.error : 'Placeholder'}
      </Text>
    </View>
  );
};

export default FormikTextInput;