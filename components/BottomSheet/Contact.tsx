import { contact } from 'config/contact';
import React, { memo } from 'react';
import { openPopupWidget } from 'react-calendly';
import SocialIcons from '../SocialIcons';
import SubHeader from '../SubHeader';
import BaseBottomSheet, { BaseBottomSheetProps } from './Base';

interface ContactBottomSheetProps extends BaseBottomSheetProps {}

function ContactBottomSheet(
  props: ContactBottomSheetProps,
): React.ReactElement {
  const { open, onDismiss } = props;

  function onScheduleMeeting(): void {
    if (!contact.calendly) {
      console.error('err: calendly link was not provided.');
      return;
    }

    const config = {
      url: contact.calendly,
    };
    openPopupWidget(config);
    onDismiss();
  }

  const description: React.ReactNode = (
    <span>
      Do you have a project in mind? Want to hire me? or simply wanna chat? Feel
      free to
      <span
        className='cursor-pointer underline ml-1'
        onClick={onScheduleMeeting}
      >
        schedule a meeting.
      </span>
    </span>
  );

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader title={`Let's Connect`} description={description}>
        <SocialIcons className='mt-6 mb-2' />
      </SubHeader>
    </BaseBottomSheet>
  );
}

export default memo(ContactBottomSheet);
