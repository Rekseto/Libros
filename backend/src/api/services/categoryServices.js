import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import AlreadyExistsError from "../errors/AlreadyExistsError";
import bookServices from "./bookServices";

export default (database, logger) => {
  const {Category, Book} = database.models;
  const bookService = bookServices(database, logger);

  return {
    async fetchAll() {
      try {
        const data = await Category.find({});

        if (!data) throw new NotFound();

        return data;
      } catch (error) {
        throw new InternalServerError();
      }
    },
    async create(name) {
      try {
        const result = await Category.find({name});
        if (result.length) throw new AlreadyExistsError();

        const category = await Category.create({
          name
        });

        return category;
      } catch (error) {
        logger.log(error.message);
        throw new InternalServerError();
      }
    },
    async delete(id) {
      try {
        const category = await Category.findById(id);

        const books = await Book.find({
          category: id
        });

        for (const book of books) {
          await bookService.delete(book.isbn);
        }

        await category.remove();

        return category;
      } catch (error) {
        logger.log(error.message);

        throw new InternalServerError();
      }
    },

    async update(name, body) {
      try {
        const category = await Category.findOne({name});

        if (!category) throw new NotFound();

        await category.update(body);
      } catch (error) {
        throw error;
      }
    }
  };
};
