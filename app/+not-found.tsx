import {Stack, Link} from 'expo-router';
import {View, Text, StyleSheet} from 'react-native';

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={ {title: "Page Not Found"} }/>
            <View style={styles.container}>
                <Text style={styles.text}>Видимо такой страницы нет</Text>
                <Link href="/" style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25292e',
    },
    button : {
        color: '#fff',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    text : {
        color: '#fff',
    },
});