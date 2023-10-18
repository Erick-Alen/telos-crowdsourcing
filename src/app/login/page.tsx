import Image from 'next/image'
import LoginSideBarImage from './components/LoginSideBarImage'
import Card from '@/components/Card'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <main className='flex h-screen'>
      <LoginSideBarImage />
      <div className='flex-1 flex items-center justify-center'>
        <Card>
          texto card
          <Button className='rounded-md'>
            Entrar
          </Button>
          <Button variant='secondary' iconLeft='uil:facebook-f' className='rounded-md'>
            Entrar com Facebook
          </Button>
          <Button variant='secondary' iconLeft='fe:google' className='rounded-md'>
            Entrar com Google
          </Button>
        </Card>
      </div>
    </main>
  );
}
