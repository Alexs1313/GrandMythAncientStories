import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';
import {useFocusEffect} from '@react-navigation/native';

import React, {useCallback, useMemo, useState} from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Category = 'Greek' | 'Aztec';

type QuizQuestion = {
  id: string;
  category: Category;
  prompt: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
};

const grmythancntstorriesAllQuestions: QuizQuestion[] = [
  {
    id: 'g-01',
    category: 'Greek',
    prompt: 'Who is the god of thunder in Greek mythology?',
    options: ['Zeus', 'Apollo', 'Hermes'],
    correctIndex: 0,
  },
  {
    id: 'g-02',
    category: 'Greek',
    prompt: 'From where was Athena born?',
    options: ['Zeus’s head', 'The sea', 'A temple'],
    correctIndex: 0,
  },
  {
    id: 'g-03',
    category: 'Greek',
    prompt: 'What weapon does Poseidon use?',
    options: ['Sword', 'Trident', 'Bow'],
    correctIndex: 1,
  },
  {
    id: 'g-04',
    category: 'Greek',
    prompt: 'Who rules the underworld?',
    options: ['Zeus', 'Hades', 'Ares'],
    correctIndex: 1,
  },
  {
    id: 'g-05',
    category: 'Greek',
    prompt: 'What instrument is Apollo known for?',
    options: ['Flute', 'Lyre', 'Drum'],
    correctIndex: 1,
  },
  {
    id: 'g-06',
    category: 'Greek',
    prompt: 'What does Athena represent?',
    options: ['War chaos', 'Wisdom', 'Fire'],
    correctIndex: 1,
  },
  {
    id: 'g-07',
    category: 'Greek',
    prompt: 'What is the symbol of Athena?',
    options: ['Eagle', 'Owl', 'Snake'],
    correctIndex: 1,
  },
  {
    id: 'g-08',
    category: 'Greek',
    prompt: 'Where do Greek gods live?',
    options: ['Athens', 'Mount Olympus', 'Delphi'],
    correctIndex: 1,
  },
  {
    id: 'g-09',
    category: 'Greek',
    prompt: 'Who is the messenger of the gods?',
    options: ['Hermes', 'Apollo', 'Hades'],
    correctIndex: 0,
  },
  {
    id: 'g-10',
    category: 'Greek',
    prompt: 'What does lightning symbolize for Zeus?',
    options: ['Fear', 'Authority', 'Music'],
    correctIndex: 1,
  },
  {
    id: 'a-01',
    category: 'Aztec',
    prompt: 'Who is known as the Feathered Serpent?',
    options: ['Tezcatlipoca', 'Quetzalcoatl', 'Xolotl'],
    correctIndex: 1,
  },
  {
    id: 'a-02',
    category: 'Aztec',
    prompt: 'What did Quetzalcoatl bring to humans?',
    options: ['War', 'Knowledge', 'Fire'],
    correctIndex: 1,
  },
  {
    id: 'a-03',
    category: 'Aztec',
    prompt: 'Who is the god of rain in Aztec mythology?',
    options: ['Tlaloc', 'Xolotl', 'Ares'],
    correctIndex: 0,
  },
  {
    id: 'a-04',
    category: 'Aztec',
    prompt: 'What does Tezcatlipoca use?',
    options: ['Sword', 'Mirror', 'Shield'],
    correctIndex: 1,
  },
  {
    id: 'a-05',
    category: 'Aztec',
    prompt: 'Who guides the sun through the night?',
    options: ['Xolotl', 'Zeus', 'Apollo'],
    correctIndex: 0,
  },
  {
    id: 'm-01',
    category: 'Aztec',
    prompt: 'What does the Aztec calendar represent?',
    options: ['War', 'Time cycles', 'Music'],
    correctIndex: 1,
  },
  {
    id: 'm-02',
    category: 'Aztec',
    prompt: 'What did Aztecs believe kept the sun moving?',
    options: ['Wind', 'Sacrifice', 'Fire'],
    correctIndex: 1,
  },
  {
    id: 'g-11',
    category: 'Greek',
    prompt: 'What animal is linked to Athena?',
    options: ['Owl', 'Horse', 'Wolf'],
    correctIndex: 0,
  },
  {
    id: 'g-12',
    category: 'Greek',
    prompt: 'Who competed with Athena for a city?',
    options: ['Apollo', 'Poseidon', 'Hermes'],
    correctIndex: 1,
  },
  {
    id: 'g-13',
    category: 'Greek',
    prompt: 'What did Poseidon create in the contest?',
    options: ['Fire', 'Salt water spring', 'Tree'],
    correctIndex: 1,
  },
  {
    id: 'g-14',
    category: 'Greek',
    prompt: 'What does Hades represent?',
    options: ['War', 'Death realm', 'Light'],
    correctIndex: 1,
  },
  {
    id: 'g-15',
    category: 'Greek',
    prompt: 'What does Apollo represent?',
    options: ['Darkness', 'Light and truth', 'Chaos'],
    correctIndex: 1,
  },
  {
    id: 'g-16',
    category: 'Greek',
    prompt: 'What is Mount Olympus?',
    options: ['City', 'Home of gods', 'Temple'],
    correctIndex: 1,
  },
  {
    id: 'm-03',
    category: 'Greek',
    prompt: 'What do myths often explain?',
    options: ['Sports', 'Natural events', 'Technology'],
    correctIndex: 1,
  },
  {
    id: 'm-04',
    category: 'Aztec',
    prompt: 'What is the role of rituals?',
    options: ['Decoration', 'Communication with gods', 'Entertainment'],
    correctIndex: 1,
  },
  {
    id: 'm-05',
    category: 'Greek',
    prompt: 'What does duality mean in myths?',
    options: ['Random events', 'Balance of opposites', 'One truth'],
    correctIndex: 1,
  },
  {
    id: 'm-06',
    category: 'Greek',
    prompt: 'What do heroes often face?',
    options: ['Easy tasks', 'Trials', 'Nothing'],
    correctIndex: 1,
  },
  {
    id: 'g-17',
    category: 'Greek',
    prompt: 'What did Athena give to people?',
    options: ['Weapons', 'Knowledge', 'Gold'],
    correctIndex: 1,
  },
  {
    id: 'm-07',
    category: 'Greek',
    prompt: 'What happens in the underworld rivers?',
    options: ['Travel between cities', 'Souls cross', 'Gods fight'],
    correctIndex: 1,
  },
  {
    id: 'm-08',
    category: 'Greek',
    prompt: 'What does lightning represent?',
    options: ['Calm', 'Power', 'Silence'],
    correctIndex: 1,
  },
  {
    id: 'g-18',
    category: 'Greek',
    prompt: 'Who is associated with chaos in war?',
    options: ['Athena', 'Ares', 'Apollo'],
    correctIndex: 1,
  },
  {
    id: 'a-06',
    category: 'Aztec',
    prompt: 'What is the purpose of Aztec pyramids?',
    options: ['Houses', 'Rituals', 'Markets'],
    correctIndex: 1,
  },
  {
    id: 'a-07',
    category: 'Aztec',
    prompt: 'What does Xolotl represent?',
    options: ['Music', 'Transformation', 'Wind'],
    correctIndex: 1,
  },
  {
    id: 'a-08',
    category: 'Aztec',
    prompt: 'What does Tezcatlipoca test?',
    options: ['Strength only', 'True nature', 'Speed'],
    correctIndex: 1,
  },
  {
    id: 'g-19',
    category: 'Greek',
    prompt: 'What did Apollo control through the oracle?',
    options: ['Weather', 'Prophecy', 'Fire'],
    correctIndex: 1,
  },
  {
    id: 'g-20',
    category: 'Greek',
    prompt: 'What does the owl symbolize?',
    options: ['Strength', 'Wisdom', 'Speed'],
    correctIndex: 1,
  },
  {
    id: 'm-09',
    category: 'Greek',
    prompt: 'What do myths say about destiny?',
    options: ['It doesn’t exist', 'It guides events', 'It changes randomly'],
    correctIndex: 1,
  },
  {
    id: 'g-21',
    category: 'Greek',
    prompt: 'What is the main trait of Hermes?',
    options: ['Strength', 'Speed and cleverness', 'Silence'],
    correctIndex: 1,
  },
  {
    id: 'a-09',
    category: 'Aztec',
    prompt: 'What do Aztec myths emphasize?',
    options: ['Wealth', 'Balance and sacrifice', 'Isolation'],
    correctIndex: 1,
  },
  {
    id: 'm-10',
    category: 'Greek',
    prompt: 'What is the main idea of many myths?',
    options: ['Entertainment only', 'Explaining life and world', 'War only'],
    correctIndex: 1,
  },
];

