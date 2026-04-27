import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Grmythancntstorriesstrs from './Grmythancntstorries/Grmythancntstorriesscrns/Grmythancntstorriesstrs';
import Grmythancntstorriescollc from './Grmythancntstorries/Grmythancntstorriesscrns/Grmythancntstorriescollc';
import Grmythancntstorriesquz from './Grmythancntstorries/Grmythancntstorriesscrns/Grmythancntstorriesquz';
import Grmythancntstorriessvd from './Grmythancntstorries/Grmythancntstorriesscrns/Grmythancntstorriessvd';
import Grmythancntstorriesquestn from './Grmythancntstorries/Grmythancntstorriesscrns/Grmythancntstorriesquestn';
import Grmythancntstorriesfacts from './Grmythancntstorries/Grmythancntstorriesscrns/Grmythancntstorriesfacts';

const Tab = createBottomTabNavigator();

const GrmythancntstorriesAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const grmythancntstorriesScale = useRef(new Animated.Value(1)).current;

  const grmythancntstorriesHandlePressIn = () => {
    Animated.spring(grmythancntstorriesScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  const grmythancntstorriesHandlePressOut = () => {
    Animated.spring(grmythancntstorriesScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={grmythancntstorriesHandlePressIn}
      onPressOut={grmythancntstorriesHandlePressOut}
      style={[style as ViewStyle, styles.grmythancntstorriesButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.grmythancntstorriesButtonInner,
          {transform: [{scale: grmythancntstorriesScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const GrmythancntstorriesIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={styles.grmythancntstorriesIconWrap}>
      <View style={styles.grmythancntstorriesIconImageWrap}>
        {focused ? (
          <Image
            source={require('./assets/i/grmythancntstorind.png')}
            style={{position: 'absolute', top: -24, right: -8}}
          />
        ) : null}

        <Image
          source={source}
          tintColor={focused ? undefined : '#FFFFFF59'}
          style={{width: 22, height: 22}}
        />
      </View>
    </View>
  );
};

const grmythancntstorriesBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['rgb(13, 33, 19)', 'rgb(2, 17, 6)']}
    style={StyleSheet.absoluteFill}
  />
);

const grmythancntstorriesIconPlaces = ({focused}: {focused: boolean}) => (
  <GrmythancntstorriesIcon
    focused={focused}
    source={require('./assets/i/grmythancntstortbs1.png')}
  />
);

const grmythancntstorriesIconSaved = ({focused}: {focused: boolean}) => (
  <GrmythancntstorriesIcon
    focused={focused}
    source={require('./assets/i/grmythancntstortbs2.png')}
  />
);

const grmythancntstorriesIconMap = ({focused}: {focused: boolean}) => (
  <GrmythancntstorriesIcon
    focused={focused}
    source={require('./assets/i/grmythancntstortbs3.png')}
  />
);

const grmythancntstorriesIconBlog = ({focused}: {focused: boolean}) => (
  <GrmythancntstorriesIcon
    focused={focused}
    source={require('./assets/i/grmythancntstortbs4.png')}
  />
);

const grmythancntstorriesIconQuiz = ({focused}: {focused: boolean}) => (
  <GrmythancntstorriesIcon
    focused={focused}
    source={require('./assets/i/grmythancntstortbs5.png')}
  />
);

const grmythancntstorriesIconGallery = ({focused}: {focused: boolean}) => (
  <GrmythancntstorriesIcon
    focused={focused}
    source={require('./assets/i/grmythancntstortbs6.png')}
  />
);

const grmythancntstorriesButton = (props: Record<string, unknown>) => (
  <GrmythancntstorriesAnimatedButton {...props} />
);

const Grmythancntstorriestabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.grmythancntstorriesBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: grmythancntstorriesButton,
        tabBarBackground: grmythancntstorriesBarBackground,
      }}>
      <Tab.Screen
        name="Grmythancntstorriesstrs"
        component={Grmythancntstorriesstrs}
        options={{
          tabBarIcon: grmythancntstorriesIconPlaces,
        }}
      />
      <Tab.Screen
        name="Grmythancntstorriescollc"
        component={Grmythancntstorriescollc}
        options={{
          tabBarIcon: grmythancntstorriesIconSaved,
        }}
      />
      <Tab.Screen
        name="Grmythancntstorriesquz"
        component={Grmythancntstorriesquz}
        options={{
          tabBarIcon: grmythancntstorriesIconMap,
        }}
      />
      <Tab.Screen
        name="Grmythancntstorriessvd"
        component={Grmythancntstorriessvd}
        options={{
          tabBarIcon: grmythancntstorriesIconBlog,
        }}
      />
      <Tab.Screen
        name="Grmythancntstorriesquestn"
        component={Grmythancntstorriesquestn}
        options={{
          tabBarIcon: grmythancntstorriesIconQuiz,
        }}
      />
      <Tab.Screen
        name="Grmythancntstorriesfacts"
        component={Grmythancntstorriesfacts}
        options={{
          tabBarIcon: grmythancntstorriesIconGallery,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  grmythancntstorriesBar: {
    elevation: 0,
    paddingTop: 2,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 10,
    borderColor: '#FFFFFF14',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF14',
    backgroundColor: 'transparent',
    height: 90,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  grmythancntstorriesButton: {
    flex: 1,
  },
  grmythancntstorriesButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  grmythancntstorriesIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesIconSel: {
    position: 'absolute',
    top: -6,
  },
  grmythancntstorriesIconSelFocused: {
    zIndex: -1,
  },

  grmythancntstorriesIconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#805CB4',
  },
  grmythancntstorriesLabel: {
    fontSize: 9,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },
  grmythancntstorriesLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Grmythancntstorriestabs;
