import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Grmythancntstorrieslayt = ({
  children,
  bounces = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  bounces?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['rgb(10, 81, 38)', 'rgb(2, 24, 10)']}
      style={styles.grmythancntstorrieslaytcontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.grmythancntstorrieslaytscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
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
