import { Image, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Historico from "../interno/Historico";
import Map from "../interno/Map";
import Localizacao from "../interno/Localizacao";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


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
            <MaterialCommunityIcons name="home" color='tomato' size={26} />
          ),
        }}>
        {() => (
          <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="Localização" component={Localizacao} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen 
        name="Mapa"
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="map" color='tomato' size={26} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Map" component={Map} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen 
        name="Perfil"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color='tomato' size={26} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="EditarPerfil" component={Historico} />
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
