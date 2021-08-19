import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieScreen from './pages/Movie';
import AddTodoScreen from './pages/AddTodo/index';
import TodoScreen from './pages/Todo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function InitialStackHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MovieScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="InfoPelem" component={KomponenHalamanMovieDetail} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bookmarks-outline" size={size} color={color} />
            ),
          }}
          name="Home"
          component={InitialStackHome}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="add" size={size} color={color} />
            ),
          }}
          name="Todo"
          component={TodoScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="add" size={size} color={color} />
            ),
          }}
          name="Add Todo"
          component={AddTodoScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
