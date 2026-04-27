import {
  grmythancntstorriesStories,
  type GrmythancntstorriesStory,
} from '../Grmythancntstorriesdata/Grmythancntstorriesstories';

import React, {useCallback, useMemo, useState} from 'react';

import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';

type GrmythancntstorriesSurveyLetter = 'A' | 'B' | 'C' | 'D' | 'E';

type GrmythancntstorriesSurveyQuestion = {
  id: string;
  prompt: string;
  options: Array<{
    letter: GrmythancntstorriesSurveyLetter;
    label: string;
  }>;
};

const grmythancntstorriesSurveyQuestions: GrmythancntstorriesSurveyQuestion[] =
  [
    {
      id: 'q1',
      prompt: 'What kind of energy do you feel closer to?',
      options: [
        {letter: 'A', label: 'Calm and thoughtful'},
        {letter: 'B', label: 'Strong and powerful'},
        {letter: 'C', label: 'Mysterious and unpredictable'},
        {letter: 'D', label: 'Balanced and fair'},
        {letter: 'E', label: 'Creative and expressive'},
      ],
    },
    {
      id: 'q2',
      prompt: 'What attracts you more in a story?',
      options: [
        {letter: 'A', label: 'Wisdom and strategy'},
        {letter: 'B', label: 'Power and leadership'},
        {letter: 'C', label: 'Secrets and hidden truths'},
        {letter: 'D', label: 'Life, death, and meaning'},
        {letter: 'E', label: 'Art, light, and inspiration'},
      ],
    },
    {
      id: 'q3',
      prompt: 'How do you usually make decisions?',
      options: [
        {letter: 'A', label: 'I think everything through'},
        {letter: 'B', label: 'I act confidently and quickly'},
        {letter: 'C', label: 'I trust intuition'},
        {letter: 'D', label: 'I look for balance and fairness'},
        {letter: 'E', label: 'I follow inspiration'},
      ],
    },
    {
      id: 'q4',
      prompt: 'Which environment feels more like you?',
      options: [
        {letter: 'A', label: 'A quiet temple or library'},
        {letter: 'B', label: 'A stormy sky or battlefield'},
        {letter: 'C', label: 'Night, shadows, unknown places'},
        {letter: 'D', label: 'Nature, rain, or flowing water'},
        {letter: 'E', label: 'Light, music, and open space'},
      ],
    },
    {
      id: 'q5',
      prompt: 'What role would you choose in a myth?',
      options: [
        {letter: 'A', label: 'The strategist'},
        {letter: 'B', label: 'The ruler or warrior'},
        {letter: 'C', label: 'The mysterious observer'},
        {letter: 'D', label: 'The guide between worlds'},
        {letter: 'E', label: 'The creator or artist'},
      ],
    },
  ];

type GrmythancntstorriesSurveyPhase = 'intro' | 'question' | 'result';

const grmythancntstorriesStoryIdsByType: Record<
  GrmythancntstorriesSurveyLetter,
  [string, string]
> = {
  A: ['athena-born-of-wisdom', 'quetzalcoatl-feathered-serpent'],
  B: ['zeus-thunder-olympus', 'huitzilopochtli-eternal-war'],
  C: ['hermes-messenger-of-gods', 'tezcatlipoca-smoking-mirror'],
  D: ['hades-silent-kingdom', 'xolotl-underworld-journey'],
  E: ['apollo-light-of-truth', 'tlaloc-lord-of-rain'],
};

