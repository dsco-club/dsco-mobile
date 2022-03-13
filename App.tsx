import React from 'react';

import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera, BarCodeReadEvent} from 'react-native-camera';

const App = () => {
  function handleRead(e: BarCodeReadEvent) {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  }

  return (
    <QRCodeScanner
      onRead={handleRead}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
          on your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;
