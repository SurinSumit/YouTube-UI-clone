import './App.css';
import Header from './Header';
import Sidebar from './sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/Search/:searchTerm" element={<Search />} />
          <Route path="/" element={<Home_page />} />
        </Routes>
      </Router>

    {/* <Header />
     <div className="app_page">
      <Sidebar />
      <RecommendedVideos />
     </div> */}
    </div>
  );
}

function Home_page() {
  return (
    <div>
     <div className="app_page">
      <Sidebar />
      <RecommendedVideos />
     </div> 
    </div>
  );
}

function Search(){
  return (
    <div>
      <div className="app_page">
        <Sidebar />
        <SearchPage />
     </div> 
    </div>
  );
}

export default App;
