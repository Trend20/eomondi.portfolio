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
  SiTailwindcss,
  SiHashnode,
  SiJest,
  SiDocker,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiMaterializecss } from "react-icons/di";
import { v4 as uuidv4 } from "uuid";
import bruImg from "../assets/images/bru.png";
import stylerImg from "../assets/images/styler.png";
import swipeImg from "../assets/images/swipe.png";
import sulmucImg from "../assets/images/sulmuc.png";
import cronyImg from "../assets/images/crony.png";

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
    icon: <FiGithub size={25}/>,
  },
  {
    name: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/enock-omondi/",
    id: uuidv4(),
    icon: <FiLinkedin size={25}/>,
  },
  {
    name: "Twitter",
    socialLink: "https://twitter.com/dev_enock",
    id: uuidv4(),
    icon: <FiTwitter size={25}/>,
  },
  {
    name: "Hashnode",
    socialLink: "https://hashnode.com/@DevEnock",
    id: uuidv4(),
    icon: <SiHashnode size={25}/>,
  },
];

// work section

export const workData = [
  {
    img: bruImg,
    description:
      "Official Website for Brú Finance.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
    stack:[
      {
        id:1,
        name:'NextJS'
      },
      {
        id:2,
        name:'MUI'
      },
      {
        id:3,
        name:'Typescript'
      },
      {
        id:4,
        name:'Redux'
      },
      {
        id:5,
        name:'Tailwind'
      }
    ]
  },
  {
    img: swipeImg,
    description:
      "Swipe is a banking agency based in Rwanda.",
    title: "SwipeBpr",
    projectLink: "https://swipe-bpr-portal.rbrc.io/login",
    gitLink: "https://github.com/Trend20/swipe",
    stack:[
      {
        id:1,
        name:'Thymeleaf'
      },
      {
        id:2,
        name:'Bootstrap'
      },
      {
        id:3,
        name:'CSS3'
      },
      {
        id:4,
        name:'HTML5'
      }
    ]
  },
  {
    img: stylerImg,
    description:
      "Built a fashion marketplace.",
    title: "Styler",
    projectLink: "https://react-typescript-e-commerce-template.vercel.app/",
    gitLink: "https://github.com/Trend20/Styler",
    stack:[
      {
        id:1,
        name:'React'
      },
      {
        id:2,
        name:'Typescript'
      },
      {
        id:3,
        name:'MUI'
      },
      {
        id:4,
        name:'Redux Toolkit'
      }
    ]
  },
  {
    img: sulmucImg,
    description:
      "This is the official website for Sulmuc Inc.",
    title: "Sulmuc",
    projectLink: "https://sulmuc.vercel.app/",
    gitLink: "https://github.com/Trend20/sulmuc",
    stack:[
      {
        id:1,
        name:'Typescript'
      },
      {
        id:2,
        name:'React'
      },
      {
        id:3,
        name:'Tailwind'
      },
    ]
  },
  {
    img: cronyImg,
    description:
      "A platform that helps developers easily access third-party libraries.",
    title: "LCluster",
    projectLink: "https://code-crony.vercel.app/",
    gitLink: "https://github.com/Trend20/Lcluster-frontendl",
    stack:[
      {
        id:1,
        name:'NextJS'
      },
      {
        id:2,
        name:'Tailwind'
      },
      {
        id:3,
        name:'Prisma'
      },
      {
        id:4,
        name:'Typescript'
      }
    ]
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
    icon: <TbBrandNextjs size={70} fill="#120f0f" />,
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
    icon: <SiCypress size={70} fill="#00a400" />,
    id: uuidv4(),
    name: "Cypress",
  },
  {
    icon: <SiJest size={70} fill="#572931" />,
    id: uuidv4(),
    name: "Jest",
  },
  {
    icon: <SiSupabase size={70} fill="#3cb179" />,
    id: uuidv4(),
    name: "Supabase",
  },
  {
    icon: <SiDocker size={70} fill="#007acc" />,
    id: uuidv4(),
    name: "Docker",
  },
];

// experience data
export const experienceData = [];
