import React from "react";
import { Link } from "react-router-dom";
export const Book2 = () => {
  return (
    <div className="p-4">
      <h2>Nested Routes</h2>
      <p className="fs-4">Book - 2</p>
      <Link to="/">Home</Link> / <Link to="/book-category/cat-1">Book-1</Link> / <Link to="/book-category/cat-2" className="text-dark">Book-2</Link>
    </div>
  );
};
export default Book2;
