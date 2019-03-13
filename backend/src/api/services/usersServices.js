import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import {searchQuery} from "../../utils/requestUtils";

export default (database, logger) => {
  const {User, Loan} = database.models;

  return {
    async search(username) {
      try {
        const data = await User.find(
          searchQuery(
            [{field: "username", type: "startsWith", isRegex: true}],
            [username]
          ),
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
    }
  };
};
