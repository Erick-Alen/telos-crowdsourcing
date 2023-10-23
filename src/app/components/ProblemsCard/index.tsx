'use client'
import Address from '@/components/Address';
import Button from '@/components/Button';
import ProgressBar from '@/components/Progressbar';
import { stringUtils } from '@/utils/stringUtils';
import Image from 'next/image';
import RemainingDays from '../RemainingDays';

type ProblemsCardProps = {
  problem: Problem;
};
const ProblemsCard = ({ problem }: ProblemsCardProps) => {
  const { title, description, address, imageUrl, deadline, author } = problem;
  return (
    <div className='flex flex-col gap-4 rounded-lg overflow-hidden shadow-md w-full max-w-[420px] min-w-[320]'>
      <img
        className='w-full aspect-card-image'
        src={imageUrl}
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
        <RemainingDays finalDate={`${deadline}`} label='for the end of voting' />
      </div>
      <Button iconLeft='fluent:handshake-24-filled' className='py-6'>
        Support action
      </Button>
    </div>
  );
};

export default ProblemsCard;
