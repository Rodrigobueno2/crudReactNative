import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const AtualizarPessoa = ({navigation,route})=>{

    const atualizarPessoa = (nome,cpf)=>{
       axios.put("https://crudcrud.com/api/59be56fe29ee4530bf18607c0684d8d0/pessoa/"+route.params?.id,{
           nome:nome,
           cpf:cpf
       }).then((response)=>{
           alert("atualizado com sucesso");
           navigation.navigate('Home');
       })
    }

    
    const[nome,setNome]=React.useState(route.params?.nome);
    const[cpf,setCpf]=React.useState(route.params?.cpf);
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
            <Button
              title="Atualizar Pessoa"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  atualizarPessoa(nome,cpf)
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