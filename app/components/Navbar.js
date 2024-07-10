"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu4Fill } from 'react-icons/ri';
import { useRouter } from 'next/navigation'; // Use next/navigation for Next.js 13 App Router
import netlifyIdentity, { initNetlifyIdentity, login } from '../../lib/netlifyIdentity';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [emailNotConfirmed, setEmailNotConfirmed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initNetlifyIdentity();

      netlifyIdentity.on('login', (user) => {
        if (user.email_confirmed_at) {
          setUser(user);
          router.push('/dashboard'); // Redirect to dashboard after login
        } else {
          setEmailNotConfirmed(true);
          netlifyIdentity.logout();
        }
      });

      netlifyIdentity.on('logout', () => {
        setUser(null);
      });

      return () => {
        netlifyIdentity.off('login');
        netlifyIdentity.off('logout');
      };
    }
  }, [router]);

  const handleLogin = () => {
    if (typeof window !== 'undefined') {
      
      login();
    }
  };

  const handleResendConfirmationEmail = () => {
    const email = netlifyIdentity.currentUser().email;
    resendConfirmationEmail(email);
  };

  return (
    <div className='flex justify-between py-4'>
      <Image
        src="/omega-logo.png"
        alt="logo"
        width={200}
        height={200}
      />
      <ul className='flex mx-4 mt-5 font-medium'>
        <li className='mx-3'>services</li>
        <li className='mx-3'>contact us</li>
        <li className='mx-3'>faqs</li>
      </ul>
      <div className='m-4 flex gap-4'>
        <div>
          <button
            onClick={handleLogin}
            className='border border-white text-white font-medium py-2 px-6 rounded-lg bg-transparent'
          >
            Login/Sign Up
          </button>
        </div>
        <Link href="/signup">
          <button className='text-black  font-medium py-2 px-6 rounded-lg bg-white'>Sign Up</button>
        </Link>
      </div>
      {emailNotConfirmed && (
        <div className="email-not-confirmed">
          <p>Email not confirmed. Please check your inbox.</p>
          <button onClick={handleResendConfirmationEmail}>Resend Confirmation Email</button>
        </div>
      )}
      <button className="md:hidden text-xl m-2 bg-black rounded-3xl">
            <RiMenu4Fill className="text-xl m-2" />
          </button>
    </div>
  );
};

export default Navbar;
