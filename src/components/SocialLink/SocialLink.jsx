import { Icon } from '@iconify/react';
import './SocialLink.scss';

const SocialLink = ({ icon, url, label }) => (
  <span className={`social-link social-link--${label.toLowerCase()}`}>
    <a href={url} aria-label={label}>
      <Icon icon={icon} height={60} width={60} className="social-link__icon" />
    </a>
  </span>
);

export default SocialLink;
