import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, ScrollView, ActivityIndicator, Text, View, TextInputBase } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../utils/firebase';

export default function Listagem() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [listFire, setListFire] = useState('');
  /*componentDidMount() {
    firebase.database().ref('Usuarios/').once('value', (data) => {
        console.log(data.toJSON())
    });
  }*/
  function pushFire() {
    try{
      firebase.database().ref('Usuarios/').push({
        nome: nome,
        email: email
        })
      } catch (error){
        alert(error);
      }
      finally{
        setNome('');
        setEmail('');
      }
    
  }

  useEffect(()=>{
    try{
      firebase.database().ref('Usuarios/').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem)=>{
          list.push({
            key: childItem.key,
            nome: childItem.val().nome,
            email: childItem.val().email,
          });
        });
        setListFire(list);
      })
    } catch (error) {
      alert(error);
    }
  }, [])



  
    return (
      <View style={styles.container}>
      <FlatList style={styles.viewFlatList} data={listFire} keyExtractior={
        (item) => item.key} renderItem={({item}) =>
          <View style={styles.iconFlat}>

            <Text style={styles.text}>Nome: {item.nome}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
          </View>
      }
        
        />
        </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#000',
   alignItems: 'center',
   justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});