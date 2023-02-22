import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "@react-native-material/core";

import CadastroView from './externo/cadastro/CadastroView.js';
import Home from './interno/Home.js';
import LoginView from './externo/login/LoginView.js'
import Index from './externo/Index.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Rota Ativa" component={Index} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginView} options={{ headerShown: false }}/>
          <Stack.Screen name="Cadastro" component={CadastroView} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}