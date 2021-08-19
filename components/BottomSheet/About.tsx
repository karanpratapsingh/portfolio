import config from 'config';
import { Colors } from 'config/colors';
import { WorkStack } from 'config/stack';
import React, { Fragment, memo } from 'react';
import ColorText from '../ColorText';
import SubHeader from '../SubHeader';
import StackList from '../TagList/Stack';
import BaseBottomSheet, { BaseBottomSheetProps } from './Base';

const { personal } = config;

interface AboutBottomSheetProps extends BaseBottomSheetProps {}

function AboutBottomSheet(props: AboutBottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  const about = (
    <Fragment>
      <span>{personal.about}</span>
      <p className='mt-4'>
        <ColorText
          className='px-2'
          text='Resume'
          url={personal.resume}
          backgroundColor={Colors.resume}
        />
      </p>
    </Fragment>
  );

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader title='About' description={about} />
      <StackList stack={WorkStack} />
    </BaseBottomSheet>
  );
}

export default memo(AboutBottomSheet);
