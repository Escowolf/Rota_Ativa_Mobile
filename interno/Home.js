import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from "./map/MapView";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import VeiculosView from "./veiculos/VeiculosView";
import HistoricoView from "./historico/HistoricoView";
import EditarPerfilView from "./editarPerfil/EditarPerfilView";
import EstacionarView from "./estacionar/EstacionarView";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, 
                                    tabBarStyle: { backgroundColor: '#33404F'},
                                    tabBarActiveTintColor: '#1CA9A9',
                                    tabBarInactiveTintColor: '#fff'
                                    }}>
      
      <Tab.Screen 
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}>
        {() => (
          <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="EditarPerfilView" component={EditarPerfilView} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen 
        name="Mapa"
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Map" component={Map} />
            <HomeStack.Screen name="VeiculosView" component={VeiculosView} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen 
        name="Perfil"


        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HistoricoView" component={EstacionarView} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
}
