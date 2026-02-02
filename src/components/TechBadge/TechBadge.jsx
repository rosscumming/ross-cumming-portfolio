import { Icon } from '@iconify/react';
import './TechBadge.scss';

const TechBadge = ({ icon, name, size = 25 }) => (
  <span className="tech-badge">
    <Icon icon={icon} height={size} width={size} className="tech-badge__icon" />
    {name}
  </span>
);

export default TechBadge;
