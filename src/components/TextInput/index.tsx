'use client';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';

type TextInputProps = {
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  labelClassNames?: string;
  subDescription?: string | React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>; //adding all properties of an html input element inside our component

export const TextInput = ({
  iconLeft,
  iconRight,
  label,
  labelClassNames,
  subDescription,
  ...props
}: TextInputProps) => {
  const defaultInputClasses = `flex-grow px-3 rounded-[8px] focus:border-none py-2 text-sm outline-0 w-full`;
  const defaultLabelClasses = `block font-bold mb-2 text-sm text-gray-600`;
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames);
  return (
    <div className='mb-6'>
      <label className={mergedLabelClasses}>{label}</label>
      <label
        className={`flex items-center border border-sub rounded-[8px] bg-white `}
      >
        {iconLeft && (
          <div className='ml-2'>
            <Icon icon={iconLeft} />
          </div>
        )}
        <input
          {...props}
          className={`${defaultInputClasses} ${iconLeft ? 'pl-2' : ''} ${
            iconRight ? 'pr-2' : ''
          }`}
        />
        {iconRight && (
          <div className='ml-2'>
            <Icon icon={iconRight} />
          </div>
        )}
      </label>
    </div>
  );
};
