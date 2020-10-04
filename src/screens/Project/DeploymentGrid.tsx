import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '../../components';
import { Deployment } from '../../config';
import { Colors, typography } from '../../theme';
import { getDeploymentInfo, isMobile } from '../../utils';

interface DeploymentGridProps {
  deployment: Deployment;
  showHeading?: boolean;
}

function DeploymentGrid(props: DeploymentGridProps) {
  const { deployment, showHeading = true } = props;
  const deployments = Object.entries(deployment);

  return (
    <View>
      {deployments.length && showHeading && <Heading label='Deployments' variant='medium' />}
      <View style={styles.content}>
        {deployments.map(([type, uri], index: number) => <DeploymentIcon key={index} type={type} uri={uri} />)}
      </View>
    </View>
  );
}

interface DeploymentIconProps {
  type: string;
  uri: string | undefined;
}

function DeploymentIcon(props: DeploymentIconProps): React.ReactElement {
  const { type, uri } = props;
  const { label, icon } = getDeploymentInfo(type);

  const openProject = (): void => {
    console.log(uri);
  };

  return (
    <TouchableOpacity style={styles.deploymentIcon} onPress={openProject}>
      {icon}
      <Text style={styles.deploymentText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  deploymentIcon: {
    alignItems: 'center',
    width: isMobile ? 100 : 120,
    borderRadius: 50,
    flexDirection: 'row',
    marginRight: isMobile ? 10 : 15,
    paddingVertical: isMobile ? 2 : 4,
    paddingHorizontal: isMobile ? 5 : 8,
    backgroundColor: Colors.white
  },
  deploymentText: {
    fontSize: typography.caption,
    marginLeft: 8,
    fontWeight: '500',
  }
});

export default DeploymentGrid;