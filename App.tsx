import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './app/views/Home';
import AboutScreen from './app/views/About';
import LoginScreen from './app/views/Login';
import RegisterScreen from './app/views/Register';
import GlobalHeader from './app/components/Header';
import Blog from './app/views/Blog';
import BlogDetail from './app/views/BlogDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{title: 'Globo Blog'}}
        />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'About Us'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => <GlobalHeader />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
