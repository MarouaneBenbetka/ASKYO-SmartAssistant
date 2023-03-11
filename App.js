import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';

import LogedInLayout from './screens/LogedInLayout';
import SignIn from './screens/Auth/SignIn';
import Description from './screens/Auth/Description';
import Voice2 from './components/Voice2';
import AuthContext from './AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="description"
            component={Description}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="logedIn"
            component={LogedInLayout}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
  },
});