const grmythancntstorriesPickRandom = <T,>(
  grmythancntstorriesItems: T[],
  grmythancntstorriesN: number,
) => {
  const grmythancntstorriesArr = [...grmythancntstorriesItems];
  for (
    let grmythancntstorriesI = grmythancntstorriesArr.length - 1;
    grmythancntstorriesI > 0;
    grmythancntstorriesI--
  ) {
    const grmythancntstorriesJ = Math.floor(
      Math.random() * (grmythancntstorriesI + 1),
    );
    [
      grmythancntstorriesArr[grmythancntstorriesI],
      grmythancntstorriesArr[grmythancntstorriesJ],
    ] = [
      grmythancntstorriesArr[grmythancntstorriesJ],
      grmythancntstorriesArr[grmythancntstorriesI],
    ];
  }
  return grmythancntstorriesArr.slice(
    0,
    Math.min(grmythancntstorriesN, grmythancntstorriesArr.length),
  );
};

type Phase = 'intro' | 'question' | 'result';

const Grmythancntstorriesquz = () => {
  const [grmythancntstorriesPhase, setGrmythancntstorriesPhase] =
    useState<Phase>('intro');
  const [grmythancntstorriesQuestions, setGrmythancntstorriesQuestions] =
    useState<QuizQuestion[]>(() =>
      grmythancntstorriesPickRandom(grmythancntstorriesAllQuestions, 10),
    );
  const [grmythancntstorriesIndex, setGrmythancntstorriesIndex] = useState(0);
  const [
    grmythancntstorriesSelectedIndex,
    setGrmythancntstorriesSelectedIndex,
  ] = useState<0 | 1 | 2 | null>(null);
  const [grmythancntstorriesIsCorrect, setGrmythancntstorriesIsCorrect] =
    useState<boolean | null>(null);
  const [grmythancntstorriesCorrectCount, setGrmythancntstorriesCorrectCount] =
    useState(0);

  const grmythancntstorriesQ =
    grmythancntstorriesQuestions[grmythancntstorriesIndex];
  const grmythancntstorriesProgressLabel = useMemo(
    () =>
      `${grmythancntstorriesIndex + 1} / ${
        grmythancntstorriesQuestions.length
      }`,
    [grmythancntstorriesIndex, grmythancntstorriesQuestions.length],
  );

  useFocusEffect(
    useCallback(() => {
      setGrmythancntstorriesPhase('intro');
      setGrmythancntstorriesQuestions(
        grmythancntstorriesPickRandom(grmythancntstorriesAllQuestions, 10),
      );
      setGrmythancntstorriesIndex(0);
      setGrmythancntstorriesSelectedIndex(null);
      setGrmythancntstorriesIsCorrect(null);
      setGrmythancntstorriesCorrectCount(0);
    }, []),
  );

  const grmythancntstorriesReset = () => {
    setGrmythancntstorriesPhase('intro');
    setGrmythancntstorriesQuestions(
      grmythancntstorriesPickRandom(grmythancntstorriesAllQuestions, 10),
    );
    setGrmythancntstorriesIndex(0);
    setGrmythancntstorriesSelectedIndex(null);
    setGrmythancntstorriesIsCorrect(null);
    setGrmythancntstorriesCorrectCount(0);
  };

  const grmythancntstorriesStart = () => {
    setGrmythancntstorriesPhase('question');
    setGrmythancntstorriesIndex(0);
    setGrmythancntstorriesSelectedIndex(null);
    setGrmythancntstorriesIsCorrect(null);
    setGrmythancntstorriesCorrectCount(0);
  };

  const grmythancntstorriesOnPick = (
    grmythancntstorriesOptIndex: 0 | 1 | 2,
  ) => {
    if (!grmythancntstorriesQ || grmythancntstorriesSelectedIndex !== null) {
      return;
    }
    setGrmythancntstorriesSelectedIndex(grmythancntstorriesOptIndex);
    const grmythancntstorriesOk =
      grmythancntstorriesOptIndex === grmythancntstorriesQ.correctIndex;
    setGrmythancntstorriesIsCorrect(grmythancntstorriesOk);
    if (grmythancntstorriesOk) {
      setGrmythancntstorriesCorrectCount(
        grmythancntstorriesV => grmythancntstorriesV + 1,
      );
    }
  };

  const grmythancntstorriesNext = () => {
    if (grmythancntstorriesSelectedIndex === null) {
      return;
    }
    if (grmythancntstorriesIndex >= grmythancntstorriesQuestions.length - 1) {
      setGrmythancntstorriesPhase('result');
      return;
    }
    setGrmythancntstorriesIndex(
      grmythancntstorriesV => grmythancntstorriesV + 1,
    );
    setGrmythancntstorriesSelectedIndex(null);
    setGrmythancntstorriesIsCorrect(null);
  };

  const grmythancntstorriesPts = grmythancntstorriesCorrectCount * 2;
  const grmythancntstorriesRank = useMemo(() => {
    const grmythancntstorriesRatio = grmythancntstorriesQuestions.length
      ? grmythancntstorriesCorrectCount / grmythancntstorriesQuestions.length
      : 0;
    if (grmythancntstorriesRatio >= 0.9) {
      return {title: 'ORACLE', subtitle: 'A master of hidden truths.'};
    }
    if (grmythancntstorriesRatio >= 0.7) {
      return {title: 'SAGE', subtitle: 'A wise keeper of myths.'};
    }
    if (grmythancntstorriesRatio >= 0.5) {
      return {title: 'INITIATE', subtitle: 'A promising student of mythology.'};
    }
    return {title: 'NOVICE', subtitle: 'Keep studying the legends.'};
  }, [grmythancntstorriesCorrectCount, grmythancntstorriesQuestions.length]);

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
                    MYTHOLOGY QUIZ
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.grmythancntstorriesIntroContent}>
              <LinearGradient
                colors={['rgb(13, 33, 19)', 'rgb(2, 17, 6)']}
                style={styles.grmythancntstorriesBoltWrap}>
                <View style={styles.grmythancntstorriesBoltCircle}>
                  <Image source={require('../../assets/i/grmythancbth.png')} />
                </View>
              </LinearGradient>

              <Text style={styles.grmythancntstorriesIntroTitle}>
                TEST YOUR MYTHOLOGICAL{'\n'}KNOWLEDGE
              </Text>
              <Text style={styles.grmythancntstorriesIntroDesc}>
                10 questions across both worlds. Greek gods and Aztec legends.
                Earn 2 points for every correct answer.
              </Text>

              <View style={styles.grmythancntstorriesStatsRow}>
                <View style={styles.grmythancntstorriesStat}>
                  <Text style={styles.grmythancntstorriesStatValue}>10</Text>
                  <Text style={styles.grmythancntstorriesStatLabel}>
                    Questions
                  </Text>
                </View>
                <View style={styles.grmythancntstorriesStat}>
                  <Text style={styles.grmythancntstorriesStatValue}>
                    3 EACH
                  </Text>
                  <Text style={styles.grmythancntstorriesStatLabel}>
                    Options
                  </Text>
                </View>
                <View style={styles.grmythancntstorriesStat}>
                  <Text style={styles.grmythancntstorriesStatValue}>+20</Text>
                  <Text style={styles.grmythancntstorriesStatLabel}>
                    Max pts
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
                    START QUIZ
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}

        {grmythancntstorriesPhase === 'question' && grmythancntstorriesQ ? (
          <View style={styles.grmythancntstorriesQWrap}>
            <LinearGradient
              colors={['rgb(13, 33, 19)', 'rgb(2, 17, 6)']}
              style={styles.grmythancntstorriesTopGradient}>
              <View style={styles.grmythancntstorriesTopBar}>
                <View>
                  <Text style={styles.grmythancntstorriesTopTitle}>
                    MYTHOLOGY QUIZ
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
              <View style={styles.grmythancntstorriesCategoryPill}>
                <Text style={styles.grmythancntstorriesCategoryText}>
                  ⊕{' '}
                  {grmythancntstorriesQ.category === 'Aztec'
                    ? 'AZTEC'
                    : 'GREEK'}
                </Text>
              </View>

              <Text style={styles.grmythancntstorriesQuestion}>
                {grmythancntstorriesQ.prompt}
              </Text>

              <View style={styles.grmythancntstorriesOptions}>
                {grmythancntstorriesQ.options.map(
                  (grmythancntstorriesOpt, grmythancntstorriesI) => {
                    const grmythancntstorriesIdx = grmythancntstorriesI as
                      | 0
                      | 1
                      | 2;
                    const grmythancntstorriesPicked =
                      grmythancntstorriesSelectedIndex ===
                      grmythancntstorriesIdx;
                    const grmythancntstorriesCorrect =
                      grmythancntstorriesQ.correctIndex ===
                      grmythancntstorriesIdx;
                    const grmythancntstorriesShow =
                      grmythancntstorriesSelectedIndex !== null;

                    const grmythancntstorriesStateStyle =
                      grmythancntstorriesShow
                        ? grmythancntstorriesCorrect
                          ? styles.grmythancntstorriesOptionCorrect
                          : grmythancntstorriesPicked
                          ? styles.grmythancntstorriesOptionWrong
                          : styles.grmythancntstorriesOptionIdle
                        : styles.grmythancntstorriesOptionIdle;

                    const grmythancntstorriesGradientColors =
                      grmythancntstorriesShow
                        ? grmythancntstorriesCorrect
                          ? ['#2A804059', '#1E502859']
                          : grmythancntstorriesPicked
                          ? ['#A0282859', '#64141459']
                          : ['#142818', '#102018']
                        : ['#142818', '#102018'];

                    return (
                      <Pressable
                        key={`${grmythancntstorriesQ.id}-${grmythancntstorriesOpt}`}
                        onPress={() =>
                          grmythancntstorriesOnPick(grmythancntstorriesIdx)
                        }
                        style={[
                          styles.grmythancntstorriesOption,
                          grmythancntstorriesStateStyle,
                        ]}>
                        <LinearGradient
                          colors={grmythancntstorriesGradientColors}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={styles.grmythancntstorriesOptionGrad}>
                          <View style={styles.grmythancntstorriesOptionRow}>
                            <View
                              style={[
                                styles.grmythancntstorriesOptionBadge,
                                grmythancntstorriesShow &&
                                  grmythancntstorriesCorrect &&
                                  styles.grmythancntstorriesBadgeOk,
                                grmythancntstorriesShow &&
                                  grmythancntstorriesPicked &&
                                  !grmythancntstorriesCorrect &&
                                  styles.grmythancntstorriesBadgeBad,
                              ]}>
                              <Text
                                style={
                                  styles.grmythancntstorriesOptionBadgeText
                                }>
                                {grmythancntstorriesShow
                                  ? grmythancntstorriesCorrect
                                    ? '✓'
                                    : grmythancntstorriesPicked
                                    ? '✗'
                                    : ''
                                  : grmythancntstorriesIdx === 0
                                  ? 'A'
                                  : grmythancntstorriesIdx === 1
                                  ? 'B'
                                  : 'C'}
                              </Text>
                            </View>
                            <Text style={styles.grmythancntstorriesOptionText}>
                              {grmythancntstorriesOpt}
                            </Text>
                          </View>
                        </LinearGradient>
                      </Pressable>
                    );
                  },
                )}
              </View>

              {grmythancntstorriesSelectedIndex !== null ? (
                <View
                  style={[
                    styles.grmythancntstorriesFeedback,
                    grmythancntstorriesIsCorrect
                      ? styles.grmythancntstorriesFeedbackOk
                      : styles.grmythancntstorriesFeedbackBad,
                  ]}>
                  <Text
                    style={[
                      styles.grmythancntstorriesFeedbackText,
                      grmythancntstorriesIsCorrect
                        ? styles.grmythancntstorriesFeedbackTextOk
                        : styles.grmythancntstorriesFeedbackTextBad,
                    ]}>
                    {grmythancntstorriesIsCorrect
                      ? '✓ Correct! Well done, scholar.'
                      : `✗ Incorrect. The correct answer was: "${
                          grmythancntstorriesQ.options[
                            grmythancntstorriesQ.correctIndex
                          ]
                        }"`}
                  </Text>
                </View>
              ) : null}

              {grmythancntstorriesSelectedIndex !== null ? (
                <Pressable
                  onPress={grmythancntstorriesNext}
                  disabled={grmythancntstorriesSelectedIndex === null}
                  style={[
                    styles.grmythancntstorriesCta,
                    grmythancntstorriesSelectedIndex === null &&
                      styles.grmythancntstorriesCtaDisabled,
                  ]}>
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
            <View style={styles.grmythancntstorriesRing}>
              <View style={styles.grmythancntstorriesRingInner}>
                <Text style={styles.grmythancntstorriesRingValue}>
                  {grmythancntstorriesCorrectCount}/
                  {grmythancntstorriesQuestions.length}
                </Text>
                <Text style={styles.grmythancntstorriesRingLabel}>correct</Text>
              </View>
            </View>

            <Text style={styles.grmythancntstorriesResultTitle}>
              {grmythancntstorriesRank.title}
            </Text>
            <Text style={styles.grmythancntstorriesResultSubtitle}>
              {grmythancntstorriesRank.subtitle}
            </Text>

            <View style={styles.grmythancntstorriesPtsPill}>
              <Text style={styles.grmythancntstorriesPtsText}>
                +{grmythancntstorriesPts} POINTS RECEIVED
              </Text>
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
                <Text style={styles.grmythancntstorriesCtaText}>TRY AGAIN</Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriesquz;

const styles = StyleSheet.create({
  grmythancntstorriesTopUnderline: {
    marginTop: 8,
    width: 34,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#D4A820',
  },

  grmythancntstorriesProgressPill: {
    height: 34,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#C8901852',
    backgroundColor: '#C890181F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesProgressText: {
    color: '#D4A820',
    fontSize: 13,
    fontFamily: 'Cinzel-Regular',
  },

  grmythancntstorriesBg: {
    flex: 1,
  },
  grmythancntstorriesWrap: {
    flex: 1,
    paddingBottom: 130,
  },
  grmythancntstorriesTopGradient: {
    minHeight: 140,
    justifyContent: 'flex-end',
  },
  grmythancntstorriesIntroContent: {
    paddingHorizontal: 20,
    marginTop: 27,
    alignItems: 'center',
  },
  grmythancntstorriesQuestionContent: {
    paddingHorizontal: 20,
  },

  grmythancntstorriesTopBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 55,
    padding: 20,
  },
  grmythancntstorriesTopTitle: {
    color: '#D4A820',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
  },

  grmythancntstorriesCategoryPill: {
    marginTop: 16,
    alignSelf: 'flex-start',
    height: 24,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A6030',
    backgroundColor: '#0A2814CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesCategoryText: {
    color: '#6A9870',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },

  grmythancntstorriesQWrap: {
    flex: 1,
  },
  grmythancntstorriesQuestion: {
    marginTop: 18,
    color: '#E7D9B0',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    lineHeight: 26,
    letterSpacing: 0.4,
  },
  grmythancntstorriesOptions: {
    marginTop: 28,
    gap: 12,
  },
  grmythancntstorriesOption: {
    height: 58,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    overflow: 'hidden',
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
  grmythancntstorriesOptionIdle: {},
  grmythancntstorriesOptionCorrect: {
    borderColor: '#2A8040',
  },
  grmythancntstorriesOptionWrong: {
    borderColor: '#C03030',
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
  grmythancntstorriesBadgeOk: {
    borderColor: '#2A8040',
  },
  grmythancntstorriesBadgeBad: {
    borderColor: '#C03030',
    backgroundColor: '#C0303066',
  },
  grmythancntstorriesOptionBadgeText: {
    color: '#6A8870',
    fontSize: 12,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesOptionText: {
    flex: 1,
    color: '#CFE0CF',
    fontSize: 14,
    fontWeight: '600',
  },
  grmythancntstorriesMarkOk: {
    color: '#5CCA40',
    fontSize: 16,
    fontWeight: '900',
  },
  grmythancntstorriesMarkBad: {
    color: '#D44A3A',
    fontSize: 16,
    fontWeight: '900',
  },

  grmythancntstorriesFeedback: {
    marginTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 58,
  },
  grmythancntstorriesFeedbackOk: {
    borderColor: '#2A6030',
    backgroundColor: '#2A804026',
  },
  grmythancntstorriesFeedbackBad: {
    borderColor: '#802020',
    backgroundColor: '#A0282826',
  },
  grmythancntstorriesFeedbackText: {
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18,
  },
  grmythancntstorriesFeedbackTextOk: {
    color: '#5CCA40',
  },
  grmythancntstorriesFeedbackTextBad: {
    color: '#D44A3A',
  },

  grmythancntstorriesCta: {
    marginTop: 18,
    width: '100%',
  },
  grmythancntstorriesCtaDisabled: {
    opacity: 0.55,
  },
  grmythancntstorriesCtaNarrow: {
    width: '96%',
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
  },

  grmythancntstorriesIntroWrap: {
    flex: 1,
    paddingBottom: 40,
  },
  grmythancntstorriesBoltWrap: {
    marginBottom: 28,
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: '#C8901866',
    borderRadius: 102,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesBoltCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesBolt: {
    color: '#D4A820',
    fontSize: 34,
  },
  grmythancntstorriesIntroTitle: {
    color: '#EEE0A8',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 1,
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
    marginTop: 28,
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
  },
  grmythancntstorriesStatValue: {
    color: '#D4A820',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesStatLabel: {
    marginTop: 6,
    color: '#6A8870',
    fontSize: 11,
    fontWeight: '600',
  },

  grmythancntstorriesResultWrap: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesRing: {
    width: 160,
    height: 160,
    borderRadius: 600,
    borderWidth: 8,
    borderColor: '#1A2C20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grmythancntstorriesRingInner: {
    width: 160,
    height: 160,
    borderRadius: 500,
    borderWidth: 4,
    borderColor: '#D4A820',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B151099',
  },
  grmythancntstorriesRingValue: {
    color: '#D4A820',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesRingLabel: {
    marginTop: 4,
    color: '#6A8870',
    fontSize: 12,
    fontWeight: '600',
  },
  grmythancntstorriesResultTitle: {
    marginTop: 28,
    color: '#C89018',
    fontSize: 28,
    fontFamily: 'Cinzel-Bold',
    letterSpacing: 1,
  },
  grmythancntstorriesResultSubtitle: {
    marginTop: 8,
    color: '#6A8870',
    fontSize: 14,
    fontWeight: '400',
  },
  grmythancntstorriesPtsPill: {
    marginTop: 24,
    height: 52,
    paddingHorizontal: 8,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#C8901866',
    backgroundColor: '#C8901826',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  grmythancntstorriesPtsText: {
    color: '#D4A820',
    fontSize: 18,
    fontFamily: 'Cinzel-Regular',
  },
});
