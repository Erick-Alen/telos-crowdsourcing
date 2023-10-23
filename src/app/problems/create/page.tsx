'use client';
import LoginSideBarImage from '@/app/login/components/LoginSideBarImage';
import Button from '@/components/Button';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import TextInput from '@/components/TextInput';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ProblemCreateState = {
  title?: string;
  description?: string;
  uf?: string;
  city?: string;
  neighborhood?: string;
  imageUrl?: string;
  pix?: string;
  votingPeriod?: string;
};

const ProblemCreate = () => {
  const labelStyle = 'text-base text-black text-2xl';
  const defaultLabelClasses = 'block font-bold text-2xl';
  const mergedLabelClasses = twMerge(labelStyle, defaultLabelClasses);

  const [state, setState] = useState<ProblemCreateState>({
    title: '',
    description: '',
    uf: '',
    city: '',
    neighborhood: '',
    imageUrl: '',
    pix: '',
    votingPeriod: '',
  });

  const handleChangeState = (updatedValues: ProblemCreateState) => {
    setState((prev) => ({
      ...prev,
      ...updatedValues,
    }));
  };

  return (
    <div className='flex h-screen-navbar'>
      <LoginSideBarImage />
      <div className='flex flex-1 justify-center px-10 pb-10 overflow-auto'>
        <div className='mt-10 max-w-[588px] w-[100%]'>
          <TextInput
            onChange={(e) => {
              handleChangeState({ title: e.target.value });
            }}
            value={state.title}
            labelClassNames={labelStyle}
            label='Action title'
            placeholder='Action title'
          />
          <TextArea
            onChange={(e) => {
              handleChangeState({ description: e.target.value });
            }}
            value={state.description}
            labelClassNames={labelStyle}
            rows={4}
            label='Description...'
            className='resize-none'
          />
          <div className='flex flex-col'>
            <label className={`${mergedLabelClasses}`}>Location</label>
            <div className='flex items-end gap-2 max-w[100%]'>
              <TextInput
                onChange={(e) => {
                  handleChangeState({ uf: e.target.value });
                }}
                value={state.uf}
                labelClassNames={defaultLabelClasses}
                placeholder='State'
              />
              <TextInput
                onChange={(e) => {
                  handleChangeState({ city: e.target.value });
                }}
                value={state.city}
                labelClassNames={defaultLabelClasses}
                placeholder='City'
              />
              <TextInput
                onChange={(e) => {
                  handleChangeState({ neighborhood: e.target.value });
                }}
                value={state.neighborhood}
                labelClassNames={defaultLabelClasses}
                placeholder='Neighborhood'
              />
            </div>
          </div>
          <TextInput
            onChange={(e) => {
              handleChangeState({ imageUrl: e.target.value });
            }}
            value={state.imageUrl}
            label='Load your image...'
            labelClassNames={`${labelStyle} mb-0`}
            placeholder='insert your link here'
            iconLeft='uil:image-upload'
            subDescription={
              <span className='block mb-2 text-sm font-[400]'>
                Place the <strong>link</strong> to your image in the field
                below, it will be used as the cover of your action, the minimum
                resolution to not lose too much quality is 800x400px.
              </span>
            }
          />
          <TextInput
            onChange={(e) => {
              handleChangeState({ pix: e.target.value });
            }}
            value={state.pix}
            label='Pix Key'
            labelClassNames={`${labelStyle} mb-0`}
            subDescription={
              <span className='block mb-2 text-sm font-[400]'>
                Enter the pix key of whoever will be responsible for receiving
                donations and bringing the solution found to life, whether an
                individual or legal entity.
              </span>
            }
          />
          <Select
            onChange={(e) => {
              handleChangeState({ votingPeriod: e.target.value });
            }}
            value={state.votingPeriod}
            labelClassNames={`${labelStyle} mb-0`}
            label='Voting period'
            options={[
              { value: '3', text: '3 days' },
              { value: '7', text: '7 days' },
              { value: '15', text: '15 days' },
              { value: '20', text: '20 days' },
            ]}
            subDescription={
              <span className='block mb-2 text-sm font-[400]'>
                Choose how long people will be able to vote on a solution to
                your problem. The collection period is 30 days or until the goal
                is reached.
              </span>
            }
          />
          <div className='flex flex-col pb-10 gap-2'>
            <Button variant='primary' className='rounded-lg'>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCreate;
