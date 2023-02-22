import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from "./map/MapView";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import VeiculosView from "./veiculos/VeiculosView";
import HistoricoView from "./historico/HistoricoView";
import EditarPerfilView from "./editarPerfil/EditarPerfilView";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      <Tab.Screen 
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='#027373' size={26} />
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
          tabBarIcon: () => (
            <MaterialCommunityIcons name="map" color='#027373' size={26} />
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
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color='#027373' size={26} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HistoricoView" component={HistoricoView} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#027373",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 100,
  },
  button: {
    backgroundColor: "#A9D9D0",
    marginBottom: 10,
  },
});
