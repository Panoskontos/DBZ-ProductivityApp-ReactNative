import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Images } from './comp/images';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text Manager 101</Text>
      <StatusBar style="auto" />

      {/* <Images /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color:'white'
  }
});
