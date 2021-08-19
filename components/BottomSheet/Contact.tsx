import React from 'react';
import SocialIcons from '../Footer/SocialIcons';
import SubHeader from '../SubHeader';
import BaseBottomSheet, { BaseBottomSheetProps } from './Base';

interface ContactBottomSheetProps extends BaseBottomSheetProps {}

function ContactBottomSheet(
  props: ContactBottomSheetProps,
): React.ReactElement {
  const { open, onDismiss } = props;

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader
        title={`Let's Connect`}
        description='Do you have a project in mind? Want to hire me? or simply wanna chat? Feel free to reach out'
      >
        <SocialIcons className='mt-4 mb-2' />
      </SubHeader>
    </BaseBottomSheet>
  );
}

export default ContactBottomSheet;
