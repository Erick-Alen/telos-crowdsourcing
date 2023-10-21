'use client';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import { RegisterFormState } from '.';

type FirstStepProps = {
  handleNextStep: () => void;
  state: RegisterFormState;
  handleChangeState: (updatedValues: RegisterFormState) => void;
};

const FirstStep = ({
  handleNextStep,
  state,
  handleChangeState,
}: FirstStepProps) => {
  return (
    <>
      <TextInput
        label='E-mail'
        labelClassNames='text-black'
        placeholder='E-mail'
        type='email'
        iconLeft='uil:envelope-alt'
        onChange={(e) => handleChangeState({ email: e.target.value })}
        value={state.email}
      />
      <TextInput
        label='Password'
        labelClassNames='text-black'
        placeholder='Password'
        type='password'
        iconLeft='uil:key-skeleton-alt'
        onChange={(e) => handleChangeState({ password: e.target.value })}
        value={state.password}
      />
      <TextInput
        label='Confirm Password'
        labelClassNames='text-black'
        placeholder='Confirm Password'
        type='password'
        iconLeft='uil:key-skeleton-alt'
        onChange={(e) => handleChangeState({ confirmPassword: e.target.value })}
        value={state.confirmPassword}
      />

      <Button onClick={handleNextStep} className='rounded-md w-[100%]'>
        Next
      </Button>
      {/*
      <div className='mt-[24px] text-left'>
        <span className='cursor-pointer flex gap-2 items-center underline'>
          <Icon icon='uil:user' />
          Login
        </span>
      </div> */}
    </>
  );
};

export default FirstStep;
