# IMPORTANT: Public website temporarily shows ONLY the About page

The full portfolio is being revised locally. Production builds currently redirect
every URL to `/about` and hide the login link. The other pages remain in the code.

**Read [IMPORTANT — About-only mode and restoring the full website](IMPORTANT-ABOUT-ONLY-MODE.md)
before deploying or restoring the portfolio.**

Normal local development (`npm start`) still shows the full website. A successful
Render deployment of a production build enables About-only mode by default.

## Emines-Graphic-Design

Dynamic website of the EMINES Graphic Design club with an administration interface.
Public Portfolio for EGD Club Student's Projects

## Setting up the website

Clone the repostory with the command:
```
git clone https://github.com/elhcs/Portfolio.git
cd Portfolio
```

Open a terminal in the project root directory and execute :
```
cd app
npm install
npm run dev
```
Then open another terminal in the project root directory and execute :
```
cd frontend
npm install
npm start
```
Add your credantial keys of mongodb atlas cloud or local database to the script in */app/config/keys.js* by modifying the **MONGODB_URI**
```jsx
// Add your Mongodb URI here to connect to your database
const MONGODB_URI = "mongodb+srv://exemple_user:PASSWORDHERE@egd-cluster.exemple.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
  mongoURI: MONGODB_URI,
  secretOrKey: "secret",
};
```
> The mongo user should have the right to read and write the to database
# Portfolio
