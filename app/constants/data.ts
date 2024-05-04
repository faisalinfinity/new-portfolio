
import { project } from "@/types/interface";
import { IconType } from "react-icons";
import { SiBootstrap, SiChakraui, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiJson, SiMongodb, SiMui, SiNodedotjs, SiReact, SiRedux, SiSocketdotio, SiTypescript } from "react-icons/si";
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
  "JSON": SiJson
}


export const projectsData: project[] = [
  {
    title: "Healthistic (HealthKart.in Clone) Full Stack App ",
    description: "Healthistic- a great place for people serious about health and fitness. We're a young start-up of around 400 people that work for your needs in fitness and well-being",
    techStack: [{ name: "Mongodb", }, { name: "Express", }, { name: "React", }, { name: "NodeJS", }, { name: "Chakra", }],

    imageUrl: "https://res.cloudinary.com/dq674z2lp/image/upload/v1680457610/18-admin-add-pc_uwpsgz.png",
    githubUrl: "https://github.com/faisalinfinity/cuddly-smoke-9747",
    deployedUrl: "https://frontend-snowy-eta.vercel.app/",
  },
  {
    title: "Captain America - Game  (Full Stack App)",
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
    title: "Productify (Ebay.com Clone)",
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
    title: "Order Matching System like Stock Market (Full Stack App)",
    description: "This is an order matching system web application that allows users to place orders, view pending orders, and see completed orders with matched prices with dynamic chart built within 2-Days",
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
    title: "Musafir (Make my trip Clone)",
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
  {
    title: "Mediagenix (Buffer.com Clone)",
    description: "Mediagenix helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams",
    techStack: [
      { name: "React", },
      { name: "Javascript", },
      { name: "CSS", },
      { name: "HTML", },
      { name: "Chakra", },  // Assuming no icon for Bootstrap as it was not provided
    ],
    imageUrl: "https://i.postimg.cc/pd8M0mz6/mediagenix-dark.png",
    githubUrl:
      "https://github.com/faisalinfinity/limitless-temper-4281/tree/main/mediagenix",
    deployedUrl: "https://mediagenix.netlify.app/",
  },
  {
    title: "Hiring Heroes (Fiverr.com Clone)",

    description: "Hiring Heroes is a global online marketplace for freelance services. Fiverr’s platform connects freelancers to people or businesses looking to hire.",
    techStack: [
      { name: "Bootstrap", },
      { name: "Javascript", },
      { name: "CSS", },
      { name: "HTML", },
      { name: "JSON", }, // Listed again as per your input
    ],
    imageUrl: "https://i.postimg.cc/4x0X2CMm/hh-dark.png",
    githubUrl: "https://github.com/Tushit99/tedious-advertisement-2369",
    deployedUrl: "https://helpful-cheesecake-78e935.netlify.app/",
  },
  {
    title: "TimeCamp.com (Clone)",
    description: "TimeCamp is a simple, yet feature-rich time tracking app to help you gain insights into yourprojects and tasks.",
    techStack: [
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "JSON", }, // Duplicate entry for Bootstrap as provided
    ],
    imageUrl: "https://i.postimg.cc/vmmG3Y3R/tc-light.png",
    githubUrl: "https://github.com/faisalinfinity/utmost-creature-1022",
    deployedUrl: "https://incomparable-sable-d0bb36.netlify.app/",
  },
];