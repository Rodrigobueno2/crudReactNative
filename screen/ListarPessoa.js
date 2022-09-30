import React, { useEffect } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const ListarPessoa = ({navigation}) => {
    const listarPessoas = () => {
       axios.get("http://localhost:8081/api/pessoas/list").then((response)=>{
           console.log(response.data)
           setPessoa(response.data)
           //setPessoa(response.data.content)  --> paginado
       })
    }

    useEffect(()=>{
       listarPessoas();
    },[])

    const[pessoas,setPessoa] = React.useState([]);
    return(
      <View>
          <Text>Lista de Pessoas</Text>
          <Text>__________________________</Text>
          {pessoas.map((element)=>{
              return(
                 <View>
                     <Text> Nome: {element.nome}</Text>
                     <Text> CPF: {element.cpf}</Text>
                     <Button
                        onPress={()=>navigation.navigate('DeletarPessoa',{id:element.id,nome:element.nome,cpf:element.cpf})}
                        title="Deletar"
                        color="red"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                        onPress={()=>navigation.navigate('AtualizarPessoa',{id:element.id,nome:element.nome,cpf:element.cpf})}
                        title="Atualizar"
                        color="green"
                        accessibilityLabel="Learn more about this purple button"
                    />
                     <Text>____________________________</Text>
                 </View>
                
              );
          })}
      </View>
    );
}

export default ListarPessoa;