import Image from 'next/image';
import ActionsCard from './components/ActionsCard';
import handsImage from '@/assets/Rectangle 5.jpg';
import ProblemsCard from './components/ProblemsCard';

export default function Home() {
  const problems: Problem[] = [
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira dos santos',
      address: {
        uf: 'PR',
        city: 'Maringá',
        neighborhood: 'Zona 02',
      },
      deadline: '2023-10-23',
      pix: 'teste pix',
    },
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira dos santos',
      address: {
        uf: 'PR',
        city: 'Maringá',
        neighborhood: 'Zona 02',
      },
      deadline: '2023-10-23',
      pix: 'teste pix',
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
        {problems.map((problem, index) => (
          <ProblemsCard key={index} problem={problem} />
        ))}
      </div>
    </main>
  );
}
