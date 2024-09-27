import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import image1 from "../assets/notes.jpg";
import image2 from "../assets/api_endpoint.webp";
import image3 from "../assets/ochi.png";
import image4 from "../assets/weather.jpg";


export const NAVIGATION_LINKS = [
  { label: "// About", href:"#about" },
  { label: "// Projects", href: "#projects" },
  { label: "// Skills", href: "#skills" },
  { label: "// Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Mayank Gupta",
  info: "res.send ( 'Full-stack Web Developer 👨🏻‍💻' );",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency.",
  text2:
    "// Hello 👋🏻 ! I'm Mayank Gupta, a full-stack web-developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project. //",
};

export const PROJECTS = [
  {
    title: "Notes-App",
    subtitle:
      "A full-stack notes taking app built with React, Node.js,Express.js and MongoDB.",
    image: image1,
    links:"https://github.com/Mayank6387/Notes-App.git",
  },
  {
    title: "Book-Library API",
    subtitle:
      "A REST-API involving CRUD operations built using Node.js,Express.js,MongoDB and TypeScript",
    image: image2,
    links:"https://github.com/Mayank6387/Book-RESTAPI.git",
  },
  {
    title: "Weather App",
    subtitle:
      "A weather-app designed with ReactJS,Weather API and Tailwind CSS.",
    image: image4,
    links:"https://github.com/Mayank6387/Weather-App.git",
  },
  {
    title: "Ochi-Clone UI",
    subtitle: "A clone of Website named Ochi using ReactJS.",
    image: image3,
    links:"https://github.com/Mayank6387/OCHI-Clone-UI.git",
  },
  
];

export const SKILLS = [
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <img width="40" height="40" src="https://img.icons8.com/officexs/16/express-js.png" alt="express-js"/>,
    name: "Express.js",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <img src="https://imgs.search.brave.com/_C_X_Vg48c2XWnvaqxiqHOCOkv-2FYM5nzs2aOHpIXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZhL0phdmFTY3Jp/cHQtbG9nby5wbmc" className="w-9 h-9"></img>,
    name: "JavaScript",
  },
];




export const SOCIAL_MEDIA_LINKS = [
  {
    href:"https://www.linkedin.com/in/mayank-gupta-296a5432b/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Mayank75268772",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Mayank6387",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
];
