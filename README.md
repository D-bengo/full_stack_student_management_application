## Student Management System (Flask + React)
- A simple full-stack web application that demonstrates CRUD (Create, Read, Update, Delete) operations using a Flask backend and a React frontend.

## Project Overview
- This project allows users to:
    - View all students
    - Add a new student
    - Edit existing student details
    - Delete a student
    - Retrieve a single student by ID

- N/B: Data is stored in memory and does not persist after server restart.

## Tech Stack
- Backend:
    - Python
    - Flask
    - Flask-CORS

- Frontend:
    - React (Create React App)
    - JavaScript (Fetch API)

## Project Structure
project-root/
 │ 
 ├── backend/ 
 │ └── app.py 
 │ 
 ├── frontend/ 
 │ ├── package.json 
 │ └── src/ 
 │ └── App.js

## Getting started
1. Clone the repository
2. Setup Backend Flask:
    - (Install on the folder backend)
    - cd backend
    - pip install flask flask-cors
    - python app.py

    - Backend will run on:

    - http://localhost:5000
3. Setup Frontend (React):
    - Open a new terminal:

    - cd frontend
    - npm install
    - npm start

    - Frontend will run on:

    - http://localhost:3000

## API Endpoints
- Method<br><br>	Endpoint <br><br>	Description
- GET	 <br><br>   /students <br><br>	Retrieve all students
- GET	<br><br>    /student/ <br><br>	Retrieve one student
- POST	<br><br>    /student <br><br>	Add new student
- PUT	 <br><br>   /student/ <br><br>	Update student
- DELETE<br><br>	/student/ <br><br>	Delete student

## How it works
- The React frontend sends HTTP requests to the Flask backend.
- Flask processes the request and returns JSON responses.
- React updates the UI dynamically based on the response.

## Features
- Full CRUD functionality
- Dynamic UI updates
- Edit mode with form pre-fill
- Simple and clean interface
- RESTful API design

## Limitations
- No database (data resets on restart)
- No authentication
- Basic UI (no styling framework)

## Future Improvements
- Add database (MySQL / PostgreSQL)
- Implement authentication (JWT)
- Improve UI with Tailwind CSS
- Deploy application (Render + Vercel)

## Author
- Denis Walubengo