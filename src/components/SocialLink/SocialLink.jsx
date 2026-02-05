import { Icon } from '@iconify/react';

const SocialLink = ({ icon, url, label }) => (
  <span className="flex justify-center items-center">
    <a href={url} aria-label={label} target="_blank" rel="noopener noreferrer">
      <Icon icon={icon} height={60} width={60} className="transition-transform duration-200 ease-in-out hover:scale-110" />
    </a>
  </span>
);

export default SocialLink;
