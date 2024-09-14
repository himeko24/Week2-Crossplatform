import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Stefanus Andrian - 00000055662</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Image source={require('./assets/favicon.png')} />
        <Text>test</Text>
      </ScrollView>
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
});
