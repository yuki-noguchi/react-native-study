import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header, Button, Text } from '@rneui/themed';

export default function App() {
  return (
    <>
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "MY TITLE",
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      // containerStyle={{ width: 350 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ icon: "home", color: "#fff" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
    <View style={styles.container}>
    <Button
              title={<View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}><Text h1>Login</Text><Text>hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge</Text></View>}
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                // height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />

      <Text>index Page</Text>
      <Link href="/about">go to about</Link>
      <StatusBar style="auto" />
    </View>
    </>
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
