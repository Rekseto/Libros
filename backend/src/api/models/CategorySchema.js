export default mongoose => {
  const Schema = mongoose.Schema;

  const Category = new Schema({
    name: {type: String, required: true, unique: true},
    created_at: Date,
    updated_at: Date
  });

  return {schema: Category, modelName: "Category"};
};
