import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

const Grmythancntstorrieslayt = ({
  children,
  bounces = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  bounces?: boolean;
}) => {
  return (
    <ImageBackground
      source={require('../../assets/i/grmythancntlay.png')}
      style={styles.grmythancntstorrieslaytcontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.grmythancntstorrieslaytscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export default Grmythancntstorrieslayt;

const styles = StyleSheet.create({
  grmythancntstorrieslaytcontainer: {
    flex: 1,
    backgroundColor: '#0A1810',
  },
  grmythancntstorrieslaytscrollContent: {
    flexGrow: 1,
  },
  grmythancntstorrieslaytflexFill: {
    flex: 1,
  },
});
