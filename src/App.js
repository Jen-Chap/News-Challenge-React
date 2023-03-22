import { useEffect, useState } from "react";
import './App.css';
import { getNewsDataAsync } from "./utils/newsData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlePage from "./Components/ArticlePage/ArticlePage";
import HomePage from "./Components/Homepage/HomePage";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState({})

  const getNewsData = async () => {
    const data = await getNewsDataAsync();

    if (data?.error) {
      setError(data);
      setData([]);
    } else {
      setData(data);
      setError({});
    }
  }

  useEffect(() => {
    getNewsData();
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            (!error || Object.keys(error).length === 0) ?
              <HomePage data={data} /> : <><p>Error: Data cannot be found</p></>
          } />
          <Route path="/article/:id" element={
            (!error || Object.keys(error).length === 0) ?
              <ArticlePage data={data} /> : <><p>Error: Data cannot be found</p></>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;

