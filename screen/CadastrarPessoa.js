
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'

const CadastrarPessoa = () => {

  const salvarPessoa =(nome,cpf,bairro,numero,rua)=>{
     axios.post("http://localhost:8081/api/pessoas",{
       nome:nome,
       cpf:cpf,
       endereco:{
         bairro:bairro,
         rua:rua,
         numero:numero
      }
     }).then(()=>{
       alert("cadastrado com sucesso");
     }).catch((error)=>{
       alert(error);
       console.log(error);
     })
  }

  const[nome,setNome]=React.useState("");
  const[cpf,setCpf]=React.useState("");
  const[rua,setRua]=React.useState("");
  const[bairro,setBairro]=React.useState("");
  const[numero,setNumero]=React.useState("");
    return(
      <View style={styles.view}>
         <Text style={styles.text}>Tela de Cadastro</Text>
         <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="digite seu nome"
         />
         <TextInput
            style={styles.input}
            onChangeText={setCpf}
            value={cpf}
            placeholder="digite seu cpf"
         />
         <Text>Endereço</Text>
         <TextInput
            style={styles.input}
            onChangeText={setRua}
            value={rua}
            placeholder="digite o nome da rua"
         />
          <TextInput
            style={styles.input}
            onChangeText={setNumero}
            value={numero}
            placeholder="digite o numero da rua"
         />
         <TextInput
            style={styles.input}
            onChangeText={setBairro}
            value={bairro}
            placeholder="digite o bairro"
         />
          <Button
              title="Cadastrar Pessoa"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  salvarPessoa(nome,cpf,bairro,numero,rua)
              }
          />
      </View>
    );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginHorizontal:20,
  },
  text:{
    paddingHorizontal:100,
    paddingVertical:10
  },
  view:{

  }
});

export default CadastrarPessoa