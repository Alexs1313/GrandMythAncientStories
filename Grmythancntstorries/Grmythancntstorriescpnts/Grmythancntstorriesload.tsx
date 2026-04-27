import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const htmlloader = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: hidden;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    --uib-size: 100px;
    --uib-color: #5CCA40;
    --uib-speed: 1.4s;
    --uib-bg-opacity: 0.1;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 15, 85;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: travel var(--uib-speed) linear infinite;
  }

  .track {
    stroke: var(--uib-color);
    opacity: var(--uib-bg-opacity);
  }

  @keyframes travel {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }
</style>
</head>
<body>
  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40" class="container">
    <path
      d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"
      pathLength="100"
      stroke-width="4"
      fill="none"
      class="track"
    />
    <path
      d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"
      pathLength="100"
      stroke-width="4"
      fill="none"
      class="car"
    />
  </svg>
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
