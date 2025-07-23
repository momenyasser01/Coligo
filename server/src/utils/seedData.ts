import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Announcement from '../models/announcement.model';
import Quiz from '../models/quiz.model';
import config from '../config/config';

// Load env vars
dotenv.config();

// Sample announcements
const announcements = [
  {
    instructorName: 'Dr. Sarah Johnson',
    course: 'Introduction to Biology',
    body: 'Welcome to Introduction to Biology! This course will cover the basics of cellular biology, genetics, and ecology. Please review the syllabus and come prepared to the first lecture.',
  },
  {
    instructorName: 'Prof. Michael Chen',
    course: 'Advanced Mathematics',
    body: 'Reminder: The first assignment for Advanced Mathematics is due this Friday. Please submit your solutions through the online portal by 11:59 PM.',
  },
  {
    instructorName: 'Dr. Emily Rodriguez',
    course: 'History of Art',
    body: 'The museum visit for History of Art has been rescheduled to next Tuesday. Please check your email for details about transportation and meeting points.',
  },
];

// Sample quizzes
const quizzes = [
  {
    name: 'Midterm Quiz',
    course: 'Introduction to Biology',
    topic: 'Cell Structure and Function',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  },
  {
    name: 'Weekly Assessment',
    course: 'Advanced Mathematics',
    topic: 'Differential Equations',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  },
  {
    name: 'Pop Quiz',
    course: 'History of Art',
    topic: 'Renaissance Period',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
  },
];

// Function to seed data
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.MONGODB_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await Announcement.deleteMany({});
    await Quiz.deleteMany({});
    console.log('Data cleared');

    // Seed announcements
    await Announcement.insertMany(announcements);
    console.log('Announcements seeded');

    // Seed quizzes
    await Quiz.insertMany(quizzes);
    console.log('Quizzes seeded');

    console.log('Data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Run the seed function
seedData(); 