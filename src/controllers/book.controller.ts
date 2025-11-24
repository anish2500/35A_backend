import { Request, Response } from "express";

import {z} from 'zod'; 


//schema, more than type checking - runtime validation 
// what defines the shape of data, what validates data -> book 


// export type Book = {
//     id: string; 
//     title : string; 
//     date? : string; //optional 
// }

 const books = [
        { id: "B-1", title: '1984', date: '2022-10-11'},
        { id: "B-2", title: 'To Kill a Mockingbird'},
    ];

export class BookController {

    createBook   = ( req: Request, res: Response) =>{
        const validation  = CreateBookDTO.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({errors: validation.error});
        }
        const {id, title} = validation.data;//same as req.body but validated 
        // const { id, title } = req.body //destructure 
        // const id = req.body.id;  
        if(!id){
            return res.status(400).json ({message: "Book Id is required"}); 

        }if(!title){
            return res.status(400).json({message: "Book title is required"});
        }
        const exist = books.find(book => book.id ===id  );
        if (!exist){
            return res.status(409).json({message : "Book with this Id already exists!"});
        }

        const newBook: Book = {id, title};

        books.push(newBook);
        return res.status(201).json(newBook);
    }
    getBooks = (req: Request, res: Response) => {

   
    res.status(200).json(books);

    }
}
// export default BookController;