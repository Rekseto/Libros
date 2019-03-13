import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import AlreadyExistsError from "../errors/AlreadyExistsError";
import bookServices from "./bookServices";

export default (database, logger) => {
  const {Publisher, Book} = database.models;
  const bookService = bookServices(database, logger);

  return {
    async fetchAll() {
      try {
        const data = await Publisher.find({});

        if (!data) throw new NotFound();

        return data;
      } catch (error) {
        throw new InternalServerError();
      }
    },
    async create(name) {
      try {
        const result = await Publisher.find({name});
        if (result.length) throw new AlreadyExistsError();

        const publisher = await Publisher.create({
          name
        });

        return publisher;
      } catch (error) {
        logger.log(error.message);
        throw new InternalServerError();
      }
    },
    async delete(id) {
      try {
        const publisher = await Publisher.findById(id);

        const books = await Book.find({
          publisher: id
        });

        for (const book of books) {
          await bookService.delete(book.isbn);
        }

        await publisher.remove();

        return publisher;
      } catch (error) {
        logger.log(error.message);

        throw new InternalServerError();
      }
    },

    async update(name, body) {
      try {
        const publisher = await Publisher.findOne({name});

        if (!publisher) throw new NotFound();

        await publisher.update(body);
      } catch (error) {
        throw error;
      }
    }
  };
};
