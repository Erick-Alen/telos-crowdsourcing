'use client';

type TextAreaProps = {
  label: string;
  labelClassNames?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextArea = ({
  label,
  className,
  labelClassNames,
  ...props
}: TextAreaProps) => {
  const defaultTextAreaClasses = `flex flex-grow px-3 rounded-lg focus:border-node py-2 text-sm outline-0`;
  const defaultLabelClasses = `block font-bold text-sm text-gray-600`;
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames);

  return (
    <div className={`mb-6`}>
      <label className={mergedLabelClasses}>{label}</label>
      <div className='flex items-center border border-sub rounded-lg'>
        <textarea
          {...props}
          className={`${defaultTextAreaClasses} ${className}`}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
