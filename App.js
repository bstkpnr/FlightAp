import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchForm from './src/components/SearchForm';
import {LinearGradient} from 'expo-linear-gradient'
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['white','#F2BE22']}>
      <SafeAreaView>

      <SearchForm />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
   
  },
});
