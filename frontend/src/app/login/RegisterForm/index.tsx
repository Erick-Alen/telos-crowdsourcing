import Button from '@/components/Button';
import Card from '@/components/Card';
import TextInput from '@/components/TextInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { useState } from 'react';
import { LoginPageActionTypes } from '../page';

export type RegisterFormState = {
  step?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  dateOfBirth?: string | Date;
  cellPhone?: string;
};

type RegisterFormProps = {
  handleSetAction: (action: LoginPageActionTypes) => void;
};

export const RegisterForm = ({ handleSetAction }: RegisterFormProps) => {
  const [state, setState] = useState<RegisterFormState>({
    step: 0,
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    dateOfBirth: '',
    cellPhone: '',
  });
  //passar um opbjeto no SetState em vez de criar:
  // step, setStep, email, setEmail, password, setPassword

  const handleChangeState = (updatedValues: RegisterFormState) => {
    setState((prev) => ({
      ...prev,
      ...updatedValues,
    }));
  };

  const handleNextStep = () => {
    handleChangeState({ step: state.step ? state.step++ : 1 });
  };

  const steps = [
    <FirstStep
      handleNextStep={handleNextStep}
      handleChangeState={handleChangeState}
      state={state}
    />,
    <SecondStep state={state} handleChangeState={handleChangeState} />,
  ];

  return (
    <Card className='border-[#121212'>
      {steps[state.step ?? 0]}
      <div className='mt-[26px]'>
        <span
          onClick={() => handleSetAction('login')}
          className='flex items- gap-1 text-sub cursor-pointer'
        >
          <Icon icon='uil:user' />
          Login
        </span>
      </div>
      {/* <TextInput
        label='E-mail'
        labelClassNames='text-black'
        placeholder='E-mail'
        type='email'
        iconLeft='uil:envelope-alt'
      />
      <TextInput
        label='Senha'
        labelClassNames='text-black'
        placeholder='Senha'
        type='password'
        iconLeft='uil:key-skeleton-alt'
      />
      <TextInput
        label='Confirmar Senha'
        labelClassNames='text-black'
        placeholder='Confirmar Senha'
        type='password'
        iconLeft='uil:key-skeleton-alt'
      />

      <Button className='rounded-md w-[100%]'>Próximo</Button>

      <div className='mt-[24px] text-left'>
        <span className='cursor-pointer flex gap-2 items-center underline'>
          <Icon icon='uil:user' />
          Login
        </span>
      </div> */}
    </Card>
  );
};
