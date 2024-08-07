// lib/session.js
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getSession(req) {
  const session = await getServerSession(authOptions, req);
  return session;
}
