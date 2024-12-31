import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FormularioScreen from "../screens/FormularioScreen";
import { NavigationContainer } from "@react-navigation/native";
import ListaScreen from "../screens/ListaScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import EditarScreen from "../screens/EditarScreen";
import PeliculasScreen from "../screens/PeliculasScreen";

const Tob = createMaterialTopTabNavigator();

function MyTobs() {
    return (
        <Tob.Navigator>
            <Tob.Screen name="Guardar" component={FormularioScreen} />
            <Tob.Screen name="Lista" component={ListaScreen} />
            <Tob.Screen name="Peliculas" component={PeliculasScreen} />
            <Tob.Screen name="ListaPeli" component={ListaScreen} />
            <Tob.Screen name="Editar" component={EditarScreen} />
        </Tob.Navigator>
    );
}
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Mytobs" component={MyTobs} />
        </Stack.Navigator>
    );
}




export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}