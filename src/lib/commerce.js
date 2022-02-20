import Commerce from "@chec/commerce.js";

//Setup of the Commerce.js library to handle the heavy work on the backend.
export const commerce = new Commerce(
  process.env.REACT_APP_COMMERCEJS_PUBLIC_KEY,
  true
);
