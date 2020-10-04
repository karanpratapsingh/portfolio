import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '../../components';
import Config, { ContactType } from '../../config';
import { useTheme } from '../../store';
import { Colors, defaultContainerStyles, Theme, typography } from '../../theme';
import { getContactIcon, isMobile, openInNewTab } from '../../utils';

function Contact(): React.ReactElement {
  const theme = useTheme(state => state.theme);
  const contactInfo = Object.entries(Config.contact);

  return (
    <View style={styles(theme).container}>
      <Heading label='Contact' />
      <Text style={styles(theme).contactText}>
        Do you have a project in mind? Want to hire me? Or simply wanna chat? Feel free to reach out
      </Text>
      {contactInfo.map(([type, url], index: number) => <ContactCard key={index} type={type} url={url} />)}
    </View>
  );
}

interface ContactCardProps {
  type: string;
  url: string;
}

function ContactCard(props: ContactCardProps) {
  const { type, url } = props;
  const theme = useTheme(state => state.theme);

  const onContact = (): void => {
    let contactUrl: string = url;

    if (type === ContactType.email) {
      contactUrl = `mailto:${contactUrl}`;
    } else {
      contactUrl = `https://${contactUrl}`;
    }
    openInNewTab(contactUrl);
  };

  return (
    <TouchableOpacity style={styles(theme).contactCard} onPress={onContact}>
      {getContactIcon(type)}
      <Text style={styles(theme).contactCardText}>
        {url}
      </Text>
    </TouchableOpacity>
  )
}

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    ...defaultContainerStyles(theme)
  },
  contactText: {
    fontSize: typography.body,
    color: Colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  contactCardText: {
    fontSize: isMobile ? typography.body : typography.subtitle,
    color: Colors.white,
    fontStyle: 'italic',
    marginLeft: isMobile ? 10 : 25,
    fontWeight: '500',
    textDecorationLine: 'underline'
  }
});

export default Contact;