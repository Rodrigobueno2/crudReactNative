import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const ListarPessoaPorId = ()=>{

  const [nome,setNome]=React.useState("");
  const [cpf,setCpf]=React.useState("");
  const [id,setId]=React.useState("");

  const listarPessoaPorId = (id) =>{
     axios.get("https://crudcrud.com/api/59be56fe29ee4530bf18607c0684d8d0/pessoa/"+id).then((response)=>{
       setNome(response.data.nome);
       setCpf(response.data.cpf);
     })
  }
   


    return(
      <View>
          <Text>Listar pessoa por id</Text>
          <TextInput
            style={styles.input}
            onChangeText={setId}
            value={id}
            placeholder="Digite o id"
          />
      <Button
          onPress={()=>listarPessoaPorId(id)}
          title="Listar"
          color="#841584"
          
     />
     <Text>_______________________________________</Text>
     <Text>Nome: {nome}</Text>
     <Text>Cpf: {cpf}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default ListarPessoaPorId;