import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home'
import CadastrarPessoa from './screen/CadastrarPessoa'
import ListarPessoa from './screen/ListarPessoa'
import ListarPessoaPorId from './screen/ListarPessoaPorId';
import DeletarPessoa from './screen/DeletarPessoa';
import AtualizarPessoa from './screen/AtualizarPessoa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
       <Stack.Screen
        name="CadastrarPessoa"
        component={CadastrarPessoa}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="ListarPessoa"
        component={ListarPessoa}
        options={{ title: 'Welcome' }}
      />
       <Stack.Screen
        name="ListarPessoaPorId"
        component={ListarPessoaPorId}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="DeletarPessoa"
        component={DeletarPessoa}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="AtualizarPessoa"
        component={AtualizarPessoa}
        options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  </NavigationContainer>



    //<View style={styles.container}>
     // <Text>Open up App.js to start working on your app!eekfkf</Text>
      //<StatusBar style="auto" />
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
