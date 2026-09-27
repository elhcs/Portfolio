// Production stays About-only while the rest of the portfolio is being revised.
// Set REACT_APP_ABOUT_ONLY=false at build time to restore the full public site.
// Set REACT_APP_ABOUT_ONLY=true locally to preview the temporary public site.
export const aboutOnly = process.env.REACT_APP_ABOUT_ONLY
  ? process.env.REACT_APP_ABOUT_ONLY === "true"
  : process.env.NODE_ENV === "production";
