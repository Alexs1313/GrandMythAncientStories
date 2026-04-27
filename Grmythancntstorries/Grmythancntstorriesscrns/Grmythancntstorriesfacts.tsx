import Grmythancntstorrieslayt from '../Grmythancntstorriescpnts/Grmythancntstorrieslayt';

import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GrmythancntstorriesFact = {
  id: string;
  title: string;
  body: string;
};

const grmythancntstorriesFacts: GrmythancntstorriesFact[] = [
  {
    id: 'f-01',
    title: 'Zeus and the Sky',
    body: 'Zeus was considered the ruler of the sky and all gods on Olympus. His lightning was not just a weapon but a symbol of divine authority. People believed thunder was his way of communicating with the world.',
  },
  {
    id: 'f-02',
    title: 'Athena’s Owl',
    body: 'Athena was often associated with an owl, a symbol of wisdom and clear vision. The owl represented the ability to see truth even in darkness. This made Athena a guide for both gods and humans.',
  },
  {
    id: 'f-03',
    title: 'Poseidon’s Trident',
    body: 'Poseidon controlled the seas using his powerful trident. With a single strike, he could create storms or calm the ocean. Sailors prayed to him before every journey.',
  },
  {
    id: 'f-04',
    title: 'Hades Was Not Evil',
    body: 'Hades ruled the underworld but was not considered evil. His role was to maintain balance and order among the dead. He rarely interfered with the living world.',
  },
  {
    id: 'f-05',
    title: 'Apollo and Music',
    body: 'Apollo was the god of music, and his lyre could calm even the wildest emotions. His melodies were believed to bring harmony to the universe. Music was seen as a divine gift through him.',
  },
  {
    id: 'f-06',
    title: 'Ares and Chaos',
    body: 'Ares represented the violent and chaotic side of war. Unlike other gods, he enjoyed battle for its own sake. Even other gods often disliked his aggressive nature.',
  },
  {
    id: 'f-07',
    title: 'Hermes the Trickster',
    body: 'Hermes was known for his speed and cleverness. He could travel between worlds, including the underworld. As a trickster, he often outsmarted both gods and mortals.',
  },
  {
    id: 'f-08',
    title: 'The Birth of Athena',
    body: 'Athena was born from Zeus’s head, fully grown and armored. This symbolized pure intellect and strategy. Her birth was one of the most unique in mythology.',
  },
  {
    id: 'f-09',
    title: 'Mount Olympus',
    body: 'Mount Olympus was believed to be the home of the gods. It was described as a place beyond weather and time. Only gods could live there freely.',
  },
  {
    id: 'f-10',
    title: 'The Oracle of Delphi',
    body: 'The Oracle of Delphi was one of the most important places in ancient Greece. People came from far away to hear prophecies. Apollo was believed to speak through the oracle.',
  },
  {
    id: 'f-11',
    title: 'Quetzalcoatl’s Wisdom',
    body: 'Quetzalcoatl was seen as a god of knowledge and learning. He taught humans how to grow crops and understand the world. His influence helped civilizations develop.',
  },
  {
    id: 'f-12',
    title: 'Aztec Calendar',
    body: 'The Aztecs had a complex calendar system based on cycles. It combined spiritual and practical elements. Time itself was considered sacred.',
  },
  {
    id: 'f-13',
    title: 'Human Creation Myth',
    body: 'According to Aztec myth, humans were created from bones of past generations. The gods sacrificed themselves to give life. This showed the importance of balance and renewal.',
  },
  {
    id: 'f-14',
    title: 'Tlaloc’s Rain',
    body: 'Tlaloc controlled rain and storms. Farmers depended on him for successful harvests. Too much or too little rain could change everything.',
  },
  {
    id: 'f-15',
    title: 'Tezcatlipoca’s Mirror',
    body: 'Tezcatlipoca used a magical mirror to see truth and illusions. It reflected both reality and hidden fears. He tested people through these visions.',
  },
  {
    id: 'f-16',
    title: 'Xolotl and the Sun',
    body: 'Xolotl guided the sun through the underworld each night. Without him, the sun would not rise again. He represented transformation and movement.',
  },
  {
    id: 'f-17',
    title: 'Sacrifice and Balance',
    body: 'In Aztec belief, sacrifice maintained balance in the universe. It was not only about ritual but survival. The sun itself depended on it.',
  },
  {
    id: 'f-18',
    title: 'Greek Heroes and Gods',
    body: 'Many Greek heroes were guided by gods. These relationships shaped their journeys. Success often depended on divine support.',
  },
  {
    id: 'f-19',
    title: 'Athena vs Poseidon',
    body: 'Athena and Poseidon once competed for a city. Athena offered wisdom, while Poseidon offered power. The people chose Athena, valuing knowledge over force.',
  },
  {
    id: 'f-20',
    title: 'The Underworld Rivers',
    body: 'The Greek underworld had rivers like Styx and Lethe. Each had a different meaning, such as memory or forgetting. Souls had to cross them to reach their final place.',
  },
  {
    id: 'f-21',
    title: 'The Sun’s Journey',
    body: 'Both Greek and Aztec myths explained the movement of the sun. It was seen as a daily battle or journey. This gave meaning to day and night.',
  },
  {
    id: 'f-22',
    title: 'Myth as Explanation',
    body: 'Myths helped explain natural events like storms or seasons. Before science, they were a way to understand the world. They combined imagination with observation.',
  },
  {
    id: 'f-23',
    title: 'Divine Symbols',
    body: 'Each god had unique symbols representing their power. These symbols helped people recognize their influence. They were often used in art and rituals.',
  },
  {
    id: 'f-24',
    title: 'Temples and Worship',
    body: 'Temples were built to honor gods and seek protection. People brought offerings and prayers. These places connected the human and divine worlds.',
  },
  {
    id: 'f-25',
    title: 'Fate and Destiny',
    body: 'Both mythologies believed in destiny. Even gods could not fully escape it. This added tension to many stories.',
  },
  {
    id: 'f-26',
    title: 'Gods in Human Form',
    body: 'Greek gods often acted like humans, with emotions and flaws. This made their stories relatable. They were powerful but not perfect.',
  },
  {
    id: 'f-27',
    title: 'Aztec Pyramids',
    body: 'Aztec pyramids were used for rituals and ceremonies. They were built to reach closer to the gods. Each level had symbolic meaning.',
  },
  {
    id: 'f-28',
    title: 'Lightning as Power',
    body: 'Lightning was often seen as a divine force. It represented sudden power and control. In many myths, it was connected to authority.',
  },
  {
    id: 'f-29',
    title: 'Duality in Myth',
    body: 'Many myths are based on duality — light and dark, order and chaos. This balance keeps the world stable. Removing one side would create disorder.',
  },
  {
    id: 'f-30',
    title: 'The Role of Nature',
    body: 'Nature was deeply connected to gods in both cultures. Rain, wind, and fire were all seen as divine. Humans depended on these forces for survival.',
  },
  {
    id: 'f-31',
    title: 'Transformation Themes',
    body: 'Transformation appears often in myths. Gods and beings could change form. This symbolized growth and adaptation.',
  },
  {
    id: 'f-32',
    title: 'War and Strategy',
    body: 'War was not just about strength. Strategy and planning played a key role. This is why gods like Athena were important.',
  },
  {
    id: 'f-33',
    title: 'Fear of the Unknown',
    body: 'Many myths explore fear of the unknown. Darkness and the afterlife were major themes. These stories helped people cope with uncertainty.',
  },
  {
    id: 'f-34',
    title: 'Ritual Importance',
    body: 'Rituals were a way to communicate with gods. They created structure and meaning. Every action had symbolic value.',
  },
  {
    id: 'f-35',
    title: 'The Power of Knowledge',
    body: 'Knowledge was often seen as sacred. Gods who shared it were respected. It allowed humans to grow and evolve.',
  },
  {
    id: 'f-36',
    title: 'Cycles of Life',
    body: 'Both mythologies focused on cycles — life, death, rebirth. Nothing was permanent. Everything moved in patterns.',
  },
  {
    id: 'f-37',
    title: 'Divine Punishment',
    body: 'Gods could punish those who disrespected them. These punishments were often harsh. They served as lessons for others.',
  },
  {
    id: 'f-38',
    title: 'Heroes and Trials',
    body: 'Heroes had to pass difficult trials. These challenges tested their strength and mind. Success meant becoming legendary.',
  },
  {
    id: 'f-39',
    title: 'Myth and Reality',
    body: 'Some myths were inspired by real events. Over time, they became stories. This blurred the line between truth and imagination.',
  },
  {
    id: 'f-40',
    title: 'Legacy of Myths',
    body: 'Myths continue to influence modern culture. Their themes are still relevant today. They remind us of timeless human questions.',
  },
];

