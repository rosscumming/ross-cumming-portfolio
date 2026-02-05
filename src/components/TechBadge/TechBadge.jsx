import { Icon } from '@iconify/react';

const TechBadge = ({ icon, name, size = 25 }) => (
  <span className="flex items-center pt-2.5">
    <Icon icon={icon} height={size} width={size} className="mr-6.25 flex justify-center items-center" />
    {name}
  </span>
);

export default TechBadge;
