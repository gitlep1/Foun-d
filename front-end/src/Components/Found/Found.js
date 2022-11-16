import React from "react";
import { Link } from "react-router-dom";

const Found = ({ foundItems }) => {
  return (
    <article className="Found">
      <h4>{foundItems.itemname}</h4>
      <div className="Found_image"></div>
      <button>
        <Link to={`/Found/${foundItems.id}`}>READ MORE</Link>
      </button>
    </article>
  );
};

export default Found;
