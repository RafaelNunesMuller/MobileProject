import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../controller";

export default function LoginUsu({navigation}) {
  const [email, setEmail] = useState(""); 
  const [senha, setSenha] = useState("");

  const Verification = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        console.log('usuario logado', userCredential.user.email);
        navigation.navigate('Hometab');
      })
      
      .catch(error => {
        console.error('Erro ao logar:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
        onPress={Verification}
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
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  btn: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "#000",
    borderRadius: 5,
  },
});
