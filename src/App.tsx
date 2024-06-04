import 'react-native-gesture-handler';
// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Routes
import { StackNavigator } from './presentation/navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
