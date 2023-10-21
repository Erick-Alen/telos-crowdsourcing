import Image from 'next/image';
import ActionsCard from './components/ActionsCard';
import handsImage from '@/assets/Rectangle 5.jpg';

export default function Home() {
  const actions: Action[] = [
    {
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira dos santos',
      address: {
        uf: 'PR',
        city: 'Maringá',
        neighborhood: 'Zona 02',
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: '2023-10-23',
    },
    {
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringá',
        neighborhood: 'Zona 02',
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: '2023-10-23',
    },
  ];
  return (
    <main className='flex flex-col items-center '>
      <div className='mt-14'>
        <h1 className='text-5xl text-black font-extrabold text-center'>
          Choose an Action to support
        </h1>
      </div>
      <div className='flex flex-wrap gap-8 w-full max-w-[1360] justify-center py-4'>
        {actions.map((action, index) => (
          <ActionsCard key={index} action={action} />
        ))}
      </div>
    </main>
  );
}
