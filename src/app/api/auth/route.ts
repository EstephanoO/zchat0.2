import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import db from '@/lib/db';

export async function POST(request: Request) {
  try {
    const record = await request.json();
    cookies().set('pb_auth', JSON.stringify(record));
    return NextResponse.json(record);
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || err.toString() }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}

