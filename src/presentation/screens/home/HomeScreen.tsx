// React Native
import {
  Text,
  View
} from 'react-native';
// Hooks
import { useMovies } from '../../hooks';


export const HomeScreen = () => {
  const {} = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
