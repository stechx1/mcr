import { Button } from '../../components';
import { InfoBar } from '../InfoBar/InfoBar';
import { Commercial } from './Commerical/Commercial';
import { Infrastructure } from './Infrastructure/Infrastructure';
import { Residential } from './Residential/Residential';

export const OurWork = () => {
  return (
    <div>
      <InfoBar
        subheading={'Building is what we do'}
        heading='MCR Construction Is Leading Quality Projects'
        button={true}
        buttonText='Read More'
      />
      <Commercial />
      <Infrastructure />
      <Residential />
    </div>
  );
};
