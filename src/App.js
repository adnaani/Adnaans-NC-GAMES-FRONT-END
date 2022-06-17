import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reviews from "./components/Reviews/Reviews";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories";
import SingleReview from "./components/SingleReviewCard/SingleReview";
import Comments from "./components/Comments/Comments";
import { UserContext } from "./context/userContext";
import { useState } from "react";
import Users from "./components/Users/Users";

function App() {
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/users" element={<Users />} />
            <Route path="/categories/:category_name" element={<Reviews />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
            <Route path="/reviews/:review_id/comments" element={<Comments />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
