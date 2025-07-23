import mongoose, { Document, Schema } from 'mongoose';

// Quiz interface
export interface IQuiz extends Document {
  name: string;
  course: string;
  topic: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Quiz schema
const quizSchema = new Schema<IQuiz>(
  {
    name: {
      type: String,
      required: [true, 'Quiz name is required'],
    },
    course: {
      type: String,
      required: [true, 'Course name is required'],
    },
    topic: {
      type: String,
      required: [true, 'Topic is required'],
    },
    dueDate: {
      type: Date,
      required: [true, 'Due date is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model<IQuiz>('Quiz', quizSchema);

export default Quiz; 