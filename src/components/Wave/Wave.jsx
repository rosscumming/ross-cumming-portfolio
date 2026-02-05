import WaveSvg from '../../images/wave.svg?react';

const Wave = ({ rotated = false }) => (
  <div className="wave">
    <WaveSvg className={`wave-svg ${rotated ? 'rotated' : ''}`} />
  </div>
);

export default Wave;
