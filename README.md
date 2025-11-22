KidsLearnPython Frontend

Overview
A friendly, colorful website that teaches Python to kids ages 8–14 with:
- A welcoming home page
- Short beginner lessons (Variables, Print, Loops, Input)
- An interactive code runner that talks to the backend
- A fun multiple‑choice quiz with a top-scores list
- Mobile‑friendly, big buttons, simple words

Tech
- React + Vite + Tailwind CSS
- React Router for pages

Setup
1) Make sure the backend is running on http://localhost:8000 (see backend README)
2) Create a .env file here with:
   VITE_BACKEND_URL=http://localhost:8000
3) Install and start:
   npm install
   npm run dev
4) Open the site at:
   http://localhost:3000

Pages
- Home: friendly intro and quick links
- Lessons: four beginner topics with examples
- Code Runner: type Python, see output (no imports allowed)
- Quiz: answer questions, save score, view top scores

Notes
- The code runner relies on the backend /run-code endpoint
- Quiz uses /submit-score and /get-scores endpoints
- If you deploy the backend, update VITE_BACKEND_URL accordingly
