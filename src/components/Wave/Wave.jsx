import { ReactComponent as WaveSvg } from '../../images/wave.svg';
import './Wave.scss';

const Wave = ({ rotated = false }) => (
  <section className="wave">
    <WaveSvg className={`wave-svg ${rotated ? 'rotated' : ''}`} />
  </section>
);

export default Wave;
