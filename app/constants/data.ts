
import { project } from "@/types/interface";
import { IconType } from "react-icons";
import { SiBootstrap, SiChakraui, SiCss3, SiExpress, SiFirebase, SiGooglegemini, SiHtml5, SiJavascript, SiJson, SiMongodb, SiMui, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSocketdotio, SiTailwindcss, SiTypescript } from "react-icons/si";
export const IconMap: { [key: string]: IconType } = {
  "Mongodb": SiMongodb,
  "Typescript": SiTypescript,
  "React": SiReact,
  "NodeJS": SiNodedotjs,
  "Socket.io": SiSocketdotio,
  "Redux": SiRedux,
  "Firebase": SiFirebase,
  "Javascript": SiJavascript,
  "Chakra": SiChakraui,
  "Express": SiExpress,
  "MUI": SiMui,
  "CSS": SiCss3,
  "HTML": SiHtml5,
  "Bootstrap": SiBootstrap,
  "JSON": SiJson,
  "GeminiAPI":SiGooglegemini,
  "TailwindCSS":SiTailwindcss, 
  "NextJS":SiNextdotjs,
}


export const projectsData: project[] = [
  {
    title: "Developer Flow",
    description: "A Modern Social QnA Platform for Developers with AI Answers generation similar to Stack Overflow",
    techStack: [{ name: "Mongodb", }, { name: "NextJS", }, { name: "NodeJS", }, { name: "GeminiAPI", }, { name: "TailwindCSS", }],

    imageUrl: "https://res.cloudinary.com/dq674z2lp/image/upload/v1736859024/devflow-dark_y45wos.png",
    githubUrl: "https://github.com/faisalinfinity/developer-flow",
    deployedUrl: "https://developer-flow.vercel.app/",
  },
  {
    title: "Healthistic",
    description: "Healthistic- a great place for people serious about health and fitness.",
    techStack: [{ name: "Mongodb", }, { name: "Express", }, { name: "React", }, { name: "NodeJS", }, { name: "Chakra", }],

    imageUrl: "https://res.cloudinary.com/dq674z2lp/image/upload/v1680457610/18-admin-add-pc_uwpsgz.png",
    githubUrl: "https://github.com/faisalinfinity/cuddly-smoke-9747",
    deployedUrl: "https://frontend-snowy-eta.vercel.app/",
  },
  {
    title: "Captain America - Game",
    description: "Captain America - A Multiplayer Game with Realtime Global chat and scores built within 48hrs.",
    techStack: [
      { name: "Mongodb", },
      { name: "Typescript", },
      { name: "React", },
      { name: "NodeJS", },
      { name: "Socket.io", },  // Assuming no icon for Bcrypt as it was not provided
    ],

    imageUrl: "https://res.cloudinary.com/dq674z2lp/image/upload/v1681144295/mobile_3_ty3cgl.png",
    githubUrl: "https://github.com/faisalinfinity/Captain-America-The-Game",
    deployedUrl: "https://captainamerica.vercel.app",

  },
  {
    title: "Productify (Ecommerce Website)",
    description: "Productify is an Ecommerce Website which serves as a platform by offering buyers and sellers a wide range of choice to buy and sell goods through listing format, item condition and delivery format.",
    techStack: [
      { name: "Redux", },
      { name: "Firebase", },
      { name: "React", },
      { name: "Javascript", },
      { name: "Chakra", },  // Assuming no icon for Bcrypt as it was not provided
    ],
    imageUrl: "https://res.cloudinary.com/dq674z2lp/image/upload/v1680538738/mobile_2_j3yfx3.png",
    githubUrl: "https://github.com/faisalinfinity/hilarious-sort-6480",
    deployedUrl: "https://productify.vercel.app/",
  },
  {
    title: "Order Matching System (Stock Market)",
    description: "This is an order matching system web application that allows users to place orders, view pending orders, and see completed orders with matched prices with dynamic chart.",
    techStack: [
      { name: "Mongodb", },
      { name: "Express", },
      { name: "React", },
      { name: "NodeJS", },
      { name: "Chakra", }, // Assuming no icon for Bcrypt as it was not provided
    ],
    imageUrl: "https://res.cloudinary.com/dq674z2lp/image/upload/v1682970518/mobile_10_xkgsec.png",
    githubUrl: "https://github.com/faisalinfinity/order-matching-system",
    deployedUrl: "https://order-matching-system-omega.vercel.app",
  },
  {
    title: "Musafir (Travel Website)",
    description: "Musafir is a website for tours and travel created with one thought that is to empower Indian traveler with instant bookings and comprehensive choices.",
    techStack: [
      { name: "React", },
      { name: "Javascript", },
      { name: "Redux", },
      { name: "Firebase", },
      { name: "MUI", }
    ],

    imageUrl: "https://i.postimg.cc/7hWcV4sV/musafir-dark.png",
    githubUrl: "https://github.com/hr927/Musafir-mmt-clone-",
    deployedUrl: "https://musafir-mmt.netlify.app",
  },

 
];