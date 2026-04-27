import {NavigationContainer} from '@react-navigation/native';

import Grmythancntstorriesstck from './Grmythancntstorries/Grmythancntstorriesnav/Grmythancntstorriesstck.tsx';
import {GrmythancntstorriesSavedProvider} from './Grmythancntstorries/Grmythancntstorriesstate/GrmythancntstorriesSavedProvider';

const App = () => {
  return (
    <GrmythancntstorriesSavedProvider>
      <NavigationContainer>
        <Grmythancntstorriesstck />
      </NavigationContainer>
    </GrmythancntstorriesSavedProvider>
  );
};

export default App;
