import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import * as Screens from '../screens';
import { Colors } from '../theme';

export enum ScreenType {
  Home = 'Home',
  Project = 'Project',
  Contact = 'Contact',
  About = 'About',
}

const Stack = createStackNavigator();

export const headerConfig = {
  noHeader: { headerShown: false },
  noTitle: { title: null },
  headerTitle: ({ route, param, key }: { route: any, param: string, key: string }) => ({ title: route.params[param][key] }),
};

type TScreenProps = { [key in ScreenType]: any }

const ScreenProps: TScreenProps = {
  [ScreenType.Home]: {
    component: Screens.Home,
    options: headerConfig.noHeader
  },
  [ScreenType.Project]: {
    component: Screens.Project,
    options: headerConfig.noTitle
  },
  [ScreenType.Contact]: {
    component: Screens.Contact,
    options: headerConfig.noTitle
  },
  [ScreenType.About]: {
    component: Screens.About,
    options: headerConfig.noTitle
  },
}

const config: StackNavigationOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  cardOverlayEnabled: true,
  animationEnabled: true,
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.primary,
    borderBottomWidth: 0,
  },
  headerTintColor: Colors.secondary,
  headerTitleStyle: {
    color: Colors.secondary,
  }
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenType.Home}
        screenOptions={config}
        headerMode='float'
        mode='modal'>
        {Object.entries(ScreenProps).map(([name, props]) => <Stack.Screen key={name} name={name} {...props} />)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;