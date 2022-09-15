
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Images() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}> Images</Text> */}
        <Image 
        style={styles.tinyLogo} 
        source={require('../assets/images/hekireki.png')}
        resizeMode={"cover"}>
        </Image>
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
  },

  tinyLogo: {
    width: 400,
    height: 300,
  },
});
