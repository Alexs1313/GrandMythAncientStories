import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const htmlloader = `  <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: transparent;
          }

          .spinner {
            width: 60px;
            height: 60px;
            position: relative;
          }

          .spinner .dot {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            animation: spin 2s infinite linear;
          }

          .spinner .dot::after {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: rgb(12, 180, 231);
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .spinner .dot:nth-child(2) {
            animation-delay: 0.1s;
          }

          .spinner .dot:nth-child(3) {
            animation-delay: 0.2s;
          }

          .spinner .dot:nth-child(4) {
            animation-delay: 0.3s;
          }

          .spinner .dot:nth-child(5) {
            animation-delay: 0.4s;
          }
        </style>
      </head>
      <body>
        <div class="spinner">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </body>
    </html>`;

const Grmythancntstorriesload = () => {
  const grmythancntstorriesNavigation = useNavigation();

  useEffect(() => {
    const grmythancntstorriesTimer = setTimeout(() => {
      grmythancntstorriesNavigation.navigate('Grmythancntstorriesonb' as never);
    }, 6000);

    return () => {
      clearTimeout(grmythancntstorriesTimer);
    };
  }, [grmythancntstorriesNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/grmythancntsloadr.png')}
      style={styles.grmythancntstorriesimageBg}>
      <ScrollView
        contentContainerStyle={styles.grmythancntstorriesscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.grmythancntstorriesbottomWrap}>
          <WebView
            source={{html: htmlloader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{width: 260, height: 150, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Grmythancntstorriesload;

const styles = StyleSheet.create({
  grmythancntstorriesscrollContent: {
    flexGrow: 1,
  },

  grmythancntstorriesbottomWrap: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  grmythancntstorriesimageBg: {
    flex: 1,
  },
});
