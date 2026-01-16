import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    author: z.string().optional(),
    excerpt: z.string(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    category: z.enum(['feast', 'class', 'community', 'service']),
  }),
});

const clergy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // name
    role: z.string(),
    photo: z.string(),
    order: z.number().default(10),
    active: z.boolean().default(true),
  }),
});

export const collections = { news, events, clergy };
