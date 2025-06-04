import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function LoginUsu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
      />
      <Button
        style={styles.btn}
        title="Cadastrar"
      />
    </View>
        
  );

}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        padding: 10,
        marginVertical: 10,

        width: "80%",
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
