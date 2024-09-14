import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Teste from './src/components/Teste';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Teste/>
    </SafeAreaView>
  )};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e5e5',
      paddingTop:80,
      
    },
  });

 

