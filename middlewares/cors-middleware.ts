import { NextRequest, NextResponse } from 'next/server';

const allowedOrigin = 'http://localhost:3000';

export function corsMiddleware(req: NextRequest) {
  const origin = req.headers.get('origin');

  if (req.method === 'OPTIONS') {
    const preflightResponse = NextResponse.next();
    preflightResponse.headers.set('Access-Control-Allow-Credentials', 'true');
    preflightResponse.headers.set('Access-Control-Allow-Origin', allowedOrigin);
    preflightResponse.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    preflightResponse.headers.set(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    return preflightResponse;
  }

  if (origin && !origin.startsWith(allowedOrigin)) {
    console.error('CORS error: This origin is not allowed');
    return NextResponse.json(
      { error: 'CORS error: This origin is not allowed' },
      { status: 403 }
    );
  }

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET,DELETE,PATCH,POST,PUT'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  return response;
}

// export const config = {
//   matcher: '/api/:path*',
// };
