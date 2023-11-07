import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, Modal} from 'react-native';
import {Linking, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import images from '../../assests/images/images';



export default function CameraPage({
  isVisible,
  onCaptureImage,
  enableZoomGesture,
}) {
  const [imageSource, setImageSource] = useState('');
  const [cameraPosition, setcameraPosition] = useState('back');
  const [flash, setFlash] = useState('off');
  const camera = useRef(null);
  const device = useCameraDevice(cameraPosition, {
    // physicalDevices: [
    //   'ultra-wide-angle-camera',
    //   'wide-angle-camera',
    //   'telephoto-camera',
    // ],
  });

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({flash: flash});
      // setImageSource(photo.path);
      onCaptureImage(photo.path); // Call the callba
      // setShowCamera(false);
      console.log(photo.path);
    }
  };

  const toggleCamera = () => {
    cameraPosition !== 'back'
      ? setcameraPosition('back')
      : setcameraPosition('front');
  };

  const toggleFlash = () => {
    flash !== 'off' ? setFlash('off') : setFlash('on');
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      <Modal transparent={true} isVisible={isVisible}>
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          enableZoomGesture={true}
          focusable={true}
          // enablezoomgesture={true}
          isActive={isVisible}
          photo={true}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.camButton}
            onPress={() => capturePhoto()}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: '20%',
            }}
            onPress={toggleCamera}>
            <Image source={images.togglebtn} style={styles.toggleCambtn} />
          </TouchableOpacity>
          {cameraPosition === 'back' && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 40,
                backgroundColor:
                  flash === 'on' ? 'rgba(255, 255, 255, 0.7)' : null,
                left: '20%',
                borderRadius: 50,
              }}
              onPress={toggleFlash}>
              <Image source={images.flash} style={styles.flashBth} />
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
  toggleCambtn: {
    width: 80,
    height: 80,
  },
  flashBth: {
    width: 40,
    height: 40,
  },
});
