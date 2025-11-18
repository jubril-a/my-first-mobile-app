import { useEffect } from "react";
import { View } from "react-native";
import { Camera } from "react-native-vision-camera";

export default function Index() {

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const micPermission = await Camera.requestMicrophonePermission();

      console.log(`Camera: ${cameraPermission} | Mic: ${micPermission}`);
    })();
  }, []);

  return (
    <View className="flex-1 bg-yellow-600">
     
    </View>
  );
}
 