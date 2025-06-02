import {Book, BookGenres, PickRecord} from "../model/Book.js";

export interface LibraryService {
     addBook: (book:Book) => Promise<boolean> ;
     removeBook:(id:string) => Promise<Book>;
     pickUpBook:(id:string,reader:string) => Promise<void>;
     returnBook:(id:string, reader:string) => Promise<void>;
     getAllBooks:() => Promise<Book[]>;
     getBooksByGenre:(genre: BookGenres) => Promise<Book[]>;
     getBooksByGenreAndStatus:(gen: string, st: string)=> Promise<Book[]>;
     getBookById:(id: string) => Promise<Book>;
     getReaderWithBookOnHand:(title:string)=>Promise<PickRecord[]>;
}