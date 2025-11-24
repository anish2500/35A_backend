
//Data transfer Object - DTO 

import{z} from 'zod';
import { BookSchema } from "../../types/book.type";

// how to process request and response data 
export const CreateBookDTO = BookSchema.pick ({id : true, title : true});
export type CreateBookDTO = z.infer<typeof CreateBookDTO>;