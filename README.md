# Leaderboard App

Welcome to the Cyber-Arena Leaderboard, a full-stack MERN application designed with a futuristic, game-inspired "Cyber-Arena" theme. This project allows users to be added to a leaderboard, claim points, and see rankings update in real-time. It features a dynamic, animated interface with custom fonts, icons, and sound effects to create an immersive user experience.

## ✨ Features

* **Full-Stack Application:** Built with a React frontend and a Node.js/Express backend.
* **Dynamic Leaderboard:** View user rankings sorted by total points.
* **User Management:** Add new users to the leaderboard.
* **Point Claiming:** Select a user and claim a random number of points (1-10) for them.
* **Claim History:** View a complete log of all points claimed, including who claimed them and when.
* **Database Integration:** Uses MongoDB to persist all user and history data.
* **Server-Side Pagination:** Efficiently handles large datasets for both the leaderboard and history views.
* **Immersive UI/UX:**
    * **Cyber-Arena Theme:** A cohesive, dark-mode, futuristic design.
    * **Custom Fonts:** Uses "Press Start 2P" for headings and "Inter" for body text.
    * **Iconography:** Integrates Font Awesome for a consistent visual language.
    * **Glassmorphism Panels:** Modern, blurred, translucent UI panels.
    * **High-Tech Buttons:** Custom-styled buttons with angular shapes and neon glow effects.
    * **Animations:** Includes animated point counters, notification popups, and component load-in effects.

## 🛠️ Tech Stack

**Frontend:**

* **React.js:** For building the user interface.
* **Axios:** For making API requests to the backend.
* **CSS:** Custom CSS for styling, including variables, flexbox, grid, and animations.
* **Font Awesome:** For scalable vector icons.
* **Google Fonts:** For custom web fonts.

**Backend:**

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web framework for building the API.
* **MongoDB:** NoSQL database for data storage.
* **Mongoose:** Object Data Modeling (ODM) library for MongoDB.
* **CORS:** To enable cross-origin requests from the frontend.
* **Dotenv:** For managing environment variables.

## 🚀 Setup and Installation

To get this project running locally, follow these steps:

### **Prerequisites**

* **Node.js** (v14 or later)
* **npm** (usually comes with Node.js)
* A free **MongoDB Atlas** account for the database.

### **1. Backend Setup**

1.  **Clone the repository** (or download the source code).
2.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Create an environment file:** Create a file named `.env` in the root of the `backend` folder.
5.  **Add environment variables:** Open the `.env` file and add the following, replacing the placeholder with your actual MongoDB connection string:
    ```env
    MONGO_URI="mongodb+srv://<user>:<password>@your-cluster-url.mongodb.net/leaderboardDB?retryWrites=true&w=majority"
    PORT=5000
    ```
6.  **(Optional) Seed the database:** To start with 10 sample users, run the seeder script. This only needs to be done once.
    ```bash
    node seeder.js
    ```

### **2. Frontend Setup**

1.  **Navigate to the `frontend` directory** in a separate terminal:
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### **3. Running the Application**

You need to have both the backend and frontend servers running simultaneously.

* **Start the backend server** (in the `backend` directory):
    ```bash
    node src/server.js
    ```
    You should see "MongoDB Connected successfully." and "Server is running on port 5000".

* **Start the frontend server** (in the `frontend` directory):
    ```bash
    npm start
    ```
    This will automatically open `http://localhost:3000` in your web browser.

## 📝 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint      | Description                                                                          |
| :----- | :------------ | :----------------------------------------------------------------------------------- |
| `GET`  | `/api/users`  | Fetches a paginated list of all users, sorted by `totalPoints` in descending order.    |
| `POST` | `/api/users`  | Creates a new user. Expects a JSON body with a `name` property.                      |
| `POST` | `/api/claim`  | Claims random points for a user. Expects a JSON body with a `userId`.                |
| `GET`  | `/api/history`| Fetches a paginated list of all claim history records, sorted by creation date.      |

**Query Parameters for Pagination:**

* `?page=<number>`: The page number to retrieve.
* `?limit=<number>`: The number of items per page.

## 👤 Author

-   **Gaurav**

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
