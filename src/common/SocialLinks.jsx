import {socialLinkData} from "../data/myData";
import { MdEmail } from "react-icons/md";
import React from "react";

const SocialLinks = () => {
    return (
        <div className="social_platforms">
            {socialLinkData.map((icon) => (
                <a key={icon.id} href={icon.socialLink} target="_blank" rel="noreferrer">
                    {icon.icon}
                </a>
            ))}
            <a href="mailto:enockomondi305@gmail.com" target="_blank" rel="noreferrer">
                <MdEmail size={25} />
            </a>
        </div>
    )
}

export default SocialLinks;