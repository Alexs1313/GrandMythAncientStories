import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';
import {
  grmythancntstorriesStories,
  type GrmythancntstorriesStory,
  type GrmythancntstorriesStoryCategory,
} from '../Grmythancntstorriesdata/Grmythancntstorriesstories';

import {useGrmythancntstorriesSaved} from '../Grmythancntstorriesstate/GrmythancntstorriesSavedProvider';

import React, {useMemo, useState} from 'react';
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

type Filter = 'All' | GrmythancntstorriesStoryCategory;

const grmythancntstorriesFallbackImage: ImageSourcePropType = require('../../assets/i/grmythancnimg2.png');

const Grmythancntstorriesstrs = () => {
  const navigation = useNavigation();
  const [grmythancntstorriesFilter, setGrmythancntstorriesFilter] =
    useState<Filter>('All');
  const {isSaved, toggleSaved} = useGrmythancntstorriesSaved();

  const grmythancntstorriesList = useMemo(() => {
    if (grmythancntstorriesFilter === 'All') {
      return grmythancntstorriesStories;
    }
    return grmythancntstorriesStories.filter(
      s => s.category === grmythancntstorriesFilter,
    );
  }, [grmythancntstorriesFilter]);

  const grmythancntstorriesOpenStory = (story: GrmythancntstorriesStory) => {
    (navigation as any).navigate('Grmythancntstorriesdtls', {
      storyId: story.id,
    });
  };

  return (
    <Grmythancntstorrieslayt bounces={false}>
      <LinearGradient colors={['#060D08', '#0C1C12']} style={{flex: 1}}>
        <View style={styles.grmythancntstorriesTop}>
          <Text style={styles.grmythancntstorriesTitle}>STORIES</Text>

          <View style={styles.grmythancntstorriesFiltersRow}>
            <Pressable
              onPress={() => setGrmythancntstorriesFilter('All')}
              style={[
                styles.grmythancntstorriesFilterPill,
                grmythancntstorriesFilter === 'All' &&
                  styles.grmythancntstorriesFilterPillActive,
              ]}>
              <Text
                style={[
                  styles.grmythancntstorriesFilterText,
                  grmythancntstorriesFilter === 'All' &&
                    styles.grmythancntstorriesFilterTextActive,
                ]}>
                All{'\n'}Stories
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setGrmythancntstorriesFilter('Greek')}
              style={[
                styles.grmythancntstorriesFilterPill,
                grmythancntstorriesFilter === 'Greek' &&
                  styles.grmythancntstorriesFilterPillActive,
              ]}>
              <Text
                style={[
                  styles.grmythancntstorriesFilterText,
                  grmythancntstorriesFilter === 'Greek' &&
                    styles.grmythancntstorriesFilterTextActive,
                ]}>
                Greek{'\n'}Myths
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setGrmythancntstorriesFilter('Aztec')}
              style={[
                styles.grmythancntstorriesFilterPill,
                grmythancntstorriesFilter === 'Aztec' &&
                  styles.grmythancntstorriesFilterPillActive,
              ]}>
              <Text
                style={[
                  styles.grmythancntstorriesFilterText,
                  grmythancntstorriesFilter === 'Aztec' &&
                    styles.grmythancntstorriesFilterTextActive,
                ]}>
                Aztec{'\n'}Legends
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.grmythancntstorriesListWrap}>
        {grmythancntstorriesList.map(story => {
          const saved = isSaved(story.id);
          return (
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
                        style={styles.grmythancntstorriesReadBtn}>
                        <LinearGradient
                          colors={['#C89018', '#D4A820']}
                          style={styles.grmythancntstorriesReadBtnGrad}>
                          <Text style={styles.grmythancntstorriesReadBtnText}>
                            Read Story
                          </Text>
                        </LinearGradient>
                      </Pressable>

                      <View style={styles.grmythancntstorriesActions}>
                        <Pressable
                          hitSlop={10}
                          onPress={() => {
                            Share.share({
                              message: `${story.title}\n\n${story.shortDescription}\nReading time: ${story.readingTime}\n\n${story.content}`,
                              title: story.title,
                            });
                          }}
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
                            source={
                              saved
                                ? require('../../assets/i/grmythancnsaved.png')
                                : require('../../assets/i/grmythancsave.png')
                            }
                          />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.grmythancntstorriesSpacer} />
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriesstrs;

const styles = StyleSheet.create({
  grmythancntstorriesFilterPill: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#2A4830',
    backgroundColor: '#060D0850',
    justifyContent: 'center',
    alignItems: 'center',
  },

  grmythancntstorriesFilterPillActive: {
    borderColor: '#C89018',
    backgroundColor: '#C8901826',
  },
  grmythancntstorriesFilterText: {
    color: '#FFFFFF59',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 14,
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
  grmythancntstorriesFiltersRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },

  grmythancntstorriesFilterTextActive: {
    color: '#C89018',
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
  grmythancntstorriesCardDesc: {
    marginTop: 6,
    color: '#6A8870',
    fontSize: 12,
    lineHeight: 18,
    paddingRight: 6,
  },

  grmythancntstorriesCardBottomRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  grmythancntstorriesReadBtn: {
    width: 90,
  },
  grmythancntstorriesReadBtnGrad: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grmythancntstorriesReadBtnText: {
    color: '#060D08',
    fontSize: 11,
    fontWeight: '600',
  },
  grmythancntstorriesActions: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  grmythancntstorriesIconBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesIconText: {
    color: '#FFFFFF59',
    fontSize: 16,
    fontWeight: '700',
  },
  grmythancntstorriesIconTextSaved: {
    color: '#D4A820',
  },
  grmythancntstorriesSpacer: {
    height: 120,
  },
});
