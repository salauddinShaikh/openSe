# Project Setup Guide

This document provides instructions to run the project, including both the frontend and backend.

## Prerequisites

- Node.js (v14 or higher)
- pnpm
- Any required environment variables (e.g., `.env` file)

---

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the backend directory.
   - Add the required variables as specified in `.env.example`.

4. Start the backend server:
   ```bash
   pnpm dev
   ```

---

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the frontend development server:
   ```bash
   pnpm dev
   ```

---

## Running the Project

1. Ensure the backend server is running.
2. Start the frontend server.
3. Open your browser and navigate to the frontend URL (e.g., `http://localhost:3000`).

---

## Additional Notes

- For production builds, refer to the respective `README` files in the `frontend` and `backend` directories.
- If you encounter issues, check the logs or refer to the documentation.
