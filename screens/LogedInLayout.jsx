import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import Home from './LogedInScreens/Home';
import Articles from './LogedInScreens/Articles';
import Profile from './LogedInScreens/Profile';
import ToDoList from './LogedInScreens/ToDoList';

import BellIcon from '../assets/navIcons/bell.svg';
import HomeIcon from '../assets/navIcons/home.svg';
import BookIcon from '../assets/navIcons/book.svg';
import UserIcon from '../assets/navIcons/user.svg';
import FocusedMarker from '../assets/navIcons/focusShape.svg';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function LogedInLayout() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          let icoWidth = 20;
          let icoHeight = 20;
          switch (route.name) {
            case 'Home':
              icon = <HomeIcon width={icoWidth} height={icoHeight} />;
              break;
            case 'Profile':
              icon = <UserIcon width={icoWidth} height={icoHeight} />;
              break;
            case 'ToDoList':
              icon = <BellIcon width={icoWidth} height={icoHeight} />;
              break;
            case 'Articles':
              icon = <BookIcon width={icoWidth} height={icoHeight} />;
              break;
          }
          // You can return any component that you like here!
          return (
            <View
              style={{
                padding: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {focused && (
                <FocusedMarker
                  style={{position: 'absolute', top: -20}}
                  width={34}
                />
              )}
              {icon}
            </View>
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          paddingTop: 0,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Articles" component={Articles} />
      <Tab.Screen name="ToDoList" component={ToDoList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
