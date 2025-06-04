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
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
    },
    });