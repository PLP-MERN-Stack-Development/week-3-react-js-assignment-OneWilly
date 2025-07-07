import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Button from "./Button";

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?q=${search}&_page=${page}&_limit=10`
        );
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search]);

  return (
    <Card className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">API Data</h2>
      
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded-md"
      />
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="p-4 border rounded-md">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-between">
            <Button 
              onClick={() => setPage(p => Math.max(1, p - 1))} 
              disabled={page === 1}
            >
              Previous
            </Button>
            <span>Page {page}</span>
            <Button onClick={() => setPage(p => p + 1)}>Next</Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default ApiData;
