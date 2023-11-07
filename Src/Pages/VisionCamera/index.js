import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../assests/images/images';
import CameraPage from '../Camera/index';
const VisionCamera = () => {
  const [frontimage, setImageURI] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState('');

  const openCamera = () => {
    setShowCamera(true);
    console.log('called open cmaer');
  };

  const handleCaptureImage = imagePath => {
    setImageSource(imagePath);
    setCapturedImage(imagePath);
    setShowCamera(false);
    console.log('called handleCaptureImage');
  };

  return (
    <View style={styles.mainContainer}>
      {imageSource !== '' ? (
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: `file://'${imageSource}`,
          }}
        />
      ) : null}
      <Modal animationType="slide" transparent={true} visible={showCamera}>
        <CameraPage isVisible={true}  onCaptureImage={handleCaptureImage} />
      </Modal>

      <View style={{width: '70%', marginTop: 30}}>
        <Button
          color={'black'}
          title="Camera"
          //onPress={checkCameraPermission}
          onPress={() => openCamera()}
        />
      </View>
    </View>
  );
};

export default VisionCamera;