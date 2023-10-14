import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiSupabase,
  SiNestjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import { v4 as uuidv4 } from "uuid";
import bruImg from "../assets/images/bru.png";
import zedImg from "../assets/images/zed.png";

export const navData = [
  { title: "About", id: 1, link: "about" },
  { title: "Experience", id: 2, link: "experience" },
  { title: "Work", id: 3, link: "work" },
  { title: "Contact", id: 4, link: "contact" },
];

// social links
export const socialLinkData = [
  {
    name: "Github",
    socialLink: "https://github.com/Trend20",
    id: uuidv4(),
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/enock-omondi/",
    id: uuidv4(),
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    socialLink: "https://twitter.com/dev_enock",
    id: uuidv4(),
    icon: <FiTwitter />,
  },
];

// work section

export const workData = [
  {
    img: bruImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
  {
    img: bruImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
  {
    img: zedImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
  {
    img: zedImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
];

// skills
export const skillsData = [
  {
    icon: <SiJavascript size={70} fill="#f0d824" />,
    id: uuidv4(),
  },
  {
    icon: <SiTypescript size={70} fill="#007acc" />,
    id: uuidv4(),
  },
  {
    icon: <SiReact size={70} fill="#0074a6" />,
    id: uuidv4(),
  },
  {
    icon: <TbBrandNextjs size={70} fill="#00040a" />,
    id: uuidv4(),
  },
  {
    icon: <SiNestjs size={70} fill="#cc2121" />,
    id: uuidv4(),
  },
  {
    icon: <FaNodeJs size={70} fill="#026e00" />,
    id: uuidv4(),
  },
  {
    icon: <SiRedux size={70} fill="#764abc" />,
    id: uuidv4(),
  },
  {
    icon: <DiMaterializecss size={70} fill="#3399FF" />,
    id: uuidv4(),
  },
  {
    icon: <SiMongodb size={70} fill="#234526" />,
    id: uuidv4(),
  },
  {
    icon: <SiSupabase size={70} fill="#3cb179" />,
    id: uuidv4(),
  },
];

// experience data
export const experienceData = [
  {
    title: "Frontend Engineer",
    duration: "Present",
    response: [
      "This is my role",
      "This is my role",
      "This is my role",
      "This is my role",
    ],
  },
  {
    title: "Frontend Engineer",
    duration: "Present",
    response: [
      "This is my role",
      "This is my role",
      "This is my role",
      "This is my role",
    ],
  },
  {
    title: "UX Engineer",
    duration: "Present",
    response: [
      "This is my role",
      "This is my role",
      "This is my role",
      "This is my role",
    ],
  },
  {
    title: "Fullstack Engineer",
    duration: "Present",
    response: [
      "This is my role",
      "This is my role",
      "This is my role",
      "This is my role",
    ],
  },
  {
    title: "Backend Engineer",
    duration: "Present",
    response: [
      "This is my role",
      "This is my role",
      "This is my role",
      "This is my role",
    ],
  },
];
