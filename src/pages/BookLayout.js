import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export function BookList() {
  // @ts-ignore
  const [searchParams, setSearchParams] = useSearchParams({ bookNumber: 3 });
  const number = searchParams.get("bookNumber");
  return (
    <>
      <h1>BookList</h1>
      <div>
        <Link to="/books/1">Book 1</Link>
      </div>
      <div>
        <Link to="/books/2">Book 2</Link>
      </div>
      <div>
        <Link to={`/books/${number}`}>Book {number}</Link>
      </div>
      <div>
        <Link to="/books/new">New Book</Link>
      </div>
      <Outlet context={{ hello: "World" }}></Outlet>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ bookNumber: e.target.value })}
      ></input>
    </>
  );
}

export default BookList;
