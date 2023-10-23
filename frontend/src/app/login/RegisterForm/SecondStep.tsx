'use client';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import { RegisterFormState } from '.';

type SecondStepProps = {
  state: RegisterFormState;
  handleChangeState: (updatedValues: RegisterFormState) => void;
};

const SecondStep = ({ state, handleChangeState }: SecondStepProps) => {
  return (
    <div>
      <TextInput
        label='Full Name'
        labelClassNames='text-black'
        placeholder='Name'
        iconLeft='uil:user'
        onChange={(e) => handleChangeState({ fullName: e.target.value })}
        value={state.fullName}
      />
      <TextInput
        label='Birth Date'
        labelClassNames='text-black cursor-pointer'
        placeholder='DD/MM/AAAA'
        type='date'
        iconLeft='uil:calendar-alt'
        onChange={(e) => handleChangeState({ dateOfBirth: e.target.value })}
        value={state.dateOfBirth?.toString()}
      />
      <TextInput
        label='Phone'
        labelClassNames='text-black'
        placeholder='(00)9 0000-0000'
        type='number'
        iconLeft='uil:phone-alt'
        onChange={(e) => handleChangeState({ cellPhone: e.target.value })}
        value={state.cellPhone}
      />

      <Button className='rounded-md w-[100%]'>Create Account</Button>
    </div>
  );
};

export default SecondStep;
