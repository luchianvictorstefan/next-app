import PersonForm from '@/components/forms/PersonForm';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const vara = process.env.SERVER_SIDE_ONLY_VAR;

  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className="sub-container max-w-[496px]">
          <Image src='/assets/icons/waffle-logo-full2.svg'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 fit'
          ></Image>
          <PersonForm />
          <div className='text-14-regular mt-20 flex justify-between'>
            <p>NEXT PUBLIC VAR {process.env.NEXT_PUBLIC_MY_ENV_VARIABLE}</p>
            <p>ENV VAR {vara}</p>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              &copy; 2022 Your Company Name. All rights reserved.
            </p>
            <Link href="/?admin=true" className='text-green-500'>Admin
            </Link>
          </div>
        </div>
      </section>
      <Image src='/assets/images/waffle-icecream.png'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      />
    </div>
  )
}
