import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';

import {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const grmythancntstorriesData = [
  {
    id: 1,
    image: require('../../assets/i/grmythancnimg1.png'),
    title: 'Enter the World of Myths',
    description:
      'Discover stories from the greatest ancient civilizations ever known.',
  },
  {
    id: 2,
    image: require('../../assets/i/grmythancnimg2.png'),
    title: 'Two Worlds, One Journey',
    description:
      'Explore the gods of ancient Greece and the mysteries of Aztec legends.',
  },
  {
    id: 3,
    image: require('../../assets/i/grmythancnimg3.png'),
    title: 'Read & Answer',
    description:
      'Every story ends with questions that test your knowledge and gets you points.',
  },
  {
    id: 4,
    image: require('../../assets/i/grmythancnimg4.png'),
    title: 'Unlock Characters',
    description:
      'Receive points by reading and answering. Unlock mythological heroes to collect.',
  },
  {
    id: 5,
    image: require('../../assets/i/grmythancnimg5.png'),
    title: 'Find Stories for You',
    description:
      'Complete a quick survey and receive personalized story recommendations.',
  },
];

const Grmythancntstorriesonb = () => {
  const [grmythancntstorriesindex, setGrmythancntstorriesindex] = useState(0);
  const navigation = useNavigation();

  const grmythancntstorrieshandleNext = () => {
    if (grmythancntstorriesindex < 4) {
      setGrmythancntstorriesindex(grmythancntstorriesindex + 1);
    } else {
      navigation.navigate('Grnmythancntstorriestabs' as never);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/i/grmythancntlay.png')}
      style={styles.grmythancntstorriesonbcontainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.grmythancntstorriescontent}>
          <TouchableOpacity
            style={styles.grmythancntstorriesskipbutton}
            onPress={() =>
              navigation.navigate('Grnmythancntstorriestabs' as never)
            }>
            <Text style={styles.grmythancntstorriesskipbuttontext}>Skip</Text>
          </TouchableOpacity>

          <Image
            source={grmythancntstorriesData[grmythancntstorriesindex].image}
            style={{marginTop: 30, width: '100%', resizeMode: 'contain'}}
          />
          <View style={styles.grmythancntstorripagination}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <View
                key={item}
                style={
                  grmythancntstorriesindex === index
                    ? styles.grmythancntstorripaginationitemactive
                    : styles.grmythancntstorripaginationiteminactive
                }
              />
            ))}
          </View>

          <Text style={styles.grmythancntstorriestext}>
            {grmythancntstorriesData[grmythancntstorriesindex].title}
          </Text>
          <Text style={styles.grmythancntstorriesdescription}>
            {grmythancntstorriesData[grmythancntstorriesindex].description}
          </Text>

          <TouchableOpacity
            onPress={grmythancntstorrieshandleNext}
            activeOpacity={0.8}
            style={{width: '88%', alignSelf: 'center', marginTop: 24}}>
            <LinearGradient
              colors={['#C89018', '#D4A820']}
              style={styles.grmythancntstorriesbuttongradient}>
              <Text style={styles.grmythancntstorriesbuttontext}>
                {grmythancntstorriesindex === 4 ? 'Get Started' : 'Next'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  grmythancntstorripagination: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
    marginTop: 25,
  },
  grmythancntstorripaginationitem: {
    width: 10,
    height: 10,
  },

  grmythancntstorriesonbcontainer: {
    flex: 1,
  },
  grmythancntstorriescontent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  grmythancntstorriestext: {
    color: '#D4A820',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
    width: '80%',
  },

  grmythancntstorriesdescription: {
    color: '#8AA888',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 12,
    width: '80%',
    lineHeight: 22,
  },

  grmythancntstorriesbuttontext: {
    color: '#060D08',
    fontSize: 15,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
  },
  grmythancntstorriesbuttongradient: {
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },

  grmythancntstorripaginationitemactive: {
    width: 24,
    height: 6,
    backgroundColor: '#C89018',
    borderRadius: 5,
  },
  grmythancntstorripaginationiteminactive: {
    width: 6,
    height: 6,
    backgroundColor: '#1A3020',
    borderRadius: 5,
  },
  grmythancntstorriesskipbutton: {
    position: 'absolute',
    top: 70,
    right: 25,
    zIndex: 1,
  },
  grmythancntstorriesskipbuttontext: {
    color: '#FFFFFF',
  },
});

export default Grmythancntstorriesonb;
