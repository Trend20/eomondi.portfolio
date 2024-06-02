import {skillsData} from "../../data/myData";
import React from "react";

const Technologies = () => {
    return (
        <div className="languages">
            {skillsData.map((tech, index) => {
                return (
                    <div className="border border-[#1a2d4f] w-full rounded-full px-4 py-2 flex items-center space-x-3" key={index}>
                        <span>
                            {tech.icon}
                        </span>
                        <p>{tech.name}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Technologies;