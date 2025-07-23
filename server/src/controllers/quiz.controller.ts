import { Request, Response } from 'express';
import Quiz from '../models/quiz.model';


export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find().sort({ dueDate: 1 });
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getQuizById = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { name, course, topic, dueDate } = req.body;

    if (!name || !course || !topic || !dueDate) {
      return res.status(400).json({ 
        message: 'Please provide all required fields: name, course, topic, dueDate' 
      });
    }

    const quiz = await Quiz.create({
      name,
      course,
      topic,
      dueDate,
    });

    if (quiz) {
      res.status(201).json(quiz);
    } else {
      res.status(400).json({ message: 'Invalid quiz data' });
    }
  } catch (error) {
    console.error('Error creating quiz:', error);
    
    if (error instanceof Error && error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateQuiz = async (req: Request, res: Response) => {
  try {
    const { name, course, topic, dueDate } = req.body;

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    quiz.name = name || quiz.name;
    quiz.course = course || quiz.course;
    quiz.topic = topic || quiz.topic;
    quiz.dueDate = dueDate || quiz.dueDate;

    const updatedQuiz = await quiz.save();
    res.json(updatedQuiz);
  } catch (error) {
    console.error('Error updating quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    await quiz.deleteOne();
    res.json({ message: 'Quiz removed' });
  } catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 