# Task Management API  

## Description  
A simple RESTful API for managing tasks. 

This API allows users to create, read, update, and delete tasks. 

Each task includes attributes such as title, description, status, and due date.  

## Features  
- **CRUD Operations**: Manage tasks with ease.  
- **Task Attributes**:  
  - `id`: Unique identifier.  
  - `title`: Task title.  
  - `description`: Detailed task description.  
  - `status`: Current status (`pending`, `in-progress`, `completed`).  
  - `dueDate`: Task deadline.  
- **Optional Enhancements**:  
  - Filter tasks by status.  
  - Sort tasks by due date.  
  - Pagination for task lists.  
  - User authentication (JWT-based).  
  - File uploads for task attachments.  

## Tech Stack  
- **Backend**: Node.js with Express  
- **Database**: MySQL
- **Development Tools**:  
  - `dotenv` for environment variables.  
  - `nodemon` for live server reloads.  
  - Insomnia for API testing.  

## Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/caioohv/task-management-api.git
   cd task-management-api
   ```  
2. Install dependencies:  
   ```bash
   npm run setup
   ```  
3. Configure the `.env` file:  
   ```env
   PORT=3000  
   DB_URI=yourUrl
   ...
   ```  
4. Run the server:  
   ```bash
   npm run dev
   ```  

## Endpoints  

| Method | Endpoint          | Description              |  
|--------|-------------------|--------------------------|  
| GET    | /tasks            | Retrieve all tasks.      |  
| GET    | /tasks/:id        | Retrieve a specific task.|  
| POST   | /tasks            | Create a new task.       |  
| PUT    | /tasks/:id        | Update a task.           |  
| DELETE | /tasks/:id        | Delete a task.           |  

## Future Enhancements  
- Authentication and authorization.  
- Task filtering and sorting.  
- Attachments for tasks.  
- Deployment to cloud platforms (e.g., Heroku, Render).  

## Contributing  
Feel free to fork this repository and submit pull requests for improvements or new features.  

## License  
This project is licensed under the MIT License.  
