import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod/v4';

import prisma from '@/server/lib/prisma';

import { menuItemSchema } from '@/app/api/menu/items/route.schema';

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = menuItemSchema.safeParse(json);

    if (!parsed.success) {
      const treeifiedError = z.treeifyError(parsed.error);

      return NextResponse.json({ error: treeifiedError }, { status: 400 });
    }

    const data = parsed.data;

    const category = await prisma.category.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    const item = await prisma.menuItem.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        status: data.status,
        currency: data.currency,
        categoryId: data.categoryId,
      },
    });

    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    console.error('[MENU_ITEM_CREATE]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
