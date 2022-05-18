import { Colors } from 'config/colors';
import {
  FaFacebook as FacebookIcon,
  FaLinkedinIn as LinkedinIcon,
} from 'react-icons/fa';
import { IoLogoTwitter as TwitterIcon } from 'react-icons/io';
import { SiGmail as EmailIcon, SiReddit as RedditIcon } from 'react-icons/si';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';

interface ShareProps {
  title: string;
  url: string;
}

export default function Share(props: ShareProps): React.ReactElement {
  const { title, url } = props;

  return (
    <div className='flex items-center justify-center pt-2'>
      <div className='flex w-44 items-center justify-between'>
        <TwitterShareButton title={title} url={url}>
          <TwitterIcon size={22} color={Colors.twitter} />
        </TwitterShareButton>
        <RedditShareButton title={title} url={url}>
          <RedditIcon size={22} color={Colors.reddit} />
        </RedditShareButton>
        <FacebookShareButton title={title} url={url}>
          <FacebookIcon size={22} color={Colors.facebook} />
        </FacebookShareButton>
        <LinkedinShareButton title={title} url={url}>
          <LinkedinIcon size={22} color={Colors.linkedin} />
        </LinkedinShareButton>
        <EmailShareButton title={title} url={url}>
          <EmailIcon size={22} color={Colors.email} />
        </EmailShareButton>
      </div>
    </div>
  );
}
