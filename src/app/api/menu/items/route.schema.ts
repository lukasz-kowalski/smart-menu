import { z } from 'zod/v4';

import { Currency, MenuItemStatus } from '@/server/types/enums';

export const menuItemSchema = z.object({
  categoryId: z.cuid(),
  name: z.string().min(3).max(200),
  description: z.string().min(5).max(2000),
  price: z.number().positive().max(999999),
  status: z.enum(MenuItemStatus),
  currency: z.enum(Currency),
});
