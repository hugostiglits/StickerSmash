import {Text, View, StyleSheet} from 'react-native';

export default function AboutPage() {
   return (
    <View style={styles.container}>
        <Text style={styles.text}>About page</Text>
    </View>
   ); 
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#25292e',
        },
        text : {
            color: '#fff',
        },
    }
);