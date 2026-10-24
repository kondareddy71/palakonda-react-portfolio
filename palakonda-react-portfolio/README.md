# Palakonda Reddy React Portfolio

A responsive dark-purple portfolio built with React and Vite.

## Run locally
1. Install Node.js (LTS) if needed: https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
```

## Deploy to Vercel
Push this folder's contents to a new GitHub repository. In Vercel, import that repository. Vercel should detect Vite automatically; use `npm run build` as the build command and `dist` as the output directory.

The resume is served from `/resume.pdf`; the profile photo is `/assets/profile.jpg`.

The contact form opens the visitor's default email application with a prefilled message. It does not send messages directly from the website; a form backend/service would be needed for that.

Before publishing, verify the Grain Palette repository URL and confirm the wording of the JSpiders fee/selection achievement.
