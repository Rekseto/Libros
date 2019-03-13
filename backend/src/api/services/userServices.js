import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";

export default (database, logger) => {
  const {Book, User, Loan} = database.models;

  return {
    async fetchAll() {
      try {
        const data = await User.find(
          {},
          {
            username: 1,
            email: 1
          }
        );

        if (!data) throw new NotFound();
        const result = [];
        for (const user of data) {
          const loans = await Loan.find({
            loaner: user._id
          });

          result.push({
            username: user.username,
            email: user.email,
            loanedBooks: loans.length
          });
        }

        return result;
      } catch (error) {
        logger.error(error);
        throw new InternalServerError();
      }
    },

    async getLoaned(username) {
      try {
        const user = await User.findOne({username});
        if (!user) throw new NotFound();

        const userId = user._id;

        const loans = await Loan.find({
          loaner: userId
        })
          .sort("term")
          .exec();

        const loanings = [];

        for (const loan of loans) {
          const book = await Book.findOne({_id: loan.volume});

          if (book) {
            const data = {
              title: book.title,
              author: book.author,
              term: loan.term,
              date: loan.created,
              _id: loan._id
            };

            loanings.push(data);
          }
        }

        return loanings;
      } catch (error) {
        throw error;
      }
    }
  };
};
