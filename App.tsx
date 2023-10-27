import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import CompanyData from './src/pages/CompanyData';


const App = () => {

  const [name, SetName] = useState("IAABRAR")

  let fname = "Ismail";
  let lastname = "Aabrar";
  const age = 24;

  const testupdate = () => {
    SetName("011201181");
  }



  const fruit = (val) => {
    console.warn(val);
  }



  return (
    <View>
      <Text style={{ fontSize: 20, margin: 100 }}>Hey! I am dev brach</Text>
      <Pressable style={styles.button} onPress={() => fruit("Hello")}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <br />
      <Pressable style={styles.button} onPress={() => fruit("Aabrar")}>
        <Text style={styles.text}>Hello</Text>
      </Pressable>
      <br />
      <Pressable style={styles.button} onPress={testupdate}>
        <Text style={styles.text}>Update</Text>
      </Pressable>
      <View>
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text style={{ fontSize: 20 }}>{10 / 10}</Text>
        <Text style={{ fontSize: 20 }}>{name + " " + lastname}</Text>
        <Text style={{ fontSize: 20 }}>{age == 24 ? "Age is 24" : "Not Matched"}</Text>
      </View>
      <View>
        <Text>{name} </Text>
      </View>
      <UserData />
      <CompanyData />

    </View >

  );
}


const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name: Aabrar</Text>
      <Text style={{ fontSize: 20 }}>Age: 24</Text>
      <Text style={{ fontSize: 20 }}>Email: aabrar@gmail.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 150,
    marginLeft: 100
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


export default App;