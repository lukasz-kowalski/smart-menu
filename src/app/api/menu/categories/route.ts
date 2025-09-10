import { NextResponse } from 'next/server';

import prisma from '@/server/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        order: true,
        items: {
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
            currency: true,
            status: true,
            categoryId: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        order: 'asc',
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('[CATEGORIES_GET]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
