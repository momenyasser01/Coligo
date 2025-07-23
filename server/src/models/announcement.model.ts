import mongoose, { Document, Schema } from 'mongoose';

// Announcement interface
export interface IAnnouncement extends Document {
  instructorName: string;
  course: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

// Announcement schema
const announcementSchema = new Schema<IAnnouncement>(
  {
    instructorName: {
      type: String,
      required: [true, 'Instructor name is required'],
    },
    course: {
      type: String,
      required: [true, 'Course name is required'],
    },
    body: {
      type: String,
      required: [true, 'Announcement body is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Announcement = mongoose.model<IAnnouncement>('Announcement', announcementSchema);

export default Announcement; 