import { StyleSheet, View, SafeAreaView } from 'react-native';
import BDisable from './buttons/BDisable';
import Slider from './buttons/Slider';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewka}>
        <BDisable />
        <Slider />
      </View>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 74,
  },
  viewka : {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
