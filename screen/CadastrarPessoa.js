
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'

const CadastrarPessoa = () => {

  const salvarPessoa =(nome,cpf)=>{
     axios.post("http://localhost:8081/api/pessoas",{
       nome:nome,
       cpf:cpf,
     }).then(()=>{
       alert("cadastrado com sucesso");
     }).catch((error)=>{
       alert(error);
       console.log(error);
     })
  }

  const[nome,setNome]=React.useState("");
  const[cpf,setCpf]=React.useState("");
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
          <Button
              title="Cadastrar Pessoa"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  salvarPessoa(nome,cpf)
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