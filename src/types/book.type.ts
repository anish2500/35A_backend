import {z} from 'zod';

export const BookSchema  = z.object({
    id: z.string().min (1, "Book Id is required"), 
    title : z.string().min(1, "Book title is required"), 
    date: z.string().optional(), 
});

export type Book  = z.infer<typeof BookSchema>;//automatically create type from schema 