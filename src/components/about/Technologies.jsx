import { skillsData } from "../../data/myData";
import React from "react";

const Technologies = () => {
  return (
    <div className="languages grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skillsData.map((tech, index) => (
        <div
          key={index}
          className="border border-[#1a2d4f] lg:w-full rounded-full px-4 py-2 flex items-center lg:space-x-3 space-x-1"
        >
          <span>{tech.icon}</span>
          <p className="text-xs">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
