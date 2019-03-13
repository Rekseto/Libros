export default mongoose => {
  const Schema = mongoose.Schema;

  const Book = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    isbn: {type: String, required: true, unique: true},
    stock: {type: Number, required: true},
    loaned: {type: Number, required: true},
    date: Date,
    publisher: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Publisher"
    },
    category: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Category"
    },
    created_at: Date,
    updated_at: Date
  });

  return {schema: Book, modelName: "Book"};
};
