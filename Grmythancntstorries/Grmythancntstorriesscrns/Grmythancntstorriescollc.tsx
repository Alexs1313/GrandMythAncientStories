import {useFocusEffect} from '@react-navigation/native';
import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation-locker';

type GrmythancntstorriesHeroMythology = 'Greek Mythology' | 'Aztec Mythology';

type GrmythancntstorriesHero = {
  id: string;
  name: string;
  mythology: GrmythancntstorriesHeroMythology;
  subtitle: string;
  description: string;
  unlockAtPts: number;
  image?: ImageSourcePropType;
};

const grmythancntstorriesStorageKeyUnlocked =
  '@grmythancntstorries/collectionUnlockedHeroIds';
const grmythancntstorriesStorageKeyPoints = '@grmythancntstorries/userPoints';

const grmythancntstorriesFallbackHeroImage: ImageSourcePropType = require('../../assets/i/grmythancnimg1.png');

const grmythancntstorriesHeroes: GrmythancntstorriesHero[] = [
  {
    id: 'zeus',
    name: 'ZEUS',
    mythology: 'Greek Mythology',
    subtitle: 'King of Olympus',
    image: require('../../assets/i/grmythanqscoll1.png'),
    unlockAtPts: 0,
    description:
      'Ruler of all gods and mortals, Zeus commands the sky and wields the thunderbolt as a symbol of absolute authority. His victory over the Titans secured order in the world. Both feared and respected, his power shapes fate itself.',
  },
  {
    id: 'athena',
    name: 'ATHENA',
    mythology: 'Greek Mythology',
    image: require('../../assets/i/grmythanqscoll2.png'),
    subtitle: 'Goddess of Wisdom',
    unlockAtPts: 20,
    description:
      'Born from Zeus’s mind, Athena represents intelligence, strategy, and calm strength. She guides heroes through wisdom rather than force. Her presence brings clarity, even in the chaos of battle.',
  },
  {
    id: 'poseidon',
    name: 'POSEIDON',
    mythology: 'Greek Mythology',
    image: require('../../assets/i/grmythanqscoll3.png'),
    subtitle: 'God of the Sea',
    unlockAtPts: 40,
    description:
      'Master of oceans and storms, Poseidon controls the unpredictable power of the sea. With his trident, he can create waves or destroy entire fleets. His temper is as deep and powerful as the waters he rules.',
  },
  {
    id: 'hades',
    name: 'HADES',
    mythology: 'Greek Mythology',
    image: require('../../assets/i/grmythanqscoll4.png'),
    subtitle: 'Lord of the Underworld',
    unlockAtPts: 60,
    description:
      'Guardian of the realm of the dead, Hades maintains balance between life and afterlife. He is not evil, but strict and unyielding in his duty. His kingdom is silent, eternal, and unavoidable.',
  },
  {
    id: 'quetzalcoatl',
    name: 'QUETZALCOATL',
    mythology: 'Aztec Mythology',
    image: require('../../assets/i/grmythanqscoll5.png'),
    subtitle: 'Feathered Serpent',
    unlockAtPts: 0,
    description:
      'A symbol of knowledge and creation, Quetzalcoatl brought wisdom and life to humanity. He shaped civilization through learning and sacrifice. His presence represents growth, balance, and renewal.',
  },
  {
    id: 'huitzilopochtli',
    name: 'HUITZILOPOCHTLI',
    mythology: 'Aztec Mythology',
    image: require('../../assets/i/grmythanqscoll6.png'),
    subtitle: 'God of Sun and War',
    unlockAtPts: 30,
    description:
      'A fierce protector, he fights endlessly to keep the sun alive. His strength ensures the survival of the world through constant battle. He embodies power, sacrifice, and relentless energy.',
  },
  {
    id: 'tezcatlipoca',
    name: 'TEZCATLIPOCA',
    mythology: 'Aztec Mythology',
    image: require('../../assets/i/grmythanqscoll7.png'),
    subtitle: 'God of Illusion',
    unlockAtPts: 50,
    description:
      'Mysterious and unpredictable, Tezcatlipoca reveals truth through illusion and challenge. His presence tests both gods and humans. He represents fate, darkness, and hidden reality.',
  },
  {
    id: 'xolotl',
    name: 'XOLOTL',
    mythology: 'Aztec Mythology',
    image: require('../../assets/i/grmythanqscoll8.png'),
    subtitle: 'Guide of Souls',
    unlockAtPts: 70,
    description:
      'A guardian of transformation, Xolotl leads souls through the underworld. He accompanies the sun through darkness each night. His role reflects change, survival, and the journey beyond fear.',
  },
];

