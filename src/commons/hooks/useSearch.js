import { useState } from "react";

export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleSearch = async () => {
    setResults([]);
    setCategories([]);
    try {
      const response = await fetch(`http://localhost:8080/api/items?q=${encodeURIComponent(query)}&limit=4`);
      if (!response.ok) {
        throw new Error("Error while searching products.");
      }
      const data = await response.json();
      console.log(data);
      setCategories(data.categories);
      setResults(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    results,
    categories,
    handleSearch
  }
}