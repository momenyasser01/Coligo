import mongoose from 'mongoose';
import request from 'supertest';
import createTestApp from './testServer';
import Announcement from '../models/announcement.model';
import { getId } from './helpers';
import '../__tests__/setup';

const app = createTestApp();

describe('Announcements API', () => {
  const baseUrl = '/api/announcements';
  
  const sampleAnnouncement = {
    instructorName: 'Test Instructor',
    course: 'Test Course',
    body: 'This is a test announcement'
  };

  describe('GET /api/announcements', () => {
    it('should return all announcements', async () => {
      await Announcement.create([
        { ...sampleAnnouncement },
        { ...sampleAnnouncement, instructorName: 'Another Instructor' },
      ]);
      
      const response = await request(app).get(baseUrl);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBe(2);
    });

    it('should return an empty array when no announcements exist', async () => {
      const response = await request(app).get(baseUrl);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBe(0);
    });
  });

  describe('GET /api/announcements/:id', () => {
    it('should return a single announcement by ID', async () => {
      const announcement = await Announcement.create(sampleAnnouncement);
      const announcementId = getId(announcement);
      
      const response = await request(app).get(`${baseUrl}/${announcementId}`);
      
      expect(response.status).toBe(200);
      expect(response.body._id).toBe(announcementId);
      expect(response.body.instructorName).toBe(sampleAnnouncement.instructorName);
    });

    it('should return 404 if announcement not found', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      
      const response = await request(app).get(`${baseUrl}/${fakeId}`);
      
      expect(response.status).toBe(404);
      expect(response.body.message).toBeDefined();
    });
  });

  describe('POST /api/announcements', () => {
    it('should create a new announcement', async () => {
      const response = await request(app)
        .post(baseUrl)
        .send(sampleAnnouncement);
      
      expect(response.status).toBe(201);
      expect(response.body.instructorName).toBe(sampleAnnouncement.instructorName);
      expect(response.body.course).toBe(sampleAnnouncement.course);
      expect(response.body.body).toBe(sampleAnnouncement.body);

      const savedAnnouncement = await Announcement.findById(response.body._id);
      expect(savedAnnouncement).not.toBeNull();
    });

    it('should return 400 if required fields are missing', async () => {
      const response = await request(app)
        .post(baseUrl)
        .send({ instructorName: 'Test Instructor' });
      
      expect(response.status).toBe(400);
    });
  });

  describe('PUT /api/announcements/:id', () => {
    it('should update an existing announcement', async () => {
      const announcement = await Announcement.create(sampleAnnouncement);
      const announcementId = getId(announcement);
      const updatedData = { ...sampleAnnouncement, body: 'Updated announcement body' };
      
      const response = await request(app)
        .put(`${baseUrl}/${announcementId}`)
        .send(updatedData);
      
      expect(response.status).toBe(200);
      expect(response.body.body).toBe(updatedData.body);

      const updatedAnnouncement = await Announcement.findById(announcementId);
      expect(updatedAnnouncement?.body).toBe(updatedData.body);
    });

    it('should return 404 if announcement not found', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      
      const response = await request(app)
        .put(`${baseUrl}/${fakeId}`)
        .send(sampleAnnouncement);
      
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/announcements/:id', () => {
    it('should delete an announcement', async () => {
      const announcement = await Announcement.create(sampleAnnouncement);
      const announcementId = getId(announcement);
      
      const response = await request(app).delete(`${baseUrl}/${announcementId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.message).toBeDefined();

      const deletedAnnouncement = await Announcement.findById(announcementId);
      expect(deletedAnnouncement).toBeNull();
    });

    it('should return 404 if announcement not found', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      
      const response = await request(app).delete(`${baseUrl}/${fakeId}`);
      
      expect(response.status).toBe(404);
    });
  });
}); 