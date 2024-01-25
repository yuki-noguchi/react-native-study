import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import styled, { css,  } from '@emotion/native'

const LinkText = styled.Text({
  color: 'blue',
  textDecorationStyle: 'solid',
  textDecorationColor: 'blue',
  textDecorationLine: 'underline',
})

export default function App() {
  const {height, width} = useWindowDimensions();
  return (
    <View style={css({
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: width < 800 ? 'orange' : '#fff'
    })} >
      <Text style={{color: 'red'}}>index Page</Text>
      <Link href="/about"><LinkText>go to about</LinkText></Link>
      <StatusBar style="auto" />
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
