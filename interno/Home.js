import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import VeiculosView from "./veiculos/veiculosView";
import HistoricoView from "./historico/historicoView";
import EditarPerfilView from "./editarPerfil/editarPerfilView";
import EstacionarView from "./estacionar/estacionarView";
import AcompanharView from './acompanhamento/acompanharView';
import SuporteView from './suporte/suporteView';
import CompraCreditosView from './compraCreditos/compraCreditosView';
import PagamentoView from './pagamento/pagamentoView';
import Erro from '../alertas/erro';
import Sucesso from '../alertas/sucesso';
import InicioView from './inicio/inicioView';
import PerfilView from './perfil/perfilView';
import ConfirmarCompraView from './confirmaCompra/confirmaCompraView';
import Map from "./map/mapView";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();


export default function Home({ navigation, route }) {

  const user = route.params.user;

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
        }}
        initialParams={user}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="InicioView">
            <HomeStack.Screen name="InicioView" component={InicioView} />
            <HomeStack.Screen name="EditarPerfilView" component={EditarPerfilView} />
            <HomeStack.Screen name="Erro" component={Erro} />
            <HomeStack.Screen name="Sucesso" component={Sucesso} />
            <HomeStack.Screen name="VeiculosView" component={VeiculosView} />
            <HomeStack.Screen name="SuporteView" component={SuporteView}  />
            <HomeStack.Screen name="HistoricoView" component={HistoricoView} 
/>
          </HomeStack.Navigator>
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
          <MapStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Map">
            <MapStack.Screen name="Map" component={Map} />
            <MapStack.Screen name="EstacionarView" component={EstacionarView} />
            <MapStack.Screen name="Erro" component={Erro} />
            <MapStack.Screen name="Sucesso" component={Sucesso} />
          </MapStack.Navigator>
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
          <SettingsStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="PerfilView">
            <SettingsStack.Screen name="PerfilView" component={PerfilView} />
            <SettingsStack.Screen name="PagamentoView" component={PagamentoView } />
            <SettingsStack.Screen name="CompraCreditosView" component={CompraCreditosView} />
            <SettingsStack.Screen name="AcompanharView" component={AcompanharView} />
            <SettingsStack.Screen name="HistoricoView" component={HistoricoView} />
            <SettingsStack.Screen name="Erro" component={Erro} />
            <SettingsStack.Screen name="Sucesso" component={Sucesso} />
            <SettingsStack.Screen name="SuporteView" component={SuporteView} />
            <SettingsStack.Screen name="EditarPerfilView" component={EditarPerfilView} />
            <SettingsStack.Screen name="VeiculosView" component={VeiculosView} />
            <SettingsStack.Screen name="ConfirmarCompraView" component={ConfirmarCompraView} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
}
