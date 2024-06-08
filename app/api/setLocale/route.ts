import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { newLocale } = await req.json();
  const response = NextResponse.json({ message: 'Locale set' });
  response.cookies.set('NEXT_LOCALE', newLocale, { path: '/' });
  return response;
}