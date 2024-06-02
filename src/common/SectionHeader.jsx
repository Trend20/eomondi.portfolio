import React from "react";

const SectionHeader = ({ heading, overlayText }) => {
    return (
        <div className="head">
            <h1>{heading}</h1>
            <p>
                <span></span>{overlayText}
            </p>
        </div>
    )
}

export default SectionHeader;