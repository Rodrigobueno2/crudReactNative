import React from 'react'
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const DeletarPessoa = ({navigation,route})=>{

   const deletarPessoa = (id)=>{
       axios.delete("http://localhost:8081/api/pessoas/"+id).then(()=>{
           alert("Deletado com Sucesso");
           navigation.navigate('Home')
       })
   }


    return(
      <View>
          <Text>Tem certeza que deseja deletar a pessoa com os dados abaixo? </Text>
          <Text>Id: {route.params?.id}</Text>
          <Text>Nome: {route.params?.nome}</Text>
          <Text>CPF: {route.params?.cpf}</Text>
          <Button
              title="SIM"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  deletarPessoa(route.params?.id)
              }
          />
          <Button
              title="NÃO"
              color="red"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  navigation.navigate('ListarPessoa')
              }
          />
      </View>
    );
}

export default DeletarPessoa