import { Schema, model, models, Document } from "mongoose";

interface IFeedback extends Document {
  name: string;
  phoneNumber: number;
  email: string;
  sendTime: number;
}

const FeedbackSchema = new Schema<IFeedback>({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Phone number is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  sendTime: {
    type: Number,
    default: Date.now, 
  },
});

const Feedback =
  models.Feedback || model<IFeedback>("Feedback", FeedbackSchema);

export default Feedback;
