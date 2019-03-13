import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import {searchQuery} from "../../utils/requestUtils";
import BookAlreadyExistsError from "../errors/BookAlreadyExistsError";
import AlreadyExistsError from "../errors/AlreadyExistsError";

export default (database, logger) => {
  const {Book, User, Loan} = database.models;

  return {
    async fetchAll() {
      try {
        const data = await Book.find({});

        if (!data) throw new NotFound();

        return data;
      } catch (error) {
        throw new InternalServerError();
      }
    },
    async create({title, isbn, date, author, stock, category, publisher}) {
      try {
        const result = await Book.find({isbn});
        if (result.length) throw new AlreadyExistsError();
        const book = await Book.create({
          loaned: 0,
          title,
          isbn,
          date,
          author,
          stock,
          publisher,
          category
        });

        return book;
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    },
    async delete(isbn) {
      try {
        const book = await Book.findOne({isbn});

        await Loan.bulkWrite([
          {
            deleteMany: {
              filter: {volume: book._id}
            }
          }
        ]);

        await book.remove();

        return book;
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    },

    async getBook(isbn) {
      try {
        const book = await Book.findOne({isbn})
          .populate("category")
          .populate("publisher")
          .exec();
        if (!book) throw new NotFound();

        let loan = await Loan.findOne({volume: book._id})
          .sort("term")
          .exec();

        if (!loan) {
          loan = {};
          loan.term = "Teraz";
        }

        const bookData = {
          isbn: book.isbn,
          author: book.author,
          date: book.date,
          stock: book.stock,
          title: book.title,
          publisher: book.publisher,
          category: book.category,
          loaned: book.loaned,
          fastestTerm: loan.term
        };

        return bookData;
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    },
    async search({isbn, author, title, publisher, category}) {
      try {
        const books = await Book.find(
          searchQuery(
            [
              {field: "author", type: "startsWith", isRegex: true},
              {field: "isbn", type: "startsWith", isRegex: true},
              {field: "title", type: "contains", isRegex: true},
              {field: "publisher", isRegex: false},
              {field: "category", isRegex: false}
            ],
            [author, isbn, title, publisher, category] // output -> {author: {regex: "^foo"}, title: {regex: "/bar/"}}
          )
        )
          .populate("publisher")
          .populate("category")
          .exec();

        return books;
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    },
    async getLoaners(isbn) {
      try {
        const book = await Book.findOne({isbn});

        if (!book) throw new NotFound();

        const loans = await Loan.find({
          volume: book._id
        });

        const loaners = [];

        for (const loan of loans) {
          const user = await User.findOne({_id: loan.loaner});
          if (user)
            loaners.push({
              username: user.username,
              id: user._id,
              email: user.email,
              term: loan.term,
              date: loan.date
            });
        }

        return loaners;
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    },

    async update(isbn, body) {
      try {
        const book = await Book.findOne({isbn});

        if (!book) throw new NotFound();

        await book.update(body);
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    }
  };
};
