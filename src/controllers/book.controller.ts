import { Request, Response } from "express";
import {z} from 'zod'; 
import { BookService } from "../services/book.service";
import { CreateBookDTO } from "./dtos/book.dto";
import { Book } from "../types/book.type";

let bookService = new BookService ();



//schema, more than type checking - runtime validation 
// what defines the shape of data, what validates data -> book 


// export type Book = {
//     id: string; 
//     title : string; 
//     date? : string; //optional 
// }



export class BookController {

    createBook   = ( req: Request, res: Response) =>{
        const validation  = CreateBookDTO.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({errors: validation.error});
        }
        const {id, title} = validation.data;//same as req.body but validated 

        const newBook : Book = bookService.createBook({id, title});
        return res.status(201).json(newBook);
    };
    
    getBooks = (req: Request, res: Response) => {
        let response: Book[] = bookService.getAllBooks();// or let response = bookService.getAllBooks();
    res.status(200).json(response);

    };
}
// export default BookController;