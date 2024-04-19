import mongoose, { model, Schema } from "mongoose";


const FeedbackSchema = new Schema({
  feedback:  String,
  date: String,
  rate: {type: Number},
});



let Feedback;

try {
  Feedback = mongoose.model('Feedback');
} catch (error) {
  Feedback = model('Feedback', FeedbackSchema);
}

export { Feedback };