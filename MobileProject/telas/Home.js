import { Text, View, StyleSheet, Image } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Texto.........................</Text>
            <View style={styles.section}>
                {<Image source={require("../assets/Medico1.jpg")} style={styles.image} />}
                <Text style={styles.text}>Texto1</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.text}>Texto2</Text>
                <Image source={require("../assets/Medico1.jpg")} style={styles.image} /> 
            </View>
            <View style={styles.section}>
                <Text style={styles.bottom}>Texto3</Text>
                <Text style={styles.bottom}>Texto4</Text>
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
        justifyContent:'flex-end',
        textAlign: 'center',
        
    },
});