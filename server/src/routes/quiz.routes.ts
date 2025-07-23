import express from 'express';
import {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from '../controllers/quiz.controller';

const router = express.Router();

/**
 * @route   GET /api/quizzes
 * @desc    Get all quizzes
 * @access  Public
 */
router.get('/', getQuizzes);

/**
 * @route   GET /api/quizzes/:id
 * @desc    Get quiz by ID
 * @access  Public
 */
router.get('/:id', getQuizById);

/**
 * @route   POST /api/quizzes
 * @desc    Create a new quiz
 * @access  Public
 */
router.post('/', createQuiz);

/**
 * @route   PUT /api/quizzes/:id
 * @desc    Update quiz
 * @access  Public
 */
router.put('/:id', updateQuiz);

/**
 * @route   DELETE /api/quizzes/:id
 * @desc    Delete quiz
 * @access  Public
 */
router.delete('/:id', deleteQuiz);

export default router; 