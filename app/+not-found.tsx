import {Stack, Link} from 'expo-router';
import {View, StyleSheet} from 'react-native';

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={ {title: "Page Not Found"} }/>
            <View style={styles.container}>
                <Link style={styles.button} href='/'>Go to Main Page</Link>
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
    }
});