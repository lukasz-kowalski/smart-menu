import { NextResponse } from 'next/server';

import prisma from '@/server/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.category.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error('[CATEGORIES_GET]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
