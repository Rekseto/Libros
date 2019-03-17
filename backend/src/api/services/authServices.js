import NotFound from "../errors/NotFoundError";
import InternalServerError from "../errors/InternalServerError";
import AuthWrongUsernameError from "../errors/AuthWrongUsernameError";
import AuthWrongPasswordError from "../errors/AuthWrongPasswordError";
import AuthWrongCredentialsError from "../errors/AuthWrongCredentialsError";
import {
  hashWithRandomSalt,
  getRandomString,
  compare
} from "../../utils/cryptoUtils";
import {generateToken} from "../../utils/authUtils";
export default (database, logger) => {
  const {User} = database.models;

  return {
    async create({username, password, permission, email}) {
      try {
        const userRecord = await User.findOne({where: {username}});

        if (userRecord) {
          throw new AuthWrongUsernameError(
            `Username ${username} already taken`
          );
        }

        if (!password) {
          throw new AuthWrongPasswordError("Provided empty password");
        }
        const data = await User.create({
          username: username,
          password: hashWithRandomSalt(password),
          secret: getRandomString(16),
          email,
          permission,
          loanedBooks: 0
        });

        return data;
      } catch (error) {
        logger.error(error.message);
        throw error;
      }
    },

    async login({username, password}) {
      const userRecord = await User.findOne({username});

      if (!userRecord) {
        throw new NotFound();
      }

      if (!password) {
        throw new AuthWrongPasswordError("Provided empty password");
      }

      if (compare(password, userRecord.password)) {
        const token = generateToken({
          id: userRecord._id,
          secret: userRecord.secret
        });

        const userData = {
          id: userRecord._id,
          permission: userRecord.permission,
          username: userRecord.username,
          loanedBooks: userRecord.loanedBooks ? userRecord.loanedBooks : 0
        };

        return {token, userData};
      } else {
        throw new AuthWrongCredentialsError();
      }
    },
    async logout({username}) {
      try {
        const userRecord = await User.findOne({username});
        if (!userRecord) {
          throw new NotFound();
        }

        userRecord.secret = getRandomString(16);

        await userRecord.save();
      } catch (error) {
        logger.error(error);
        throw error;
      }
    }
  };
};
