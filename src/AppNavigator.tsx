import React, { useEffect, useCallback, useState } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AskScreen, GettingStarted } from './screens';
// import { CustomHeader } from './components';
import { CustomAlert } from './components';

const Stack = createNativeStackNavigator();

// const renderHeader = (props: any) => {
//   const title = props.route.name.replace(/([A-Z])/g, ' $1').trim();
//   return <CustomHeader title={title} />;
// };

const AppNavigator: React.FC = () => {
  const [initialRoute, setInitialRoute] = useState<string>('GettingStarted');
  const [isReady, setIsReady] = useState(false);

  const checkUserSession = useCallback(async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      
      if (user) {
        setInitialRoute('Ask');
      }
    } catch (error) {
      if (__DEV__) console.log('Error checking user session:', error);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            headerShown: false,
            animation: Platform.OS === 'ios' ? 'default' : 'slide_from_right', 
            animationDuration: Platform.OS === 'ios' ? undefined : 100,
          }}
        >
          <Stack.Screen name="GettingStarted" component={GettingStarted} />
          <Stack.Screen name="Ask" component={AskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <CustomAlert />
    </>
  );
};

export default AppNavigator;