import React from 'react';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export const isMobile: boolean = Dimensions.get('window').width <= 500;

export function StringIsNumber(value: any): boolean {
  return isNaN(Number(value)) === true;
}

export function enumToArray<T>(object: any): T[] {
  return Object.keys(object).filter(StringIsNumber).map(key => object[key]);
}

type DeploymentInfoResult = {
  label: string;
  icon: React.ReactElement
};

export function getDeploymentInfo(type: string): DeploymentInfoResult {
  const size = isMobile ? responsiveFontSize(3.5) : responsiveFontSize(2);

  switch (type) {
    case 'web':
      return { label: 'Web', icon: <MaterialCommunityIcons name='web' size={size} color={Colors.deployment[type]} /> };

    case 'android':
      return { label: 'Android', icon: <FontAwesome name='android' size={size - 0.5} color={Colors.deployment[type]} /> };

    case 'ios':
      return { label: 'iOS', icon: <Ionicons name='ios-appstore' size={size} color={Colors.deployment[type]} /> };

    default:
      return { label: 'Web', icon: <MaterialCommunityIcons name='web' size={size} color={Colors.deployment.web} /> };
  }
}