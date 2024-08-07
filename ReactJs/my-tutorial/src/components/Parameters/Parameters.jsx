import React from "react";
import { useParams } from "react-router-dom";

export const Parameters = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h3>Parameter Component</h3>
      User ID is <b>{id ? id : "is empty"}</b>
    </div>
  );
};
export default Parameters;
