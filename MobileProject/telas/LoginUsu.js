import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../controller';


export default function LoginUsu({navigation}) {


  const [email, setEmail] = useState(""); 
  const [senha, setSenha] = useState("");


  const Verification = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        console.log("Usuário logado com sucesso:", userCredential.user.email);
        navigation.navigate('Home'); 
      })
      .catch(error => {
        console.error("Erro ao fazer login:", error);
      });
  };

  return (
    <View style={styles.container}> <Text style={styles.ttl}>PsiAmparo</Text>
      
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
      <TouchableOpacity
        style={styles.btn} onPress={Verification}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      

      <TouchableOpacity
        style={styles.btn} onPress={() => navigation.navigate('CadastrarUsuario')}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
        
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    padding: 24,
  },
  ttl: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4361ee',
    marginBottom: 8,
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#22223b',
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#adb5bd',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#4361ee',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#4361ee',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
