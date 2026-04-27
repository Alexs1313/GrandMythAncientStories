import {
  grmythancntstorriesStories,
  type GrmythancntstorriesStory,
} from '../Grmythancntstorriesdata/Grmythancntstorriesstories';

import LinearGradient from 'react-native-linear-gradient';
import {useGrmythancntstorriesSaved} from '../Grmythancntstorriesstate/GrmythancntstorriesSavedProvider';

import React, {useMemo} from 'react';
import {
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';

type RouteParams = {
  storyId?: string;
};

const grmythancntstorriesFallbackImage: ImageSourcePropType = require('../../assets/i/grmythancnimg1.png');

const Grmythancntstorriesdtls = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {isSaved, toggleSaved} = useGrmythancntstorriesSaved();

  const story = useMemo<GrmythancntstorriesStory | undefined>(() => {
    const params = (route.params ?? {}) as RouteParams;
    return grmythancntstorriesStories.find(s => s.id === params.storyId);
  }, [route.params]);

  const grmythancntstorriesHandleShare = async () => {
    if (!story) {
      return;
    }
    const message = `${story.title}\n\n${story.shortDescription}\nReading time: ${story.readingTime}\n\n${story.content}`;
    try {
      await Share.share({message, title: story.title});
    } catch {
      console.log('err');
    }
  };

  return (
    <Grmythancntstorrieslayt bounces={false}>
      <View style={styles.grmythancntstorriesHeader}>
        <Pressable
          hitSlop={12}
          onPress={() => navigation.goBack()}
          style={styles.grmythancntstorriesHeaderBtn}>
          <Image source={require('../../assets/i/grmythancback.png')} />
          <Text style={styles.grmythancntstorriesHeaderBtnTextLabel}>Back</Text>
        </Pressable>

        <View>
          <View style={styles.grmythancntstorriesHeroWrap}>
            <Image
              source={story?.image ?? grmythancntstorriesFallbackImage}
              resizeMode="cover"
              style={styles.grmythancntstorriesHero}
            />
          </View>
          <View style={styles.grmythancntstorriesHeroIconsRow}>
            <Pressable
              hitSlop={12}
              onPress={grmythancntstorriesHandleShare}
              style={styles.grmythancntstorriesHeaderIconBtn}>
              <Image source={require('../../assets/i/grmythancnshr.png')} />
            </Pressable>
            <Pressable
              hitSlop={12}
              onPress={() => {
                if (story) {
                  toggleSaved(story.id);
                }
              }}
              style={styles.grmythancntstorriesHeaderIconBtn}>
              <Image
                source={
                  story && isSaved(story.id)
                    ? require('../../assets/i/grmythancnsaved.png')
                    : require('../../assets/i/grmythancsave.png')
                }
                style={styles.grmythancntstorriesSavedIcon}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.grmythancntstorriesMetaRow}>
        <View style={styles.grmythancntstorriesPill}>
          <Text style={styles.grmythancntstorriesPillText}>
            ⊕ {story?.category === 'Aztec' ? 'AZTEC LEGEND' : 'GREEK MYTH'}
          </Text>
        </View>
        <Text style={styles.grmythancntstorriesMetaText}>
          {story?.readingTime ?? ''}
        </Text>
      </View>

      <Text style={styles.grmythancntstorriesTitle}>
        {story?.title ?? 'Story'}
      </Text>
      <View style={styles.grmythancntstorriesTitleDividerWrap}>
        <LinearGradient
          colors={['#C89018', '#00000000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.grmythancntstorriesTitleDivider}
        />
        <Text style={styles.grmythancntstorriesTitleDiamond}>◈</Text>
      </View>

      <Text style={styles.grmythancntstorriesBody}>
        {story?.content ?? 'Story not found. Please go back and open it again.'}
      </Text>

      <View style={styles.grmythancntstorriesSpacer} />
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriesdtls;

const styles = StyleSheet.create({
  grmythancntstorriesPill: {
    paddingHorizontal: 14,
    height: 23,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A6030',
    backgroundColor: '#0A2814CC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  grmythancntstorriesHeader: {
    paddingTop: 64,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  grmythancntstorriesHeaderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 82,
    height: 36,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2A4830CC',
    backgroundColor: '#060D08B2',
    justifyContent: 'center',
  },
  grmythancntstorriesHeaderBtnText: {
    color: '#C89018',
    fontSize: 28,
    lineHeight: 28,
    marginTop: -2,
  },
  grmythancntstorriesHeaderBtnTextLabel: {
    color: '#C89018',
    fontSize: 14,
    fontWeight: '600',
  },
  grmythancntstorriesHeaderIconBtn: {
    width: 36,
    height: 36,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2A4830CC',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#060D08B2',
  },

  grmythancntstorriesHeroIconsRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 5,
  },
  grmythancntstorriesSavedIcon: {
    top: 2,
  },
  grmythancntstorriesSavedIconActive: {
    tintColor: '#D4A820',
  },

  grmythancntstorriesHeroWrap: {},
  grmythancntstorriesHero: {
    width: 170,
    height: 170,
    borderRadius: 12,
  },

  grmythancntstorriesMetaRow: {
    marginTop: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  grmythancntstorriesPillText: {
    color: '#6A9870',
    fontSize: 11,

    fontWeight: '600',
  },
  grmythancntstorriesMetaText: {
    color: '#FFFFFF59',
    fontSize: 12,
    fontWeight: '600',
  },

  grmythancntstorriesTitle: {
    marginTop: 24,
    paddingHorizontal: 18,
    color: '#D4A820',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesTitleDividerWrap: {
    marginBottom: 15,
  },
  grmythancntstorriesTitleDivider: {
    width: '100%',
    height: 1,
    marginTop: 12,
    marginHorizontal: 18,
  },
  grmythancntstorriesTitleDiamond: {
    color: '#C89018',
    position: 'absolute',
    top: 3,
    right: 18,
  },

  grmythancntstorriesBody: {
    marginTop: 12,
    paddingHorizontal: 18,
    color: '#CFE0CF',
    fontSize: 15,
    lineHeight: 22,
  },
  grmythancntstorriesSpacer: {
    height: 120,
  },
});
