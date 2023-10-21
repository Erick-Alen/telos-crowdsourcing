'use client';

import { stringUtils } from '@/utils/stringUtils';
import { Icon } from '@iconify/react/dist/iconify.js';
type AddressProps = AddressType;
const Address = ({ city, neighborhood, uf }: AddressProps) => {
  const capitalizedNeighborhood =
    stringUtils.capitalizeFirstCharacterText(neighborhood);
  const capitalizedCity = stringUtils.capitalizeFirstCharacterName(city);
  const address = `${capitalizedNeighborhood}, ${capitalizedCity} - ${uf}`;
  return (
    <div className='flex items-center gap-1 text-sm'>
      <Icon icon='fluent:location-28-filled' className='text-sub' />
      <span>{address}</span>
    </div>
  );
};

export default Address;
