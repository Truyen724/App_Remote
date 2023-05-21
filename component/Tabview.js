import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './Signup';
import MainScreen  from './Main';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{d:false}} >
      <Tab.Screen name="Main" component={MainScreen} options={{ headerShown:false}}/>
      <Tab.Screen name="Signup" component={SignupScreen}  options={{headerShown:false}} />
    </Tab.Navigator>
  );
}
export default MyTabs