const grmythancntstorriesGroup = (
  grmythancntstorriesList: GrmythancntstorriesHero[],
) => {
  const greek = grmythancntstorriesList.filter(
    h => h.mythology === 'Greek Mythology',
  );
  const aztec = grmythancntstorriesList.filter(
    h => h.mythology === 'Aztec Mythology',
  );
  return {greek, aztec};
};

const Grmythancntstorriescollc = () => {
  const [grmythancntstorriesUnlockedIds, setGrmythancntstorriesUnlockedIds] =
    useState<Record<string, true>>({});
  const [grmythancntstorriesPoints, setGrmythancntstorriesPoints] =
    useState(31);
  const [
    grmythancntstorriesSelectedHeroId,
    setGrmythancntstorriesSelectedHeroId,
  ] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [rawUnlocked, rawPoints] = await Promise.all([
          AsyncStorage.getItem(grmythancntstorriesStorageKeyUnlocked),
          AsyncStorage.getItem(grmythancntstorriesStorageKeyPoints),
        ]);
        if (!alive) {
          return;
        }
        if (rawUnlocked) {
          const parsed = JSON.parse(rawUnlocked) as unknown;
          const ids = Array.isArray(parsed)
            ? parsed.filter((x): x is string => typeof x === 'string')
            : [];
          const map: Record<string, true> = {};
          for (const id of ids) {
            map[id] = true;
          }
          setGrmythancntstorriesUnlockedIds(map);
        }
        if (rawPoints && !Number.isNaN(Number(rawPoints))) {
          setGrmythancntstorriesPoints(Number(rawPoints));
        }
      } catch {
        console.log('error');
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const grmythancntstorriesPersistUnlocked = useCallback(
    async (grmythancntstorriesNext: Record<string, true>) => {
      try {
        await AsyncStorage.setItem(
          grmythancntstorriesStorageKeyUnlocked,
          JSON.stringify(Object.keys(grmythancntstorriesNext)),
        );
      } catch {
        console.log('error');
      }
    },
    [],
  );

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android' && !!grmythancntstorriesSelectedHero) {
        Orientation.lockToPortrait();
        return () => {
          Orientation.unlockAllOrientations();
        };
      }
    }, []),
  );

  const grmythancntstorriesIsUnlocked = useCallback(
    (grmythancntstorriesHero: GrmythancntstorriesHero) => {
      if (grmythancntstorriesHero.unlockAtPts === 0) {
        return true;
      }
      if (grmythancntstorriesUnlockedIds[grmythancntstorriesHero.id]) {
        return true;
      }
      return grmythancntstorriesPoints >= grmythancntstorriesHero.unlockAtPts;
    },
    [grmythancntstorriesPoints, grmythancntstorriesUnlockedIds],
  );

  const {greek: grmythancntstorriesGreek, aztec: grmythancntstorriesAztec} =
    useMemo(() => grmythancntstorriesGroup(grmythancntstorriesHeroes), []);

  const grmythancntstorriesUnlockedCount = useMemo(() => {
    return grmythancntstorriesHeroes.filter(h =>
      grmythancntstorriesIsUnlocked(h),
    ).length;
  }, [grmythancntstorriesIsUnlocked]);

  const grmythancntstorriesNextLocked = useMemo(() => {
    const locked = grmythancntstorriesHeroes
      .filter(h => !grmythancntstorriesIsUnlocked(h))
      .sort((a, b) => a.unlockAtPts - b.unlockAtPts);
    return locked[0];
  }, [grmythancntstorriesIsUnlocked]);

  const grmythancntstorriesSelectedHero = useMemo(() => {
    if (!grmythancntstorriesSelectedHeroId) {
      return null;
    }
    return (
      grmythancntstorriesHeroes.find(
        h => h.id === grmythancntstorriesSelectedHeroId,
      ) ?? null
    );
  }, [grmythancntstorriesSelectedHeroId]);

  const grmythancntstorriesOpenHero = (
    grmythancntstorriesHero: GrmythancntstorriesHero,
  ) => {
    if (
      grmythancntstorriesHero.unlockAtPts > 0 &&
      grmythancntstorriesPoints >= grmythancntstorriesHero.unlockAtPts
    ) {
      setGrmythancntstorriesUnlockedIds(prev => {
        const next: Record<string, true> = {
          ...prev,
          [grmythancntstorriesHero.id]: true,
        };
        grmythancntstorriesPersistUnlocked(next);
        return next;
      });
    }
    setGrmythancntstorriesSelectedHeroId(grmythancntstorriesHero.id);
  };

  const grmythancntstorriesCloseHero = () => {
    setGrmythancntstorriesSelectedHeroId(null);
  };

  const grmythancntstorriesRenderSection = (
    grmythancntstorriesTitle: string,
    grmythancntstorriesItems: GrmythancntstorriesHero[],
  ) => {
    const total = grmythancntstorriesItems.length;
    const unlocked = grmythancntstorriesItems.filter(h =>
      grmythancntstorriesIsUnlocked(h),
    ).length;

    return (
      <View style={styles.grmythancntstorriesSection}>
        <View style={styles.grmythancntstorriesSectionHeader}>
          <Text style={styles.grmythancntstorriesSectionTitle}>
            {grmythancntstorriesTitle}
          </Text>
          <Text style={styles.grmythancntstorriesSectionCount}>
            {unlocked}/{total}
          </Text>
        </View>
        <View style={styles.grmythancntstorriesGrid}>
          {grmythancntstorriesItems.map(h => {
            const isUnlocked = grmythancntstorriesIsUnlocked(h);
            return (
              <Pressable
                key={h.id}
                disabled={!isUnlocked}
                onPress={() => grmythancntstorriesOpenHero(h)}
                style={[
                  styles.grmythancntstorriesCardOuter,
                  isUnlocked && styles.grmythancntstorriesCardOuterUnlocked,
                  !isUnlocked && styles.grmythancntstorriesCardOuterDisabled,
                ]}>
                <LinearGradient
                  colors={['#142818', '#102018']}
                  style={styles.grmythancntstorriesCard}>
                  <View style={styles.grmythancntstorriesCardPad}>
                    {!isUnlocked ? (
                      <View style={styles.grmythancntstorriesLockedCircle}>
                        <Image
                          source={require('../../assets/i/grmythanqslock.png')}
                        />
                      </View>
                    ) : (
                      <Image
                        source={h.image ?? grmythancntstorriesFallbackHeroImage}
                        style={styles.grmythancntstorriesCardHero}
                      />
                    )}

                    <Text
                      style={[
                        styles.grmythancntstorriesCardName,
                        !isUnlocked && styles.grmythancntstorriesCardNameLocked,
                      ]}>
                      {h.name}
                    </Text>
                    <Text
                      style={[
                        styles.grmythancntstorriesCardSub,
                        !isUnlocked && styles.grmythancntstorriesCardSubLocked,
                      ]}>
                      {h.subtitle}
                    </Text>

                    {!isUnlocked ? (
                      <View style={styles.grmythancntstorriesLockPill}>
                        <Text style={styles.grmythancntstorriesLockPillText}>
                          🔒 {h.unlockAtPts} PTS
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </LinearGradient>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Grmythancntstorrieslayt bounces={false}>
      <LinearGradient
        colors={['rgb(2, 17, 6)', 'rgb(13, 33, 19)']}
        style={styles.grmythancntstorriesHeaderBg}>
        <View style={styles.grmythancntstorriesTop}>
          <View style={styles.grmythancntstorriesTopRow}>
            <View>
              <Text style={styles.grmythancntstorriesTitle}>COLLECTION</Text>
              <View style={styles.grmythancntstorriesTopUnderline} />
            </View>
            <Text style={styles.grmythancntstorriesUnlockedCount}>
              <Text style={styles.grmythancntstorriesUnlockedCountValue}>
                {[grmythancntstorriesUnlockedCount]}/
                {grmythancntstorriesHeroes.length}
                {'\n'}
              </Text>
              unlocked
            </Text>
          </View>

          <View style={styles.grmythancntstorriesPointsRow}>
            <Text style={styles.grmythancntstorriesPointsLabel}>
              Your points
            </Text>
            <View style={styles.grmythancntstorriesPointsInlineRow}>
              <View style={styles.grmythancntstorriesPointsPill}>
                <Text style={styles.grmythancntstorriesPointsPillText}>
                  {grmythancntstorriesPoints} PTS
                </Text>
              </View>
              {grmythancntstorriesNextLocked ? (
                <Text style={styles.grmythancntstorriesNextUnlock}>
                  → {grmythancntstorriesNextLocked.unlockAtPts} to unlock{' '}
                  {grmythancntstorriesNextLocked.name}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </LinearGradient>

      {grmythancntstorriesRenderSection('GREEK GODS', grmythancntstorriesGreek)}
      {grmythancntstorriesRenderSection(
        'AZTEC LEGENDS',
        grmythancntstorriesAztec,
      )}

      <View style={styles.grmythancntstorriesSpacer} />

      <Modal
        statusBarTranslucent={Platform.OS === 'android'}
        transparent
        visible={!!grmythancntstorriesSelectedHero}
        animationType="fade"
        onRequestClose={grmythancntstorriesCloseHero}>
        <Pressable
          style={styles.grmythancntstorriesModalBackdrop}
          onPress={grmythancntstorriesCloseHero}
        />
        <View style={styles.grmythancntstorriesSheet}>
          {grmythancntstorriesSelectedHero ? (
            <LinearGradient
              colors={['#142818', '#0F1C14']}
              style={styles.grmythancntstorriesModalInner}>
              <View style={styles.grmythancntstorriesModalContent}>
                <View style={styles.grmythancntstorriesSheetHandle} />
                <View style={styles.grmythancntstorriesModalHeaderRow}>
                  <View style={styles.grmythancntstorriesModalHeroImgWrap}>
                    <Image
                      source={
                        grmythancntstorriesSelectedHero.image ??
                        grmythancntstorriesFallbackHeroImage
                      }
                      style={styles.grmythancntstorriesModalHeroImg}
                    />
                  </View>

                  <View style={styles.grmythancntstorriesModalHeaderText}>
                    <Text style={styles.grmythancntstorriesModalMythology}>
                      {grmythancntstorriesSelectedHero.mythology.toUpperCase()}
                    </Text>
                    <Text style={styles.grmythancntstorriesModalName}>
                      {grmythancntstorriesSelectedHero.name}
                    </Text>
                    <Text style={styles.grmythancntstorriesModalSub}>
                      {grmythancntstorriesSelectedHero.subtitle}
                    </Text>

                    {grmythancntstorriesIsUnlocked(
                      grmythancntstorriesSelectedHero,
                    ) ? (
                      <View style={styles.grmythancntstorriesUnlockedPill}>
                        <Text
                          style={styles.grmythancntstorriesUnlockedPillText}>
                          ✓ UNLOCKED
                        </Text>
                      </View>
                    ) : (
                      <View style={styles.grmythancntstorriesLockPillModal}>
                        <Text style={styles.grmythancntstorriesLockPillText}>
                          🔒 LOCKED •{' '}
                          {grmythancntstorriesSelectedHero.unlockAtPts} PTS
                        </Text>
                      </View>
                    )}
                  </View>
                </View>

                <Image
                  source={require('../../assets/i/grmythanqsline.png')}
                  style={styles.grmythancntstorriesModalDivider}
                />

                <Text style={styles.grmythancntstorriesModalDesc}>
                  {grmythancntstorriesSelectedHero.description}
                </Text>
              </View>
            </LinearGradient>
          ) : null}
        </View>
      </Modal>
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriescollc;

const styles = StyleSheet.create({
  grmythancntstorriesTopUnderline: {
    marginTop: 8,
    width: 64,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#D4A820',
  },

  grmythancntstorriesUnlockedCount: {
    color: '#6A8870',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
    marginTop: 2,
  },
  grmythancntstorriesHeaderBg: {
    flex: 1,
  },
  grmythancntstorriesTop: {
    paddingTop: 64,
    paddingHorizontal: 18,
    padding: 20,
  },
  grmythancntstorriesTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  grmythancntstorriesTitle: {
    color: '#D4A820',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
    letterSpacing: 1,
  },

  grmythancntstorriesUnlockedCountValue: {
    color: '#D4A820',
    fontFamily: 'Cinzel-Bold',
    fontSize: 14,
  },

  grmythancntstorriesPointsRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  grmythancntstorriesPointsInlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  grmythancntstorriesPointsLabel: {
    color: '#6A8870',
    fontSize: 12,
    fontWeight: '500',
  },
  grmythancntstorriesPointsPill: {
    height: 34,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C8901866',
    backgroundColor: '#C8901826',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesPointsPillText: {
    color: '#D4A820',
    fontSize: 12,
    fontFamily: 'Cinzel-Bold',
  },

  grmythancntstorriesNextUnlock: {
    color: '#6A8870',
    fontSize: 12,
    fontWeight: '500',
  },

  grmythancntstorriesSection: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  grmythancntstorriesSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  grmythancntstorriesSectionTitle: {
    color: '#6A8870',
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '700',
  },
  grmythancntstorriesSectionCount: {
    color: '#3A5040',
    fontSize: 12,
    fontWeight: '600',
  },

  grmythancntstorriesSpacer: {
    height: 120,
  },

  grmythancntstorriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  grmythancntstorriesCardOuter: {
    width: '47.5%',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1A3020',
  },
  grmythancntstorriesCardOuterUnlocked: {
    borderColor: '#C8901880',
  },
  grmythancntstorriesCardOuterDisabled: {
    opacity: 0.7,
  },
  grmythancntstorriesCard: {
    minHeight: 210,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesCardPad: {
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesCardHero: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  grmythancntstorriesLockedCircle: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: '#2A4830',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#0C1C12',
  },
  grmythancntstorriesLockedIcon: {
    fontSize: 18,
    opacity: 0.7,
  },
  grmythancntstorriesCardName: {
    color: '#D4A820',
    fontSize: 14,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
  },
  grmythancntstorriesCardNameLocked: {
    color: '#3A5040',
  },
  grmythancntstorriesCardSub: {
    marginTop: 6,
    color: '#6A8870',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
  },
  grmythancntstorriesCardSubLocked: {
    color: '#2E4033',
  },
  grmythancntstorriesLockPill: {
    marginTop: 10,
    height: 38,
    width: 85,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1A3020',
    backgroundColor: '#060D0866',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesLockPillModal: {
    marginTop: 8,
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1A3020',
    backgroundColor: '#060D0866',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  grmythancntstorriesLockPillText: {
    color: '#6A8870',
    fontSize: 11,
    fontWeight: '700',
  },

  grmythancntstorriesUnlockedPill: {
    marginTop: 8,
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2A8040',
    backgroundColor: '#2A804033',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  grmythancntstorriesUnlockedPillText: {
    color: '#6AC070',
    fontSize: 11,
    fontFamily: 'Cinzel-Regular',
  },

  grmythancntstorriesModalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000066',
  },
  grmythancntstorriesSheet: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 12,
  },
  grmythancntstorriesSheetHandle: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#FFFFFF2B',
    alignSelf: 'center',
    marginBottom: 10,
  },
  grmythancntstorriesModalContent: {
    padding: 24,
  },
  grmythancntstorriesModalDivider: {
    width: '100%',
    marginTop: 54,
    marginBottom: 20,
  },
  grmythancntstorriesModalInner: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#C8901833',
    minHeight: 400,
    alignSelf: 'center',
  },
  grmythancntstorriesModalHeaderRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
    marginTop: 10,
  },
  grmythancntstorriesModalHeroImgWrap: {
    width: 114,
    height: 114,
  },
  grmythancntstorriesModalHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  grmythancntstorriesModalHeaderText: {
    flex: 1,
  },
  grmythancntstorriesModalMythology: {
    color: '#6A8870',
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: '700',
  },
  grmythancntstorriesModalName: {
    marginTop: 8,
    color: '#D4A820',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesModalSub: {
    marginTop: 4,
    color: '#6A8870',
    fontSize: 13,
    fontWeight: '500',
  },
  grmythancntstorriesModalDesc: {
    color: '#C8D8C0',
    fontSize: 14,
    lineHeight: 20,
  },
});
