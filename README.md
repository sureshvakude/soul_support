# Soul Support

This repository contains three main components:
1. **Client** - The frontend application.
2. **Server** - The backend application.
3. **Voice Assistant** - A Python-based voice assistant.

Follow the instructions below to set up and run each part of the project.

---

## Prerequisites
Make sure you have the following tools installed on your system:
- **Node.js** (for Client and Server)
- **Python 3.x** (for Voice Assistant)
- **Streamlit** (for running the Voice Assistant interface)
- **Git** (to clone the repository)

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>

## Client Setup and Run
1. cd client
2. npm install
3. npm run dev

## server setup 
1. cd server
2. npm install
3. npm install
4. npm run dev / npm start

## voice assistant
1. cd voice-assistant
2.  python -m venv venv
    venv\Scripts\activate     # For Windows
3. pip install -r requirements.txt
4. streamlit run assistant.py
