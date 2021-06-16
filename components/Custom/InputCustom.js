import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Theme } from '../../Theme/Theme';

export const InputCustom = ({placeholder='', renderErrorMessage='', leftIcon, secureTextEntry=false, onChangeText: handleOnchange}) => {
    
  const [focus, setFocus] = useState(false)

  return (
        <Input
        placeholder={placeholder}
        placeholderTextColor="#b9b5b6"
        secureTextEntry={secureTextEntry}
        errorMessage={renderErrorMessage}
        leftIcon={leftIcon}
        leftIconContainerStyle={styles.leftIcon}
        containerStyle={styles.formContainer}
        inputContainerStyle={
          focus ? styles.inputFocused : styles.inputContainer
        }
        onChangeText={handleOnchange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        errorStyle={styles.error}
      ></Input>
    )
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 2,
    marginBottom: 2,
  },
  inputContainer: {
    borderColor: "transparent",
    color: "black",
    backgroundColor: "#f3efee",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
  },
  inputFocused: {
    borderColor: Theme.colors.primary,
    color: "black",
    backgroundColor: "#f3efee",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
  },
  leftIcon: {
    marginRight: 10,
  },
  error: {
    paddingLeft: 20,
  }
})
