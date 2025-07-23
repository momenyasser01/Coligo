import { Request, Response } from 'express';
import Announcement from '../models/announcement.model';


export const getAnnouncements = async (req: Request, res: Response) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.json(announcements);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAnnouncementById = async (req: Request, res: Response) => {
  try {
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.json(announcement);
  } catch (error) {
    console.error('Error fetching announcement:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createAnnouncement = async (req: Request, res: Response) => {
  try {
    const { instructorName, course, body } = req.body;

    if (!instructorName || !course || !body) {
      return res.status(400).json({ 
        message: 'Please provide all required fields: instructorName, course, body' 
      });
    }

    const announcement = await Announcement.create({
      instructorName,
      course,
      body,
    });

    if (announcement) {
      res.status(201).json(announcement);
    } else {
      res.status(400).json({ message: 'Invalid announcement data' });
    }
  } catch (error) {
    console.error('Error creating announcement:', error);
    
    if (error instanceof Error && error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateAnnouncement = async (req: Request, res: Response) => {
  try {
    const { instructorName, course, body } = req.body;

    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    announcement.instructorName = instructorName || announcement.instructorName;
    announcement.course = course || announcement.course;
    announcement.body = body || announcement.body;

    const updatedAnnouncement = await announcement.save();
    res.json(updatedAnnouncement);
  } catch (error) {
    console.error('Error updating announcement:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteAnnouncement = async (req: Request, res: Response) => {
  try {
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    await announcement.deleteOne();
    res.json({ message: 'Announcement removed' });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 