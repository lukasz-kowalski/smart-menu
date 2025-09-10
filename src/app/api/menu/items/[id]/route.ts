import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/server/lib/prisma';
import { z } from 'zod';

import { menuItemSchema } from '@/app/api/menu/items/[id]/route.schema';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const json = await req.json();
    const data = menuItemSchema.parse(json);

    const category = await prisma.category.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    const item = await prisma.menuItem.findUnique({ where: { id: params.id } });

    if (!item) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const updated = await prisma.menuItem.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json(updated);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.flatten() }, { status: 400 });
    }
    console.error('[MENU_ITEM_PUT]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
