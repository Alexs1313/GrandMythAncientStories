import {createStackNavigator} from '@react-navigation/stack';

import Grnmythancntstorriestabs from '../../Grnmythancntstorriestabs.tsx';

import Grmythancntstorriesonb from '../Grmythancntstorriesscrns/Grmythancntstorriesonb.tsx';
import Grmythancntstorriesload from '../Grmythancntstorriescpnts/Grmythancntstorriesload.tsx';
import Grmythancntstorriesdtls from '../Grmythancntstorriesscrns/Grmythancntstorriesdtls.tsx';

const Stack = createStackNavigator();

const Grmythancntstorriesstck = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Grmythancntstorriesload"
        component={Grmythancntstorriesload}
      />
      <Stack.Screen
        name="Grmythancntstorriesonb"
        component={Grmythancntstorriesonb}
      />
      <Stack.Screen
        name="Grnmythancntstorriestabs"
        component={Grnmythancntstorriestabs}
      />
      <Stack.Screen
        name="Grmythancntstorriesdtls"
        component={Grmythancntstorriesdtls}
      />
    </Stack.Navigator>
  );
};

export default Grmythancntstorriesstck;
