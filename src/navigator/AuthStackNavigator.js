
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator