import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import AlreadyExistsError from "../errors/AlreadyExistsError";

export default (database, logger) => {
  const {Category} = database.models;

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
    async delete(name) {
      try {
        const category = await Category.findOne({name});

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
