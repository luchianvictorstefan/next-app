import PersonForm from '@/components/forms/PersonForm';
import Image from "next/image";
import Link from 'next/link';
import { logtoConfig } from './logto/logto';
import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import SignIn from './sign-in';
import SignOut from './sign-out';

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

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
          {/* <PersonForm /> */}
          <nav className="flex flex-col items-center space-y-8">
            {isAuthenticated ? (
              <p className="flex flex-col items-center mb-12 space-y-4 text-white">
                Hello, {claims?.sub},
                <SignOut
                  onSignOut={async () => {
                    'use server';
                    await signOut(logtoConfig);
                  }}
                />
              </p>
            ) : (
              <p className="flex flex-col items-center text-white">
                <SignIn
                  onSignIn={async () => {
                    'use server';
                    console.log('clicked');
                    await signIn(logtoConfig);
                  }}
                />
              </p>
            )}
          </nav>

          <div className='text-14-regular mt-20 flex justify-between'>
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
