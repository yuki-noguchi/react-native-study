import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, useMedia, YStack, XStack } from 'tamagui'
import { Activity, Airplay } from '@tamagui/lucide-icons'


export default function App() {
  const media = useMedia()
  return (
    <>
    <YStack alignItems='center' justifyContent='center' flex={1}>
    <Button alignSelf="center" icon={Airplay} size="$13" color={'$blue1Light'} backgroundColor={'$blue10Light'}>
        Large
      </Button>
      <XStack>
      <Text>index Page</Text>
      <Link href="/about">go to about</Link>
      </XStack>
      <StatusBar style="auto" />
    </YStack>
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
