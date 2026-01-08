import React from "react";
function Card({img,title,description}) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-6">
      <img
        src={img}
        alt="card"
        className="rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Read More
      </button>
    </div>
  );
}

export default Card;
