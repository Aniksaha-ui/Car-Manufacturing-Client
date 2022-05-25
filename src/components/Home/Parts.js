import React, { useEffect, useState } from "react";
import ShowParts from "./ShowParts";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-temple-55264.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div className="mt-19">
      <div className="flex align-center justify-center mb-8">
        <h3 className="text-4xl text-secondary text-center">Parts</h3>
      </div>
      <div className="mt-8 px-12 grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
        {parts.slice(0, 6).map((part) => (
          <ShowParts part={part} key={part._id} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
