import React, { useState } from 'react';
import './App.css';
import VideoList from './videoList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './searchBar';
import VideoDetails from './videoDetails';
import videosData from './data';

function App() {
  const [filteredVideos, setFilteredVideos] = useState(videosData);

  const handleSearch = (query) => {
    const filtered = videosData.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  return (
    <Router>
      <div className="App">
        <h1>YouTube Clone</h1>
        <SearchBar handleSearch={handleSearch} />
        <VideoList filteredVideos={filteredVideos} />

        <Routes>
          <Route
            path="/"
            element={<VideoList filteredVideos={filteredVideos} />}
          />
          <Route
            path="/video/:id"
            element={<VideoDetails videosData={videosData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
