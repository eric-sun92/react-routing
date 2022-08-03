import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Book } from "./pages/Book";
import BookLayout from "./pages/BookLayout";
import { BookList } from "./pages/BookList";
import BookRoutes from "./pages/BookRoutes";
import { Home } from "./pages/Home";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />}></Route>

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
