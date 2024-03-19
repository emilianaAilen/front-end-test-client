export const fetchEndpoint = (
  endpoint,
  method,
  body
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(process.env.REACT_APP_API || 'http://localhost:8080/api' + endpoint, { method, headers, body });
};