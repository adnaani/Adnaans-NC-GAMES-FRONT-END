import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reviews from "./components/Reviews/Reviews";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories";
import SingleReview from "./components/SingleReiewCard/SingleReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/categories/:category_name" element={<Reviews />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/reviews/:review_id/comments" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
