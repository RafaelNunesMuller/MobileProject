import { Text, View, StyleSheet, Image } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo a PsiAmparo</Text>
            <View style={styles.section}>

                {<Image source={require("../assets/Medico1.jpg")} style={styles.image} />}
                <Text style={styles.text}>esse é o nosso fundador</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.text}>essa é a nossa clinica</Text>
                <Image source={require("../assets/clinica.jpg")} style={styles.image} /> 

            </View>
            <View style={styles.section2}>
                <Text style={styles.bottom}>Você não está sozinho — cuidar da mente também é um ato de coragem</Text>
                <Text style={styles.bottom2}>Em alguns momentos da vida, nos sentimos sobrecarregados, sem energia, confusos ou presos em pensamentos que não conseguimos controlar. Ninguém escolhe passar por isso — mas todos merecem apoio.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    section: {
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    section2: {
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    
    text: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    bottom: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent:'flex-end',
        textAlign: 'center',
        
    },
    bottom2: {
        fontSize: 16,
        justifyContent:'flex-end',
        textAlign: 'center',
        
    },
});
