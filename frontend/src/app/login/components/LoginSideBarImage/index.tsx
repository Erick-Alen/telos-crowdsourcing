'use client'
import handsImage from "@/assets/Rectangle 5.jpg"
import Image from 'next/image'
export default function LoginSideBarImage() {
  return (
    <div className='hidden lg:block lg:w-[480px] bg-black'>
      <Image src={handsImage} alt="hands" className='object-cover h-full w-full' />
    </div>
  )
}
