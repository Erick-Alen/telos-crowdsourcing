import Address from '@/components/Address';
import Button from '@/components/Button';
import ProgressBar from '@/components/Progressbar';
import { stringUtils } from '@/utils/stringUtils';
import Image from 'next/image';

type ActionCardProps = {
  action: Action;
};
const ActionsCard = ({ action }: ActionCardProps) => {
  const {
    img,
    title,
    author,
    description,
    address,
    amountCollected,
    totalGoal,
    finalDate,
  } = action;
  return (
    <div className='flex flex-col gap-4 rounded-lg overflow-hidden shadow-md w-full max-w-[420px] min-w-[320]'>
      <img
        className='w-full aspect-card-image'
        src={img}
        width={420}
        height={280}
        alt='image'
      />
      <div className='flex flex-col py-8 px-6'>
        <div className='flex flex-col w-full h-72 overflow-hidden gap-6'>
          <h2 className='text-xl font-bold line-clamp-2'>{title}</h2>
          <div className=' text-sm text-sub'>
            By {stringUtils.capitalizeFirstCharacterName(author)}
          </div>
          <div className='line-clamp-3'>{description}</div>
          <Address
            uf={address.uf}
            city={address.city}
            neighborhood={address.neighborhood}
          />
        </div>
        <ProgressBar
          percent={amountCollected / totalGoal}
          firstElement={
            <div className='flex flex-col items-center text-sm'>
              <h3 className='font-bold'>R$ {amountCollected}</h3>
            </div>
          }
          secondElement={
            <div className='flex flex-col items-center text-sm'>
              <h3 className='font-bold'>7 days</h3>
              <h4 className='font-bold'>Left</h4>
            </div>
          }
        />
      </div>
      <Button iconLeft='fluent:handshake-24-filled' className='py-6'>
        Support action
      </Button>
    </div>
  );
};

export default ActionsCard;
