# Coligo API Server

A RESTful API backend for the Coligo educational platform built with Express, TypeScript, and MongoDB.

## Features

- Simple API for educational platform
- CRUD operations for announcements and quizzes
- RESTful API endpoints
- TypeScript for type safety
- MongoDB database with Mongoose
- Proper error handling
- Environment variable configuration

## Project Structure

```
server/
├── src/                    # Source code
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   │   ├── announcement.controller.ts  # Announcement CRUD operations
│   │   └── quiz.controller.ts          # Quiz CRUD operations
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose models
│   │   ├── announcement.model.ts       # Announcement schema
│   │   └── quiz.model.ts               # Quiz schema
│   ├── routes/             # API routes
│   │   ├── announcement.routes.ts      # Announcement routes
│   │   └── quiz.routes.ts              # Quiz routes
│   ├── utils/              # Utility functions
│   └── index.ts            # App entry point
├── dist/                   # Compiled JavaScript (generated)
├── node_modules/           # Dependencies
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Yarn package manager
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Navigate to the server directory:
   ```bash
   cd coligo/server
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Create a `.env` file based on `.env.example`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/coligo
   NODE_ENV=development
   ```

### Running the Server

Development mode:
```bash
yarn dev
```

Production build:
```bash
yarn build
yarn start
```

## API Endpoints

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get announcement by ID
- `POST /api/announcements` - Create a new announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `GET /api/quizzes/:id` - Get quiz by ID
- `POST /api/quizzes` - Create a new quiz
- `PUT /api/quizzes/:id` - Update quiz
- `DELETE /api/quizzes/:id` - Delete quiz

## Models

### Announcement
```
{
  instructorName: String,  // Name of the instructor
  course: String,          // Course name
  body: String,            // Announcement content
  createdAt: Date,         // Auto-generated timestamp
  updatedAt: Date          // Auto-updated timestamp
}
```

### Quiz
```
{
  name: String,            // Quiz name
  course: String,          // Course name
  topic: String,           // Topic/subject of the quiz
  dueDate: Date,           // Due date and time
  createdAt: Date,         // Auto-generated timestamp
  updatedAt: Date          // Auto-updated timestamp
}
```

## License

MIT 