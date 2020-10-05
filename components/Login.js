// Login.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import firebase from '../utils/firebase';

export default function Login () {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function loginFirebase(){
        console.log("chegou ate aqui");
        firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
            // Handle Errors here.
            
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorCode, errorMessage);
            // ...
        });
    }

    function logoutFirebase(){
        console.log("deslogou");
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
        });
    }

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //console.log(user.email);
                //navigation.push('Usuario')
            } else {
                console.log('não logado ');
            }
          });
    },[])

    return (
      <View style={styles.container}>
        <Text>Login</Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => setEmail( email )}
          value={email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={senha => setSenha( senha )}
          value={senha}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{ loginFirebase()}}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ logoutFirebase()}}>
            <Text>Logout</Text>
        </TouchableOpacity>

        <Button title="Login" />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  button:{
      marginTop: 15,
      width: 250,
      height: 60,
      borderWidth: 1,
      borderColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
  }
})