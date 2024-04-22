import { NextRequest, NextResponse } from 'next/server';
import { currentProfile } from './lib/current-profile';

export async function middleware(request: NextRequest) {
  const user = await currentProfile()

  // Si el usuario está tratando de acceder a la página de inicio de sesión y ya está autenticado, redirigir a /
  if (user.id && request.nextUrl.pathname.includes('/login')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si la ruta no es de inicio de sesión y el usuario no está autenticado, redirigir a /login
  if (!user.id && !request.nextUrl.pathname.includes('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Agregar patrones de ruta deseados al array matcher
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

