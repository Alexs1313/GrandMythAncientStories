import type {ImageSourcePropType} from 'react-native';

export type GrmythancntstorriesStoryCategory = 'Greek' | 'Aztec';

export type GrmythancntstorriesStory = {
  id: string;
  category: GrmythancntstorriesStoryCategory;
  title: string;
  shortDescription: string;
  readingTime: string;
  content: string;
  image?: ImageSourcePropType;
};

export const grmythancntstorriesStories: GrmythancntstorriesStory[] = [
  {
    id: 'zeus-thunder-olympus',
    category: 'Greek',
    title: 'Zeus and the Thunder of Olympus',
    shortDescription:
      'The story of how Zeus became the ruler of the gods and gained the power of lightning.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst1.png'),
    content:
      'Zeus was not always the king of Olympus. He was born in secret, hidden away from his father Cronus, who feared being overthrown by his own children. Raised in secrecy, Zeus grew strong and wise, preparing for the moment he would challenge fate. When the time came, he returned to confront Cronus and free his swallowed siblings.\n\nWith the help of the Cyclopes, Zeus received his most powerful weapon — the thunderbolt. This weapon symbolized not only power but also authority over the sky and storms. Zeus led a great war against the Titans, shaking the very foundations of the world. Lightning filled the skies as the battle raged for years.\n\nIn the end, Zeus emerged victorious and claimed the throne of Olympus. He divided the world among his brothers but kept the heavens for himself. From that moment, he ruled as the god of thunder, justice, and order. His lightning became a symbol of divine will and unstoppable force.\n\nThough powerful, Zeus was not a distant ruler. He often intervened in human affairs, sometimes helping, sometimes punishing. His decisions shaped both gods and mortals alike. The sound of thunder was said to be his voice echoing across the sky.\n\nEven today, Zeus remains one of the most iconic figures in mythology. His story is not only about power, but about destiny and overcoming fear. The lightning he wields reminds us that true authority must be earned, not taken.',
  },
  {
    id: 'athena-born-of-wisdom',
    category: 'Greek',
    title: 'Athena, Born of Wisdom',
    shortDescription:
      'A unique legend of Athena’s birth and her role as the goddess of wisdom and strategy.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst2.png'),
    content:
      'Athena’s birth was unlike any other. She did not come into the world in the usual way, but instead emerged fully grown from the head of Zeus. It is said that Zeus swallowed her mother, Metis, fearing a prophecy, but wisdom could not be contained forever. One day, struck by unbearable pain, Zeus called for help — and Athena burst forth in shining armor.\n\nFrom the very beginning, Athena embodied intelligence, strategy, and calm strength. She was not driven by chaos or emotion, but by reason and balance. Unlike many gods, she valued thought over force. This made her a powerful ally in both divine and human conflicts.\n\nAthena became the protector of cities, most famously Athens, which was named in her honor. She gifted humanity with knowledge, crafts, and the art of war strategy. Her symbol, the owl, represented insight and the ability to see what others could not.\n\nShe often guided heroes, helping them succeed not through strength, but through clever thinking. Her presence was subtle yet impactful, always pushing toward smarter decisions. She showed that wisdom can be more powerful than brute force.\n\nAthena’s legend reminds us that true power lies in the mind. Her calm, calculated nature stands in contrast to the chaos of war. She is a symbol of intelligence, clarity, and inner strength.',
  },
  {
    id: 'poseidon-wrath-of-sea',
    category: 'Greek',
    title: 'Poseidon and the Wrath of the Sea',
    shortDescription:
      'The unpredictable nature of Poseidon, god of the seas, and his immense power.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst3.png'),
    content:
      'Poseidon ruled the vast and unpredictable oceans. With his trident in hand, he could calm the waters or summon devastating storms. Sailors both feared and respected him, knowing their fate often depended on his mood. The sea was his domain, and no one could challenge it.\n\nThough powerful, Poseidon was known for his temper. He could be angered easily, especially when disrespected. Legends tell of entire fleets destroyed by his rage, swallowed by towering waves. His power reminded mortals that nature cannot be controlled.\n\nHe once competed with Athena for the patronage of a city. While Athena offered wisdom, Poseidon struck the ground with his trident, creating a spring of water. But the water was salty, and the people chose Athena instead. This loss fueled his pride and anger.\n\nDespite his fury, Poseidon also created life and beauty. Horses were said to be his creation, born from the sea foam. This showed that even the most destructive forces can bring life into the world.\n\nPoseidon’s story is one of balance between calm and chaos. The sea, like him, is both peaceful and dangerous. His legend teaches respect for forces greater than ourselves.',
  },
  {
    id: 'hades-silent-kingdom',
    category: 'Greek',
    title: 'Hades and the Silent Kingdom',
    shortDescription:
      'The misunderstood god of the underworld and the realm he ruled.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst4.png'),
    content:
      'Hades was the ruler of the underworld, a realm often feared but rarely understood. Unlike the other gods, he did not seek power over the living world. His domain was the land of the dead, where souls found their final rest.\n\nHe was not cruel, but strict and unyielding. His duty was to maintain order in a place where no one could escape. Once a soul entered his realm, it could never return. This made him both respected and feared.\n\nHades ruled alongside Persephone, whose presence brought a rare sense of balance. Her time between the underworld and the surface explained the changing seasons. Together, they represented the cycle of life and death.\n\nThough often seen as dark, Hades valued fairness. He did not judge souls but ensured they reached their rightful place. His role was necessary, even if it was not admired.\n\nHis story reminds us that not all darkness is evil. Sometimes, it is simply a part of existence. Hades represents acceptance, inevitability, and the unseen side of life.',
  },
  {
    id: 'apollo-light-of-truth',
    category: 'Greek',
    title: 'Apollo and the Light of Truth',
    shortDescription:
      'The radiant god of music, prophecy, and the sun’s clarity.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst5.png'),
    content:
      'Apollo was the god of light, music, and prophecy. His presence brought clarity and harmony to both gods and humans. With his lyre, he could calm hearts and inspire greatness. His light revealed truth, no matter how hidden.\n\nHe was known for his connection to the oracle of Delphi. Through it, he shared visions of the future, guiding those who sought answers. But his prophecies were often mysterious, requiring wisdom to understand.\n\nApollo valued balance and perfection. He represented not just physical light, but intellectual clarity. His influence extended into art, science, and healing. He showed that knowledge could illuminate even the darkest paths.\n\nHowever, Apollo was not without flaws. His pride sometimes led to conflict, especially when challenged. Yet these moments only added depth to his character.\n\nHis legend is one of enlightenment and self-discovery. Apollo reminds us to seek truth, embrace creativity, and strive for harmony in all things.',
  },
  {
    id: 'hermes-messenger-of-gods',
    category: 'Greek',
    title: 'Hermes, Messenger of the Gods',
    shortDescription:
      'A swift and clever guide who carried messages between worlds and outwitted gods and mortals alike.',
    readingTime: '~3 min',
    content:
      'Hermes moved where no one else could — between Olympus and Earth, between the living world and the underworld. He was the messenger of the gods, carrying divine commands with unmatched speed, but he was also a trickster, known for turning impossible situations into clever victories.\n\nFrom his earliest stories, Hermes showed a sharp mind and fearless curiosity. He could charm with words, bargain with ease, and find hidden paths through danger. Travelers prayed to him for safe roads, merchants respected him for smart deals, and even heroes relied on his guidance when the way forward was uncertain.\n\nHermes was not only fast — he was adaptable. He understood that power is not always strength, but timing, wit, and knowing when to act. In myths, he often helped others without demanding glory, slipping in and out like the wind.\n\nHis legend reminds us that intelligence can be its own kind of magic. Hermes represents movement, cleverness, and the courage to cross boundaries — physical, spiritual, and personal.',
  },
  {
    id: 'quetzalcoatl-feathered-serpent',
    category: 'Aztec',
    title: 'Quetzalcoatl, the Feathered Serpent',
    shortDescription:
      'The wise god who brought knowledge, light, and creation to the world.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst6.png'),
    content:
      'Quetzalcoatl, known as the Feathered Serpent, was one of the most important deities in Aztec mythology. He represented wind, knowledge, and life itself, combining the power of earth and sky. Unlike many other gods, he was often seen as a bringer of wisdom rather than destruction.\n\nAccording to legend, Quetzalcoatl helped create humanity by descending into the underworld to retrieve ancient bones. With his blood, he gave life to these remains, forming a new generation of humans. This act showed his deep connection to creation and sacrifice.\n\nHe also gifted humanity with knowledge — teaching them agriculture, writing, and understanding of the stars. Under his guidance, civilizations began to grow and flourish. He was seen as a protector of culture and progress.\n\nHowever, his story is not without struggle. Betrayed and forced into exile, Quetzalcoatl left the world, promising to return one day. This legend shaped many beliefs about fate and destiny.\n\nQuetzalcoatl represents balance, intelligence, and renewal. His story reminds us that creation often requires sacrifice and that knowledge is one of the greatest gifts of all.',
  },
  {
    id: 'huitzilopochtli-eternal-war',
    category: 'Aztec',
    title: 'Huitzilopochtli and the Eternal War of the Sun',
    shortDescription:
      'The powerful god of the sun and war who fought to keep light alive.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst7.png'),
    content:
      'Huitzilopochtli was the god of the sun and war, a fierce protector of his people. His role was to ensure that the sun would rise each day, battling the forces of darkness that threatened to consume it. For the Aztecs, this was not just a myth, but a vital truth of existence.\n\nHe was born fully armed, immediately facing enemies who sought to destroy him. In a dramatic battle, he defeated his siblings, proving his strength and divine purpose. This victory established him as a symbol of power and survival.\n\nThe Aztecs believed that Huitzilopochtli required energy to continue his daily journey across the sky. This belief led to rituals meant to sustain the sun and maintain balance in the universe.\n\nHis presence was both protective and demanding. He guided his people through war and hardship, ensuring their dominance and survival.\n\nHuitzilopochtli represents sacrifice, strength, and the constant fight to preserve light. His story reflects the idea that survival often comes at a cost.',
  },
  {
    id: 'tezcatlipoca-smoking-mirror',
    category: 'Aztec',
    title: 'Tezcatlipoca, the Smoking Mirror',
    shortDescription: 'A mysterious god of fate, illusion, and hidden truths.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst8.png'),
    content:
      'Tezcatlipoca was a powerful and unpredictable god associated with night, fate, and illusion. His name, meaning “Smoking Mirror,” symbolized his ability to see everything while remaining unseen. He could shape reality itself, creating illusions that tested both gods and humans.\n\nHe was known for challenging others, often revealing their weaknesses through deception. His actions were not always cruel, but they were always meaningful. Through trials and hardship, he forced others to confront their true nature.\n\nTezcatlipoca was often in conflict with Quetzalcoatl, representing opposing forces — chaos and order. Their rivalry shaped the balance of the world and the cycles of creation and destruction.\n\nHe could grant power or take it away in an instant. Kings and warriors feared him, knowing their fate could change at any moment.\n\nTezcatlipoca represents the unknown and the hidden side of reality. His story reminds us that truth is not always visible, and that growth often comes through challenge.',
  },
  {
    id: 'tlaloc-lord-of-rain',
    category: 'Aztec',
    title: 'Tlaloc, Lord of Rain and Storms',
    shortDescription:
      'The god who controlled rain, fertility, and the power of nature.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst9.png'),
    content:
      'Tlaloc was the god of rain, storms, and agricultural fertility. His power determined whether crops would grow or fail, making him essential to survival. The Aztecs both honored and feared him, knowing he controlled the forces of nature.\n\nHe lived in a realm filled with water and abundance, known as Tlalocan. Those who died in connection with water were believed to join him there, living in eternal peace.\n\nTlaloc could bring life-giving rain or destructive storms. His mood shaped the land, sometimes nurturing it, sometimes overwhelming it.\n\nRituals were performed to gain his favor, ensuring balance in the natural world. His influence extended far beyond the skies, touching every aspect of life.\n\nTlaloc represents the dual nature of nature itself. His story teaches that life depends on forces we cannot control, only respect.',
  },
  {
    id: 'xolotl-underworld-journey',
    category: 'Aztec',
    title: 'Xolotl and the Journey Through the Underworld',
    shortDescription: 'The guide of souls who led the dead through darkness.',
    readingTime: '~3 min',
    image: require('../../assets/i/grmythancbst10.png'),
    content:
      'Xolotl was the god of death, transformation, and the evening star. He served as a guide for souls traveling through the underworld, helping them reach their final destination. His role was essential, though often overlooked.\n\nUnlike many gods, Xolotl was associated with fear and change. He could transform himself, shifting forms to escape danger or fulfill his purpose. This made him both mysterious and unpredictable.\n\nHe accompanied the sun on its journey through the night, ensuring it would rise again. Without him, the cycle of day and night could not continue.\n\nXolotl’s connection to transformation made him a symbol of change and survival. He showed that even in darkness, there is movement and purpose.\n\nHis story reflects the journey we all must take — through uncertainty toward something unknown. Xolotl reminds us that even in darkness, we are never truly alone.',
  },
];
