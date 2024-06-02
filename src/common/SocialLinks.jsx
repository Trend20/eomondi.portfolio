import {socialLinkData} from "../data/myData";
import React from "react";

const SocialLinks = () => {
    return (
        <div className="social_platforms">
            {socialLinkData.map((icon) => (
                <a key={icon.id} href={icon.socialLink} target="_blank" rel="noreferrer">
                    {icon.icon}
                </a>
            ))}
        </div>
    )
}

export default SocialLinks;