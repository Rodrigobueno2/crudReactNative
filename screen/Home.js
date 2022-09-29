import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


const Home =({navigation})=>{
    return(
       <View>
           <Button
              title="Cadastrar"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                 navigation.navigate('CadastrarPessoa')
              }
            />
            <Button
              title="Listar"
              color="blue"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                 navigation.navigate('ListarPessoa')
              }
            />
             <Button
              title="Listar Pessoa Por Id"
              color="orange"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                 navigation.navigate('ListarPessoaPorId')
              }
            />
       </View>


    );
}

export default Home;