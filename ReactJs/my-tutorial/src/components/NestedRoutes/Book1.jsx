import React from "react";
import { Link } from "react-router-dom";
export const Book1 = () => {
  return (
    <div className="p-4">
      <h2>Nested Routes</h2>
      <p className="fs-4">Book - 1</p>
      <Link to="/">Home</Link> /  <Link to="/book-category/cat-1" className="text-dark">
        Book-1
      </Link> / <Link to="/book-category/cat-2">Book-2</Link>
    </div>
  );
};
export default Book1;
