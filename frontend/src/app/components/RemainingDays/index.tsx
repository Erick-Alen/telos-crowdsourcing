'use client'
import { stringUtils } from '@/utils/stringUtils';
import { twMerge } from 'tailwind-merge';

type RemainingDaysProps = {
  finalDate: string | Date;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

const RemainingDays = ({ finalDate, label, ...props }: RemainingDaysProps) => {
  const defaultClasses = `flex flex-col items-center text-sm`
  const mergedClasses = twMerge(defaultClasses, props.className)
  return (
    <div {...props} className={mergedClasses}>
      <h3 className='font-bold'>
        {stringUtils.getRemainingDays(`${finalDate}`)}
      </h3>
      <h4 className='font-bold'>{label}</h4>
    </div>
  );
};

export default RemainingDays;
