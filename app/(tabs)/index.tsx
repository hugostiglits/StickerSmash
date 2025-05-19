import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
   <View style={styles.container}>
    <Text style={styles.text}>Main Page</Text >
            <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",

  },

  text : {
    color : '#fff',
  },
  button: {
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#fff',
  },
});