const Grmythancntstorriesfacts = () => {
  const grmythancntstorriesShareFact = async (
    grmythancntstorriesFact: GrmythancntstorriesFact,
  ) => {
    try {
      await Share.share({
        title: grmythancntstorriesFact.title,
        message: `${grmythancntstorriesFact.title}\n\n${grmythancntstorriesFact.body}`,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Grmythancntstorrieslayt bounces={false}>
      <LinearGradient
        colors={['rgb(2, 17, 6)', 'rgb(13, 33, 19)']}
        style={styles.grmythancntstorriesHeaderBg}>
        <View style={styles.grmythancntstorriesTop}>
          <Text style={styles.grmythancntstorriesTitle}>SACRED KNOWLEDGE</Text>
        </View>
      </LinearGradient>

      <View style={styles.grmythancntstorriesListWrap}>
        {grmythancntstorriesFacts.map(grmythancntstorriesFact => (
          <View
            key={grmythancntstorriesFact.id}
            style={styles.grmythancntstorriesCardOuter}>
            <LinearGradient
              colors={['#142818', '#102018']}
              style={styles.grmythancntstorriesCard}>
              <View style={{padding: 14}}>
                <View style={styles.grmythancntstorriesCardHeader}>
                  <Text style={styles.grmythancntstorriesCardTitle}>
                    {grmythancntstorriesFact.title.toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.grmythancntstorriesCardBody}>
                  {grmythancntstorriesFact.body}
                </Text>

                <Pressable
                  hitSlop={10}
                  onPress={() =>
                    grmythancntstorriesShareFact(grmythancntstorriesFact)
                  }
                  style={styles.grmythancntstorriesIconBtn}>
                  <Image source={require('../../assets/i/grmythancnshr.png')} />
                </Pressable>
              </View>
            </LinearGradient>
          </View>
        ))}
      </View>

      <View style={styles.grmythancntstorriesSpacer} />
    </Grmythancntstorrieslayt>
  );
};

export default Grmythancntstorriesfacts;

const styles = StyleSheet.create({
  grmythancntstorriesCardTitle: {
    flex: 1,
    color: '#D4A820',
    fontSize: 15,
    fontFamily: 'Cinzel-Bold',
  },
  grmythancntstorriesCardBody: {
    marginTop: 8,
    color: '#6A8870',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    width: '90%',
  },

  grmythancntstorriesTop: {
    paddingTop: 65,
    paddingHorizontal: 18,
    padding: 20,
  },

  grmythancntstorriesTitle: {
    color: '#D4A820',
    fontSize: 26,
    fontFamily: 'Cinzel-Bold',
    letterSpacing: 1,
  },
  grmythancntstorriesListWrap: {
    paddingHorizontal: 18,
    paddingTop: 16,
    gap: 14,
  },
  grmythancntstorriesHeaderBg: {
    flex: 1,
    minHeight: 140,
    justifyContent: 'flex-end',
  },
  grmythancntstorriesCardOuter: {
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  grmythancntstorriesCard: {},
  grmythancntstorriesCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  grmythancntstorriesIconBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 14,
  },
  grmythancntstorriesSpacer: {
    height: 120,
  },
});
