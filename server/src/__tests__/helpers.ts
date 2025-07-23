import { Document } from 'mongoose';

/**
 * Helper to safely get the MongoDB ObjectId string from any document
 */
export function getId(document: any): string {
  if (document && document._id) {
    return document._id.toString();
  }
  throw new Error('Document has no valid _id');
} 