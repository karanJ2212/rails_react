export const API_URL =
  import.meta.env.MODE === "test"
    ? "http://mocked-api-url"
    : import.meta.env.VITE_REACT_APP_API_URL;
console.log(import.meta.env);
