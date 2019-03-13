export default mongoose => {
  const Schema = mongoose.Schema;

  const Loan = new Schema({
    loaner: {type: mongoose.Schema.ObjectId, required: true, ref: "User"},
    volume: {type: mongoose.Schema.ObjectId, required: true, ref: "Book"},
    created: Date,
    term: Date
  });

  return {schema: Loan, modelName: "Loan"};
};
