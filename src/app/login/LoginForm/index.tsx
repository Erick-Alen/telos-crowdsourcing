import Button from '@/components/Button';
import Card from '@/components/Card';
import TextInput from '@/components/TextInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import { LoginPageActionTypes } from '../page';

type LoginFormProps = {
  handleSetAction: (action: LoginPageActionTypes) => void;
};

export const LoginForm = ({ handleSetAction }: LoginFormProps) => {
  return (
    <Card className='border-[#121212'>
      <TextInput
        label='E-mail'
        labelClassNames='text-black'
        placeholder='E-mail'
        type='email'
        iconLeft='uil:envelope-alt'
      />
      <TextInput
        label='Password'
        labelClassNames='text-black'
        placeholder='Password'
        type='password'
        iconLeft='uil:key-skeleton-alt'
      />
      <div className='mb-6 text-left'>
        <a href='/forgot-password' className='text-sub text-sm underline'>
          Forgot my password
        </a>
      </div>
      {/* <TextInput
            label='Confirmar senha'
            labelClassNames='text-black'
            placeholder='Confirmar senha'
            type='password'
            iconLeft='uil:key-skeleton-alt'
          /> */}

      <div className={`flex flex-col gap-[10px]`}>
        <Button className='rounded-md'>Login</Button>
        <Button
          variant='secondary'
          iconLeft='uil:facebook-f'
          className='rounded-md'
        >
          Login with Facebook
        </Button>
        <Button variant='secondary' iconLeft='fe:google' className='rounded-md'>
          Login with Google
        </Button>
      </div>
      <div className='mt-[24px] text-left'>
        <span
          onClick={() => handleSetAction('register')}
          className='cursor-pointer flex gap-2 items-center underline'
        >
          <Icon icon='uil:plus-square' />
          Create Account
        </span>
        {/* <a href='/forgot-password' className='text-sub text-sm underline'>
              Criar uma conta
            </a> */}
      </div>
    </Card>
  );
};
