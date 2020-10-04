import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Linking, Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ContactType } from '../config';
import { Colors } from '../theme';

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

export function getContactIcon(type: ContactType | string): React.ReactElement {
  const size = isMobile ? responsiveFontSize(4) : responsiveFontSize(2.5);

  switch (type) {
    case ContactType.email:
      return <MaterialCommunityIcons name='email-outline' size={size} color={Colors.contact[type]} />;

    case ContactType.twitter:
      return <AntDesign name='twitter' size={size} color={Colors.contact[type]} />;

    case ContactType.linkedIn:
      return <Entypo name='linkedin' size={size} color={Colors.contact[type]} />;

    case ContactType.github:
      return <AntDesign name='github' size={size} color={Colors.contact[type]} />;

    default:
      return <AntDesign name='twitter' size={size} color={Colors.contact.email} />;
  }
}

export function openInNewTab(url: string) {
  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  }
}