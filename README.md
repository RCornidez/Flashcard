# Flashcards

This application allows users to upload, manage, and test the Flashcard sets they've uploaded.

## Features

- **Upload Flashcards**: Users can drag and drop or click to upload flashcards in the specified JSON format.
- **View Flashcards**: Displays a list of available flashcard sets loaded from local storage.
- **Test Yourself**: Study and test your knowledge of your uploaded flashcards.
- **Dark Mode**: Toggle between light and dark modes for improved readability.


## How-to-run

1. Download Git Repo
2. Install the dependencies using 'npm install'
3. Run the application using 'npm start'
4. Upload flashcard JSON files in the format specified below
5. Study and test your knowledge


## Flashcard Format
Note: There must be at least the 'title' and 'description' fields. The 'type' and 'example' fields are optional.

```
[
  {
    "title": "Tell me about yourself.",
    "type": "General",
    "description": "This question allows you to introduce yourself and provide an overview of your background.",
    "example": "I have a background in software engineering with a focus on web development. I’ve worked on various projects involving front-end and back-end technologies."
  },
  {
    "title": "Why should we hire you?",
    "type": "Motivational",
    "description": "This question helps the interviewer understand why you think you are a good fit for the role.",
    "example": "I believe my skills in project management and my proactive approach to problem-solving make me a strong candidate for this position."
  },
  {
    "title": "What are your greatest strengths and weaknesses?",
    "type": "Self-Assessment",
    "description": "This question assesses your self-awareness and honesty about your abilities.",
    "example": "My greatest strength is my attention to detail. A weakness I’m working on is my tendency to take on too many tasks at once."
  }
]
```