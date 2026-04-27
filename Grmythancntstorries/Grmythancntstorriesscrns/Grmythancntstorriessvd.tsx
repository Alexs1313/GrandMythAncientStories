import {
  grmythancntstorriesStories,
  type GrmythancntstorriesStory,
} from '../Grmythancntstorriesdata/Grmythancntstorriesstories';
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
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';

const Grmythancntstorriessvd = () => {
  const grmythancntstorriesNavigation = useNavigation();
  const {savedIds, toggleSaved} = useGrmythancntstorriesSaved();

  const grmythancntstorriesSavedStories = useMemo(() => {
    const grmythancntstorriesIds = new Set(Object.keys(savedIds));
    return grmythancntstorriesStories.filter(s =>
      grmythancntstorriesIds.has(s.id),
    );
  }, [savedIds]);

  const grmythancntstorriesFallbackImage: ImageSourcePropType = require('../../assets/i/grmythancnimg2.png');

  const grmythancntstorriesOpenStory = (story: GrmythancntstorriesStory) => {
    (grmythancntstorriesNavigation as any).navigate('Grmythancntstorriesdtls', {
      storyId: story.id,
    });
  };

  const grmythancntstorriesShareStory = async (
    story: GrmythancntstorriesStory,
  ) => {
    const grmythancntstorriesMessage = `${story.title}\n\n${story.shortDescription}\nReading time: ${story.readingTime}\n\n${story.content}`;
    try {
      await Share.share({
        message: grmythancntstorriesMessage,
        title: story.title,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Grmythancntstorrieslayt bounces={false}>
      <LinearGradient
        colors={['#060D08', '#0C1C12']}
        style={styles.grmythancntstorriesHeaderBg}>
        <View style={styles.grmythancntstorriesTop}>
          <Text style={styles.grmythancntstorriesTitle}>FAVORITES</Text>
        </View>
      </LinearGradient>

      {grmythancntstorriesSavedStories.length === 0 ? (
        <View style={styles.grmythancntstorriesEmptyWrap}>
          <View style={styles.grmythancntstorriesEmptyCircle}>
            <Image source={require('../../assets/i/grmythancnosvd.png')} />
          </View>

          <Text style={styles.grmythancntstorriesEmptyTitle}>
            NO FAVORITES YET
          </Text>
          <Text style={styles.grmythancntstorriesEmptyDesc}>
            Save stories to read later and build your personal myth archive.
          </Text>

          <Pressable
            onPress={() =>
              (grmythancntstorriesNavigation as any).navigate(
                'Grmythancntstorriesstrs',
              )
            }
            style={[
              styles.grmythancntstorriesReadBtn,
              styles.grmythancntstorriesExploreBtn,
            ]}>
            <LinearGradient
              colors={['#C89018', '#D4A820']}
              style={styles.grmythancntstorriesReadBtnGrad}>
              <Text style={styles.grmythancntstorriesReadBtnText}>
                EXPLORE STORIES
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      ) : (
        <View style={styles.grmythancntstorriesListWrap}>
          {grmythancntstorriesSavedStories.map(story => (
            <Pressable
              key={story.id}
              onPress={() => grmythancntstorriesOpenStory(story)}
              style={styles.grmythancntstorriesCardOuter}>
              <LinearGradient
                colors={['#142818', '#102018']}
                style={styles.grmythancntstorriesCard}>
                <View style={styles.grmythancntstorriesCardRow}>
                  <Image
                    source={story.image ?? grmythancntstorriesFallbackImage}
                    style={styles.grmythancntstorriesCardImage}
                  />

                  <View style={styles.grmythancntstorriesCardContent}>
                    <View style={styles.grmythancntstorriesCardMetaRow}>
                      <View style={styles.grmythancntstorriesCardMetaLeft}>
                        <Text style={styles.grmythancntstorriesCardMetaCat}>
                          ⊕ {story.category === 'Aztec' ? 'AZTEC' : 'GREEK'}
                        </Text>
                        <Text style={styles.grmythancntstorriesCardMetaTime}>
                          {'  '}•{'  '}
                          {story.readingTime.replace('~', '')}
                        </Text>
                      </View>
                    </View>

                    <Text style={styles.grmythancntstorriesCardTitle}>
                      {story.title.toUpperCase()}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={styles.grmythancntstorriesCardDesc}>
                      {story.shortDescription}
                    </Text>

                    <View style={styles.grmythancntstorriesCardBottomRow}>
                      <Pressable
                        onPress={() => grmythancntstorriesOpenStory(story)}
                        style={{
                          width: 90,
                        }}>
                        <LinearGradient
                          colors={['#C89018', '#D4A820']}
                          style={{
                            height: 30,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#060D08',
                              fontSize: 11,
                              fontFamily: 'Cinzel-Bold',
                            }}>
                            Read Story
                          </Text>
                        </LinearGradient>
                      </Pressable>

                      <View style={styles.grmythancntstorriesActions}>
                        <Pressable
                          hitSlop={10}
                          onPress={() => grmythancntstorriesShareStory(story)}
                          style={styles.grmythancntstorriesIconBtn}>
                          <Image
                            source={require('../../assets/i/grmythancnshr.png')}
                          />
                        </Pressable>

                        <Pressable
                          hitSlop={10}
                          onPress={() => toggleSaved(story.id)}
                          style={styles.grmythancntstorriesIconBtn}>
                          <Image
                            source={require('../../assets/i/grmythancnsaved.png')}
                            style={{top: 2}}
                          />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      )}

      <View style={styles.grmythancntstorriesSpacer} />
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriessvd;

const styles = StyleSheet.create({
  grmythancntstorriesCardDesc: {
    marginTop: 6,
    color: '#6A8870',
    fontSize: 12.5,
    lineHeight: 18,
    paddingRight: 6,
  },
  grmythancntstorriesCardBottomRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },

  grmythancntstorriesTop: {
    paddingTop: 64,
    paddingHorizontal: 18,
    padding: 20,
  },

  grmythancntstorriesTitle: {
    color: '#D4A820',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
    letterSpacing: 1,
  },
  grmythancntstorriesHeaderBg: {
    minHeight: 140,
    justifyContent: 'flex-end',
  },

  grmythancntstorriesListWrap: {
    paddingHorizontal: 18,
    paddingTop: 16,
    gap: 14,
  },
  grmythancntstorriesCardOuter: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  grmythancntstorriesCard: {
    width: '100%',
  },
  grmythancntstorriesCardRow: {
    padding: 13,
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  grmythancntstorriesCardImage: {
    width: 74,
    height: 74,
    borderRadius: 12,
  },
  grmythancntstorriesCardContent: {
    flex: 1,
  },
  grmythancntstorriesCardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grmythancntstorriesCardMetaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grmythancntstorriesCardMetaCat: {
    color: '#6A9870',
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '800',
  },
  grmythancntstorriesCardMetaTime: {
    color: '#3A5040',
    fontSize: 11,
    fontWeight: '500',
  },
  grmythancntstorriesCardTitle: {
    marginTop: 6,
    color: '#D4A820',
    fontSize: 15,
    fontFamily: 'Cinzel-Bold',
  },

  grmythancntstorriesReadBtn: {
    flex: 1,
  },
  grmythancntstorriesExploreBtn: {
    width: '58%',
    flex: undefined,
  },
  grmythancntstorriesReadBtnGrad: {
    height: 47,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  grmythancntstorriesReadBtnText: {
    color: '#060D08',
    fontSize: 14,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesActions: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  grmythancntstorriesIconBtn: {},

  grmythancntstorriesEmptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  grmythancntstorriesEmptyCircle: {
    width: 140,
    height: 140,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: '#2A4830',
    backgroundColor: '#14281866',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  grmythancntstorriesEmptyIcon: {
    tintColor: '#6A8870',
    opacity: 0.6,
    width: 60,
    height: 60,
  },
  grmythancntstorriesEmptyTitle: {
    color: '#C89018',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
  },
  grmythancntstorriesEmptyDesc: {
    marginTop: 10,
    color: '#6A8870',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 20,
    width: '86%',
    marginBottom: 18,
  },

  grmythancntstorriesSpacer: {
    height: 120,
  },
});