const Grmythancntstorriesquestn = () => {
  const grmythancntstorriesNavigation = useNavigation();

  const [grmythancntstorriesPhase, setGrmythancntstorriesPhase] =
    useState<GrmythancntstorriesSurveyPhase>('intro');
  const [grmythancntstorriesIndex, setGrmythancntstorriesIndex] = useState(0);
  const [grmythancntstorriesAnswers, setGrmythancntstorriesAnswers] = useState<
    Record<string, GrmythancntstorriesSurveyLetter>
  >({});

  const grmythancntstorriesCurrentQuestion =
    grmythancntstorriesSurveyQuestions[grmythancntstorriesIndex];

  const grmythancntstorriesProgressLabel = useMemo(
    () =>
      `${grmythancntstorriesIndex + 1} / ${
        grmythancntstorriesSurveyQuestions.length
      }`,
    [grmythancntstorriesIndex],
  );

  const grmythancntstorriesPick = (
    grmythancntstorriesLetter: GrmythancntstorriesSurveyLetter,
  ) => {
    if (!grmythancntstorriesCurrentQuestion) {
      return;
    }
    setGrmythancntstorriesAnswers(prev => ({
      ...prev,
      [grmythancntstorriesCurrentQuestion.id]: grmythancntstorriesLetter,
    }));
  };

  const grmythancntstorriesStart = () => {
    setGrmythancntstorriesPhase('question');
    setGrmythancntstorriesIndex(0);
    setGrmythancntstorriesAnswers({});
  };

  const grmythancntstorriesReset = () => {
    setGrmythancntstorriesPhase('intro');
    setGrmythancntstorriesIndex(0);
    setGrmythancntstorriesAnswers({});
  };

  const grmythancntstorriesNext = () => {
    if (!grmythancntstorriesCurrentQuestion) {
      return;
    }
    const picked =
      grmythancntstorriesAnswers[grmythancntstorriesCurrentQuestion.id];
    if (!picked) {
      return;
    }
    if (
      grmythancntstorriesIndex >=
      grmythancntstorriesSurveyQuestions.length - 1
    ) {
      setGrmythancntstorriesPhase('result');
      return;
    }
    setGrmythancntstorriesIndex(v => v + 1);
  };

  const grmythancntstorriesWinnerType = useMemo(() => {
    const counts: Record<GrmythancntstorriesSurveyLetter, number> = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    };
    for (const v of Object.values(grmythancntstorriesAnswers)) {
      counts[v] += 1;
    }
    const max = Math.max(...Object.values(counts));
    const leaders = (
      Object.keys(counts) as GrmythancntstorriesSurveyLetter[]
    ).filter(k => counts[k] === max);
    if (leaders.length === 1) {
      return leaders[0];
    }

    return grmythancntstorriesAnswers.q5 ?? leaders[0] ?? 'A';
  }, [grmythancntstorriesAnswers]);

  const grmythancntstorriesRecommendedStories = useMemo(() => {
    const [g, a] =
      grmythancntstorriesStoryIdsByType[grmythancntstorriesWinnerType];
    const wanted = new Set([g, a]);
    return grmythancntstorriesStories.filter(s => wanted.has(s.id));
  }, [grmythancntstorriesWinnerType]);

  const grmythancntstorriesOpenStory = (story: GrmythancntstorriesStory) => {
    (grmythancntstorriesNavigation as any).navigate('Grmythancntstorriesdtls', {
      storyId: story.id,
    });
  };

  const grmythancntstorriesShareStory = async (
    story: GrmythancntstorriesStory,
  ) => {
    const message = `${story.title}\n\n${story.shortDescription}\nReading time: ${story.readingTime}\n\n${story.content}`;
    try {
      await Share.share({title: story.title, message});
    } catch {
      // ignore
    }
  };

  useFocusEffect(
    useCallback(() => {
      setGrmythancntstorriesPhase('intro');
      setGrmythancntstorriesIndex(0);
      setGrmythancntstorriesAnswers({});
    }, []),
  );

  return (
    <Grmythancntstorrieslayt bounces={false}>
      <View style={styles.grmythancntstorriesWrap}>
        {grmythancntstorriesPhase === 'intro' ? (
          <View style={styles.grmythancntstorriesIntroWrap}>
            <LinearGradient
              colors={['rgb(2, 17, 6)', 'rgb(13, 33, 19)']}
              style={styles.grmythancntstorriesTopGradient}>
              <View style={styles.grmythancntstorriesTopBar}>
                <View>
                  <Text style={styles.grmythancntstorriesTopTitle}>
                    FIND YOUR MYTH
                  </Text>
                  <View style={styles.grmythancntstorriesTopUnderline} />
                </View>
              </View>
            </LinearGradient>

            <View style={styles.grmythancntstorriesIntroContent}>
              <Image
                source={require('../../assets/i/grmythanqstner.png')}
                style={{marginBottom: 30}}
              />

              <Text style={styles.grmythancntstorriesIntroTitle}>
                MYTH COMPASS
              </Text>
              <Text style={styles.grmythancntstorriesIntroDesc}>
                Let your choices guide you to the myths that resonate with who
                you are.
              </Text>

              <View style={styles.grmythancntstorriesStatsRow}>
                <View style={styles.grmythancntstorriesStat}>
                  <Text style={styles.grmythancntstorriesStatValue}>5</Text>
                  <Text style={styles.grmythancntstorriesStatLabel}>
                    Questions
                  </Text>
                </View>
                <View style={styles.grmythancntstorriesStat}>
                  <Text style={styles.grmythancntstorriesStatValue}>2</Text>
                  <Text style={styles.grmythancntstorriesStatLabel}>
                    Matches
                  </Text>
                </View>
                <View style={styles.grmythancntstorriesStat}>
                  <Text style={styles.grmythancntstorriesStatValue}>
                    QUICK{'\n'}RESULT
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={grmythancntstorriesStart}
                style={styles.grmythancntstorriesCta}>
                <LinearGradient
                  colors={['#C89018', '#D4A820']}
                  style={styles.grmythancntstorriesCtaGrad}>
                  <Text style={styles.grmythancntstorriesCtaText}>
                    START QUESTIONNAIRE
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}

        {grmythancntstorriesPhase === 'question' &&
        grmythancntstorriesCurrentQuestion ? (
          <View style={styles.grmythancntstorriesQWrap}>
            <LinearGradient
              colors={['rgb(13, 33, 19)', 'rgb(2, 17, 6)']}
              style={styles.grmythancntstorriesTopGradient}>
              <View style={styles.grmythancntstorriesTopBar}>
                <View>
                  <Text style={styles.grmythancntstorriesTopTitle}>
                    FIND YOUR MYTH
                  </Text>
                  <View style={styles.grmythancntstorriesTopUnderline} />
                </View>
                <View style={styles.grmythancntstorriesProgressPill}>
                  <Text style={styles.grmythancntstorriesProgressText}>
                    {grmythancntstorriesProgressLabel}
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <View style={styles.grmythancntstorriesQuestionContent}>
              <Text style={styles.grmythancntstorriesQuestion}>
                {grmythancntstorriesCurrentQuestion.prompt.toUpperCase()}
              </Text>

              <View style={styles.grmythancntstorriesOptions}>
                {grmythancntstorriesCurrentQuestion.options.map(opt => {
                  const picked =
                    grmythancntstorriesAnswers[
                      grmythancntstorriesCurrentQuestion.id
                    ] === opt.letter;
                  return (
                    <Pressable
                      key={`${grmythancntstorriesCurrentQuestion.id}-${opt.letter}`}
                      onPress={() => grmythancntstorriesPick(opt.letter)}
                      style={[
                        styles.grmythancntstorriesOption,
                        picked && styles.grmythancntstorriesOptionPicked,
                      ]}>
                      <LinearGradient
                        colors={
                          picked
                            ? ['#2A804059', '#1E502859']
                            : ['#142818', '#102018']
                        }
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.grmythancntstorriesOptionGrad}>
                        <View style={styles.grmythancntstorriesOptionRow}>
                          <View
                            style={[
                              styles.grmythancntstorriesOptionBadge,
                              picked && styles.grmythancntstorriesBadgePicked,
                            ]}>
                            <Text
                              style={styles.grmythancntstorriesOptionBadgeText}>
                              {opt.letter}
                            </Text>
                          </View>
                          <Text style={styles.grmythancntstorriesOptionText}>
                            {opt.label}
                          </Text>
                          {picked ? (
                            <Text style={styles.grmythancntstorriesPickedMark}>
                              ✓
                            </Text>
                          ) : null}
                        </View>
                      </LinearGradient>
                    </Pressable>
                  );
                })}
              </View>

              {grmythancntstorriesAnswers[
                grmythancntstorriesCurrentQuestion.id
              ] ? (
                <Pressable
                  onPress={grmythancntstorriesNext}
                  style={styles.grmythancntstorriesCta}>
                  <LinearGradient
                    colors={['#C89018', '#D4A820']}
                    style={styles.grmythancntstorriesCtaGrad}>
                    <Text style={styles.grmythancntstorriesCtaText}>
                      NEXT QUESTION
                    </Text>
                  </LinearGradient>
                </Pressable>
              ) : null}
            </View>
          </View>
        ) : null}

        {grmythancntstorriesPhase === 'result' ? (
          <View style={styles.grmythancntstorriesResultWrap}>
            <LinearGradient
              colors={['rgb(2, 17, 6)', 'rgb(13, 33, 19)']}
              style={styles.grmythancntstorriesTopGradient}>
              <View style={styles.grmythancntstorriesTopBar}>
                <View>
                  <Text style={styles.grmythancntstorriesTopTitle}>
                    FIND YOUR MYTH
                  </Text>
                  <View style={styles.grmythancntstorriesTopUnderline} />
                </View>
              </View>
            </LinearGradient>

            <View style={styles.grmythancntstorriesResultContent}>
              <Text style={styles.grmythancntstorriesResultTitle}>
                YOUR MYTH PATH
              </Text>
              <Text style={styles.grmythancntstorriesResultDesc}>
                Based on your answers, these stories reflect your mindset and
                energy. Start exploring and discover what resonates with you.
              </Text>

              <View style={styles.grmythancntstorriesCardsWrap}>
                {grmythancntstorriesRecommendedStories.map(story => (
                  <View
                    key={story.id}
                    style={styles.grmythancntstorriesCardOuter}>
                    <LinearGradient
                      colors={['#142818', '#102018']}
                      style={styles.grmythancntstorriesCard}>
                      <View style={styles.grmythancntstorriesCardRow}>
                        <Image
                          source={
                            story.image ??
                            require('../../assets/i/grmythancnimg2.png')
                          }
                          style={styles.grmythancntstorriesCardImage}
                        />
                        <View style={styles.grmythancntstorriesCardContent}>
                          <View style={styles.grmythancntstorriesCardMetaRow}>
                            <View
                              style={styles.grmythancntstorriesCardMetaLeft}>
                              <Text
                                style={styles.grmythancntstorriesCardMetaCat}>
                                ⊕{' '}
                                {story.category === 'Aztec' ? 'AZTEC' : 'GREEK'}
                              </Text>
                              <Text
                                style={styles.grmythancntstorriesCardMetaTime}>
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
                              onPress={() =>
                                grmythancntstorriesOpenStory(story)
                              }
                              style={styles.grmythancntstorriesReadBtn}>
                              <LinearGradient
                                colors={['#C89018', '#D4A820']}
                                style={styles.grmythancntstorriesReadBtnGrad}>
                                <Text
                                  style={styles.grmythancntstorriesReadBtnText}>
                                  Read Story
                                </Text>
                              </LinearGradient>
                            </Pressable>

                            <View style={styles.grmythancntstorriesActions}>
                              <Pressable
                                hitSlop={10}
                                onPress={() =>
                                  grmythancntstorriesShareStory(story)
                                }
                                style={styles.grmythancntstorriesIconBtn}>
                                <Image
                                  source={require('../../assets/i/grmythancnshr.png')}
                                />
                              </Pressable>
                              <Pressable
                                hitSlop={10}
                                onPress={() => {
                                  return;
                                }}
                                style={styles.grmythancntstorriesIconBtn}>
                                <Image
                                  source={require('../../assets/i/grmythancsave.png')}
                                />
                              </Pressable>
                            </View>
                          </View>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                ))}
              </View>

              <Pressable
                onPress={grmythancntstorriesReset}
                style={[
                  styles.grmythancntstorriesCta,
                  styles.grmythancntstorriesCtaNarrow,
                ]}>
                <LinearGradient
                  colors={['#C89018', '#D4A820']}
                  style={styles.grmythancntstorriesCtaGrad}>
                  <Text style={styles.grmythancntstorriesCtaText}>
                    TRY AGAIN
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}
      </View>
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriesquestn;

const styles = StyleSheet.create({
  grmythancntstorriesTopTitle: {
    color: '#D4A820',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesTopUnderline: {
    marginTop: 8,
    width: 34,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#D4A820',
  },

  grmythancntstorriesWrap: {
    flex: 1,
    paddingBottom: 130,
  },
  grmythancntstorriesTopGradient: {
    minHeight: 140,
    justifyContent: 'flex-end',
  },
  grmythancntstorriesTopBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 55,
    padding: 20,
  },

  grmythancntstorriesProgressPill: {
    height: 34,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#C8901852',
    backgroundColor: '#060D0880',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesProgressText: {
    color: '#D4A820',
    fontSize: 12,
    fontWeight: '700',
  },

  grmythancntstorriesIntroWrap: {
    flex: 1,
    paddingBottom: 40,
  },
  grmythancntstorriesIntroContent: {
    paddingHorizontal: 20,
    marginTop: 27,
    alignItems: 'center',
  },
  grmythancntstorriesIntroIconRing: {
    marginBottom: 22,
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: '#C8901866',
    borderRadius: 102,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesIntroIconInner: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: '#C8901833',
    backgroundColor: '#102018',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesIntroIcon: {
    color: '#D4A820',
    fontSize: 34,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesIntroTitle: {
    marginTop: 4,
    color: '#C89018',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
  },
  grmythancntstorriesIntroDesc: {
    marginTop: 10,
    color: '#6A8870',
    fontSize: 14.5,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 18,
    width: '94%',
  },
  grmythancntstorriesStatsRow: {
    marginTop: 48,
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  grmythancntstorriesStat: {
    flex: 1,
    minHeight: 68,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1A3020',
    backgroundColor: '#102018',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  grmythancntstorriesStatValue: {
    color: '#D4A820',
    fontSize: 16,
    fontFamily: 'Cinzel-Regular',
    textAlign: 'center',
  },

  grmythancntstorriesStatLabel: {
    marginTop: 6,
    color: '#6A8870',
    fontSize: 11,
    fontWeight: '600',
  },

  grmythancntstorriesQWrap: {
    flex: 1,
  },
  grmythancntstorriesQuestionContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  grmythancntstorriesQuestion: {
    marginTop: 30,
    color: '#E7D9B0',
    fontSize: 18,
    fontFamily: 'Cinzel-Bold',
    lineHeight: 26,
    letterSpacing: 0.4,
  },
  grmythancntstorriesOptions: {
    marginTop: 24,
    gap: 12,
  },
  grmythancntstorriesOption: {
    height: 54,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1A3020',
    overflow: 'hidden',
  },
  grmythancntstorriesOptionPicked: {
    borderColor: '#2A8040',
  },
  grmythancntstorriesOptionGrad: {
    flex: 1,
  },
  grmythancntstorriesOptionRow: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  grmythancntstorriesOptionBadge: {
    width: 28,
    height: 28,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#2A4830',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A483066',
  },
  grmythancntstorriesBadgePicked: {
    borderColor: '#2A8040',
  },
  grmythancntstorriesOptionBadgeText: {
    color: '#6A8870',
    fontSize: 12,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesOptionText: {
    flex: 1,
    color: '#8AA888',
    fontSize: 14,
    fontWeight: '400',
  },
  grmythancntstorriesPickedMark: {
    color: '#5CCA40',
    fontSize: 16,
    fontWeight: '900',
  },

  grmythancntstorriesCta: {
    marginTop: 18,
    width: '100%',
  },
  grmythancntstorriesCtaNarrow: {
    width: '96%',
    alignSelf: 'center',
  },
  grmythancntstorriesCtaGrad: {
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  grmythancntstorriesCtaText: {
    color: '#060D08',
    fontSize: 14,
    fontFamily: 'Cinzel-Bold',
    letterSpacing: 1.2,
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  grmythancntstorriesResultWrap: {
    flex: 1,
  },
  grmythancntstorriesResultContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  grmythancntstorriesResultTitle: {
    color: '#C89018',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
    marginTop: 10,
  },
  grmythancntstorriesResultDesc: {
    marginTop: 10,
    color: '#6A8870',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 15,
  },

  grmythancntstorriesCardsWrap: {
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
    fontWeight: '600',
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
    fontSize: 12.5,
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
    height: 34,
    borderRadius: 18,
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
});
