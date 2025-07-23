import express from 'express';
import {
  getAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/announcement.controller';

const router = express.Router();

/**
 * @route   GET /api/announcements
 * @desc    Get all announcements
 * @access  Public
 */
router.get('/', getAnnouncements);

/**
 * @route   GET /api/announcements/:id
 * @desc    Get announcement by ID
 * @access  Public
 */
router.get('/:id', getAnnouncementById);

/**
 * @route   POST /api/announcements
 * @desc    Create a new announcement
 * @access  Public
 */
router.post('/', createAnnouncement);

/**
 * @route   PUT /api/announcements/:id
 * @desc    Update announcement
 * @access  Public
 */
router.put('/:id', updateAnnouncement);

/**
 * @route   DELETE /api/announcements/:id
 * @desc    Delete announcement
 * @access  Public
 */
router.delete('/:id', deleteAnnouncement);

export default router; 