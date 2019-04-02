import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import {addDays} from "../../utils/dateUtils";
import NotEnoughError from "../errors/NotEnoughError";

export default (database, logger) => {
  const {Book, User, Loan} = database.models;

  return {
    async fetchAll() {
      try {
        const data = await Loan.find({})
          .populate("loaner", "username")
          .populate("volume", "title")
          .sort("term")
          .exec();

        return data;
      } catch (error) {
        logger.error(error);
        throw new InternalServerError();
      }
    },
    async create({isbn, username, days = 30}) {
      try {
        const user = await User.findOne({username});
        if (!user) throw new NotFound();

        const book = await Book.findOne({isbn});

        if (!book) throw new NotFound();
        if (book.loaned +1 > book.stock) throw new NotEnoughError();
        const date = new Date();
        const term = addDays(date, days);

        const loan = await Loan.create({
          volume: book._id,
          loaner: user._id,
          created: date,
          term
        });

        if (loan) {
          book.loaned++;
          await book.save();
        }

        return loan;
      } catch (error) {
        logger.log(error.message);
        throw error;
      }
    },

    async delete(id) {
      try {
        const loan = await Loan.findById(id);
        if (!loan) throw new NotFound();
        const book = await Book.findOne({
          _id: loan.volume
        });

        book.loaned--;
        await book.save();

        await loan.delete();
      } catch (error) {
        throw error;
      }
    }
  };
};
