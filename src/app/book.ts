import { Genre } from "./genre";
import { Publisher } from "./publisher";

export class Book {
    'book_id': number;
    'book_name': string;
    'book_genre': string;
    'book_author': string;
    'book_publishers': string;
    'book_ratings': number;
    genre!: Genre;
    publisher!: Publisher;
}
