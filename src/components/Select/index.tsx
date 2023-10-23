'use client';

import { twMerge } from 'tailwind-merge';

type SelectOption = {
  value: string;
  text: string;
};
type SelectProps = {
  label?: string;
  labelClassNames?: string;
  subDescription?: string | React.ReactNode;
  options: SelectOption[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  labelClassNames,
  subDescription,
  options,
  ...props
}: SelectProps) => {
  const defaultLabelClasses = `block font-bold mb-2 text-sm text-gray-600`;
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames);
  const defaultSelectClasses =
    'flex-grow px-3 rounded-lg focus:border-none py-2 text-sm outline-0 w-full';
  return (
    <div className='mb-6'>
      <label className={mergedLabelClasses}>{label}</label>
      {subDescription}
      <div className='flex-items-center border border-sub rounded-lg bg-white'>
        <select
          {...props}
          id='votingTime'
          className={`bg-white border text-gray-900 ${defaultSelectClasses}`}
        >
          {options.map((option, index) => (
            <option defaultValue={3} value={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
