import { Image } from 'expo-image';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function App() {
  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();

  const camera = useRef<Camera>(null);

  const [photoData, setPhotoData] = useState<string>();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission().catch(console.error);
    }
  }, [hasPermission]);

  return (
    <View style={{ flex: 1 }}>
      {!device ? (
        <Text>no device</Text>
      ) : photoData ? (
        <Image source={photoData} style={{ flex: 1, width: '100%' }} contentFit="contain" />
      ) : (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            ref={camera}
            photo
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              alignSelf: 'center',
              backgroundColor: '#fff',
              borderRadius: 35,
              opacity: 0.7,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={async () => {
              const photo = await camera.current?.takePhoto();
              const response = await fetch(`file://${photo?.path}`);
              const blob = await response.blob();

              const reader = new FileReader();
              reader.onload = (e: ProgressEvent<FileReader>) => {
                setPhotoData(e.target?.result as string);
              };
              reader.readAsDataURL(blob);
            }}>
            <Text>撮影</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
