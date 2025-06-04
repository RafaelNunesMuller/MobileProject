import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function LoginUsu({navigation}) {

  const [usuario, setUsuario] = useState(""); 
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={usuario} 
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Button
        style={styles.btn}
        title="LOGIN"
        onPress={() => navigation.navigate('Hometab')} 
      />

      <Button
        style={styles.btn}
        title="Cadastrar"
        onPress={() => alert('Funcionalidade de cadastro ainda não implementada')} 
      />
    </View>
        
  );

}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "50%",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
    },

    btn:{
      width: "100%",
      padding: 10,
      margin: 10,
      backgroundColor: "#000",
      borderRadius: 5,
    },

});
