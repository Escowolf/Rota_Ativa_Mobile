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
        name="Inicio"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="InicioView">
            <HomeStack.Screen initialParams={{user}} name="InicioView" component={InicioView} />
            <HomeStack.Screen initialParams={{user}} name="EditarPerfilView" component={EditarPerfilView} />
            <HomeStack.Screen initialParams={{user}} name="Erro" component={Erro} />
            <HomeStack.Screen initialParams={{user}} name="Sucesso" component={Sucesso} />
            <HomeStack.Screen initialParams={{user}} name="VeiculosView" component={VeiculosView} />
            <HomeStack.Screen initialParams={{user}} name="SuporteView" component={SuporteView}  />
            <HomeStack.Screen initialParams={{user}} name="HistoricoView" component={HistoricoView} 
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
            <MapStack.Screen initialParams={{user}} name="Map" component={Map} />
            <MapStack.Screen initialParams={{user}} name="EstacionarView" component={EstacionarView} />
            <MapStack.Screen initialParams={{user}} name="Erro" component={Erro} />
            <MapStack.Screen initialParams={{user}} name="Sucesso" component={Sucesso} />
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
            <SettingsStack.Screen  initialParams={{user}}  name="PerfilView" component={PerfilView} />
            <SettingsStack.Screen initialParams={{user}} name="PagamentoView" component={PagamentoView } />
            <SettingsStack.Screen initialParams={{user}} name="CompraCreditosView" component={CompraCreditosView} />
            <SettingsStack.Screen initialParams={{user}} name="AcompanharView" component={AcompanharView} />
            <SettingsStack.Screen initialParams={{user}} name="HistoricoView" component={HistoricoView} />
            <SettingsStack.Screen initialParams={{user}} name="Erro" component={Erro} />
            <SettingsStack.Screen initialParams={{user}} name="Sucesso" component={Sucesso} />
            <SettingsStack.Screen initialParams={{user}} name="SuporteView" component={SuporteView} />
            <SettingsStack.Screen initialParams={{user}} name="EditarPerfilView" component={EditarPerfilView} />
            <SettingsStack.Screen initialParams={{user}} name="VeiculosView" component={VeiculosView} />
            <SettingsStack.Screen initialParams={{user}} name="ConfirmarCompraView" component={ConfirmarCompraView} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
}
