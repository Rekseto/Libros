export default mongoose => {
  const Schema = mongoose.Schema;

  const User = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    permission: {type: Number, required: true},
    secret: {type: String, required: true}
  });

  return {schema: User, modelName: "User"};
};
