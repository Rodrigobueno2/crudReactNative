import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const AtualizarPessoa = ({navigation,route})=>{

    const atualizarPessoa = (nome,cpf,numero,rua,bairro)=>{
       axios.put("http://localhost:8081/api/pessoas/"+route.params?.id,{
           id:route.params?.id,
           nome:nome,
           cpf:cpf,
           endereco:{
            rua:rua,
            numero:numero,
            bairro:bairro
           }
           
       }).then((response)=>{
           alert("atualizado com sucesso");
           navigation.navigate('Home');
       })
    }

    
    const[nome,setNome]=React.useState(route.params?.nome);
    const[cpf,setCpf]=React.useState(route.params?.cpf);
    const[rua,setRua]=React.useState(route.params?.rua);
    const[numero,setNumero]=React.useState(route.params?.numero);
    const[bairro,setBairro]=React.useState(route.params?.bairro);
    return(
       <View>
           <Text>Atualizar Pessoa</Text>
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
            <TextInput
                style={styles.input}
                onChangeText={setRua}
                value={rua}
                placeholder="digite a rua"
            />
            <TextInput
                style={styles.input}
                onChangeText={setNumero}
                value={numero}
                placeholder="digite o numero"
            />
            <TextInput
                style={styles.input}
                onChangeText={setBairro}
                value={bairro}
                placeholder="digite o bairro"
            />
            <Button
              title="Atualizar Pessoa"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  atualizarPessoa(nome,cpf,rua,bairro,numero)
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
    }
  });

export default AtualizarPessoa;