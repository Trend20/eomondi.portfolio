import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiSupabase,
  SiNestjs,
  SiCypress,
  SiGithub,
  SiTailwindcss,
  SiHashnode,
  SiJest,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import { v4 as uuidv4 } from "uuid";
import bruImg from "../assets/images/bru.png";
import contriImg from "../assets/images/contri.png";
import fmattersImg from "../assets/images/fmatters.png";
import stylerImg from "../assets/images/styler.png";
import swipeImg from "../assets/images/swipe.png";

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
  {
    name: "Hashnode",
    socialLink: "https://hashnode.com/@DevEnock",
    id: uuidv4(),
    icon: <SiHashnode />,
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
    status: "Complete",
  },
  {
    img: swipeImg,
    description:
      "Swipe is a banking agency based in Rwanda. I build the frontend of the website from scratch using Html, css, Thymeleaf and Javascript.",
    title: "SwipeBpr",
    projectLink: "https://swipe-bpr-portal.rbrc.io/login",
    gitLink: "https://github.com/Trend20/swipe",
    status: "Complete",
  },
  {
    img: stylerImg,
    description:
      "Built a fashion marketplace where you can find different outfits from various vendors in Kenya.",
    title: "Styler",
    projectLink: "https://react-typescript-e-commerce-template.vercel.app/",
    gitLink: "https://github.com/Trend20/Styler",
    status: "On Going",
  },
  {
    img: contriImg,
    description:
      "Building an OpenSource web platform that ranks developers based on their projects impact and activity.",
    title: "ContriQuest",
    projectLink: "https://contriquest.vercel.app/",
    gitLink: "https://github.com/Trend20/ContriQuest",
    status: "On Going",
  },
];

// skills
export const skillsData = [
  {
    icon: <SiJavascript size={70} fill="#f0d824" />,
    id: uuidv4(),
    name: "Javascript",
  },
  {
    icon: <SiTypescript size={70} fill="#007acc" />,
    id: uuidv4(),
    name: "Typescript",
  },
  {
    icon: <SiReact size={70} fill="#0074a6" />,
    id: uuidv4(),
    name: "React",
  },
  {
    icon: <TbBrandNextjs size={70} fill="#00040a" />,
    id: uuidv4(),
    name: "NextJS",
  },
  {
    icon: <SiNestjs size={70} fill="#cc2121" />,
    id: uuidv4(),
    name: "NestJS",
  },
  {
    icon: <FaNodeJs size={70} fill="#026e00" />,
    id: uuidv4(),
    name: "NodeJS",
  },
  {
    icon: <SiRedux size={70} fill="#764abc" />,
    id: uuidv4(),
    name: "Redux",
  },
  {
    icon: <DiMaterializecss size={70} fill="#3399FF" />,
    id: uuidv4(),
    name: "Material UI",
  },
  {
    icon: <SiTailwindcss size={70} fill="#3399FF" />,
    id: uuidv4(),
    name: "TailwindCSS",
  },
  {
    icon: <SiMongodb size={70} fill="#234526" />,
    id: uuidv4(),
    name: "Mongodb",
  },
  {
    icon: <SiGithub size={70} fill="#120f0f" />,
    id: uuidv4(),
    name: "Github",
  },
  {
    icon: <SiCypress size={70} fill="#00a400" />,
    id: uuidv4(),
    name: "Cypress",
  },
  {
    icon: <SiJest size={70} fill="#00a400" />,
    id: uuidv4(),
    name: "Jest",
  },
  {
    icon: <SiSupabase size={70} fill="#3cb179" />,
    id: uuidv4(),
    name: "Supabase",
  },
];

// experience data
export const experienceData = [];
