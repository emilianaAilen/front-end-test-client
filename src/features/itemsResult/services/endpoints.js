export const endpoints = {
  getItems: (query, limit = 4) => `/items?q=${encodeURIComponent(query)}&limit=${limit}`,
};
