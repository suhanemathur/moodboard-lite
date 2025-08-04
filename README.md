# 🎨 MoodBoard Lite

MoodBoard Lite is a full-stack **MERN** (MongoDB, Express, React, Node.js) application that allows users to capture and express their daily mood through a creative moodboard. Each user can submit only **one moodboard per day**, which includes visual and textual representations of their mood.

---

## Overview

MoodBoard Lite lets users create a personal daily moodboard with:

- A **color** to match the mood  
- A **link to an image or GIF** (no upload required)  
- A **short note** (up to 200 characters)  
- One or more **emojis**

Moodboards are saved and displayed in a **timeline** for reflection. The app uses **JWT authentication**, and all features are accessible only after login.

---

## Features

### Core Functionality

- **User Authentication**
  - Signup and Login using JWT tokens
  - Tokens stored securely in `localStorage`
  - Auth-protected routes

- **Moodboard Creation (1/day)**
  - Submit:
    - Mood **color** (hex code)
    - Online **image/GIF** URL
    - Short **note** (max 200 characters)
    - One or more **emojis**
  - Prevents duplicate submissions for the same day

- **Moodboard Viewing**
  - View **today’s moodboard**
  - View **all past moodboards** in a **timeline-style layout**

---

### Bonus Features Implemented

- Giphy API integration for GIF search via keywords
- Emoji picker using `emoji-mart`
- Light/Dark mode toggle with persistent theme support
- Timeline layout for moodboard history
- Smooth UI transitions and animations
- Responsive design for mobile and tablet

---

## Setup Instructions

> Follow the steps below to run the app locally on your machine.

### Clone the Repository

```bash
git clone https://github.com/suhanemathur/moodboard-lite.git
cd moodboard-lite

### Setup Backend (Server)

```bash
cd server
npm install

### Create a .env file inside the server/ directory with the following contents:
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### Then start the backend:
npm start
The backend server will run at: http://localhost:5000

## Setup Frontend (Client)

cd ../client
npm install
Create a .env file inside the client/ directory with the following content:

REACT_APP_GIPHY_KEY=your_giphy_api_key

### Then start the frontend:
npm start
The frontend app will be available at: http://localhost:3000
