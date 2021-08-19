import React, { Fragment, memo } from 'react';
import config, { Colors, WorkStack } from '../../config';
import ColorText from '../ColorText';
import StackList from '../TagList/Stack';
import SubHeader from '../SubHeader';
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
