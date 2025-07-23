import mongoose from 'mongoose';
import request from 'supertest';
import createTestApp from './testServer';
import Quiz from '../models/quiz.model';
import { getId } from './helpers';
import '../__tests__/setup';

const app = createTestApp();

describe('Quizzes API', () => {
  const baseUrl = '/api/quizzes';
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const sampleQuiz = {
    name: 'Test Quiz',
    course: 'Test Course',
    topic: 'Test Topic',
    dueDate: tomorrow.toISOString(),
  };

  describe('GET /api/quizzes', () => {
    it('should return all quizzes', async () => {
      await Quiz.create([
        { ...sampleQuiz },
        { ...sampleQuiz, name: 'Another Quiz' },
      ]);
      
      const response = await request(app).get(baseUrl);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBe(2);
    });

    it('should return an empty array when no quizzes exist', async () => {
      const response = await request(app).get(baseUrl);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toBe(0);
    });
  });

  describe('GET /api/quizzes/:id', () => {
    it('should return a single quiz by ID', async () => {
      const quiz = await Quiz.create(sampleQuiz);
      const quizId = getId(quiz);
      
      const response = await request(app).get(`${baseUrl}/${quizId}`);
      
      expect(response.status).toBe(200);
      expect(response.body._id).toBe(quizId);
      expect(response.body.name).toBe(sampleQuiz.name);
    });

    it('should return 404 if quiz not found', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      
      const response = await request(app).get(`${baseUrl}/${fakeId}`);
      
      expect(response.status).toBe(404);
      expect(response.body.message).toBeDefined();
    });
  });

  describe('POST /api/quizzes', () => {
    it('should create a new quiz', async () => {
      const response = await request(app)
        .post(baseUrl)
        .send(sampleQuiz);
      
      expect(response.status).toBe(201);
      expect(response.body.name).toBe(sampleQuiz.name);
      expect(response.body.course).toBe(sampleQuiz.course);
      expect(response.body.topic).toBe(sampleQuiz.topic);
      expect(new Date(response.body.dueDate)).toEqual(new Date(sampleQuiz.dueDate));

      const savedQuiz = await Quiz.findById(response.body._id);
      expect(savedQuiz).not.toBeNull();
    });

    it('should return 400 if required fields are missing', async () => {
      const response = await request(app)
        .post(baseUrl)
        .send({ name: 'Test Quiz' });
      
      expect(response.status).toBe(400);
    });
  });

  describe('PUT /api/quizzes/:id', () => {
    it('should update an existing quiz', async () => {
      const quiz = await Quiz.create(sampleQuiz);
      const quizId = getId(quiz);
      const updatedData = { ...sampleQuiz, topic: 'Updated Topic' };
      
      const response = await request(app)
        .put(`${baseUrl}/${quizId}`)
        .send(updatedData);
      
      expect(response.status).toBe(200);
      expect(response.body.topic).toBe(updatedData.topic);

      const updatedQuiz = await Quiz.findById(quizId);
      expect(updatedQuiz?.topic).toBe(updatedData.topic);
    });

    it('should return 404 if quiz not found', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      
      const response = await request(app)
        .put(`${baseUrl}/${fakeId}`)
        .send(sampleQuiz);
      
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/quizzes/:id', () => {
    it('should delete a quiz', async () => {
      const quiz = await Quiz.create(sampleQuiz);
      const quizId = getId(quiz);
      
      const response = await request(app).delete(`${baseUrl}/${quizId}`);
      
      expect(response.status).toBe(200);
      expect(response.body.message).toBeDefined();

      const deletedQuiz = await Quiz.findById(quizId);
      expect(deletedQuiz).toBeNull();
    });

    it('should return 404 if quiz not found', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      
      const response = await request(app).delete(`${baseUrl}/${fakeId}`);
      
      expect(response.status).toBe(404);
    });
  });
}); 