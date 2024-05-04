
import { motion } from "framer-motion"
import { project } from "@/types/interface";
import React from "react";
import {
    SiChakraui,
    SiExpress,
    SiFirebase,
    SiGithub,
    SiJavascript,
    SiJson,
    SiMongodb,
    SiNetlify,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiSocketdotio,
    SiTypescript,
} from "react-icons/si";
import { Card } from "./card";
import { Eye, Link } from "lucide-react";
import LinkButton from "./link-button";
import TechStackComponent from "./motion-div";


const ProjectCard: React.FC<project> = ({
    title,
    description,
    deployedUrl, githubUrl, techStack, imageUrl
}) => {
    return (
        // <div className="project-card  text-white relative w-full rounded-xl p-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10 bg-white dark:bg-black border-2 border-teal-500">

        //     <div className="flex flex-col text-left justify-between">
        //         <h1 className="project-title text-2xl font-bold">{title}</h1>
        //         <br />
        //         <p className="project-description font-medium text-lg pb-4">{description}</p>
        //         <p className="font-bold text-sm">
        //             <span className="mr-4">
        //                 <a
        //                     href={githubUrl}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="project-github-link bg-black text-white flex items-center px-4 py-2 rounded-md shadow-sm transition-colors duration-300 hover:bg-cyan-400"
        //                 >
        //                     <SiGithub className="mr-2" /> Github
        //                 </a>
        //             </span>
        //             <span>
        //                 <a
        //                     href={deployedUrl}
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     className="project-deployed-link flex items-center px-4 py-2 rounded-md shadow-sm transition-colors duration-300 bg-gradient-to-br from-blue-600 to-blue-200 text-white"
        //                 >
        //                     <SiNetlify className="mr-2" /> Live Demo
        //                 </a>
        //             </span>
        //         </p>
        //         <br />
        //         <p className="font-bold">Tech Stack</p>
        //         <br />
        //         <div className="project-tech-stack flex">

        //             {techStack?.map(({ name, Icon }) => <span key={name} className="mr-4 flex items-center">
        //                 <Icon className="text-2xl mr-2" />
        //                 {name}
        //             </span>)}

        //         </div>
        //     </div>

        //     <img
        //         className="w-1/2 max-h-46 h-1/2"
        //         src={imageUrl}
        //         alt="d"
        //     />
        //     {/* <div
        //         className="absolute z-0 top-0 left-0 w-full h-full bg-cover filter blur-md opacity-60"
        //         style={{
        //             backgroundImage: `url(${backgrounds[index % 4]})`
        //         }}
        //     ></div> */}
        // </div>
        <Card>

            <div className="text-zinc-100 max-w-md p-2 mx-auto w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-500 transform ">
                <img className="w-full h-56 object-cover object-center" src={imageUrl} alt={title} />
                <div className="p-4">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold ">{title}</h2>
                        <p className=" mt-2">{description}</p>
                    </div>

                    <div className="flex space-x-4 mb-2">

                        <LinkButton href={githubUrl}>
                            Github
                        </LinkButton>

                        <LinkButton href={deployedUrl}>
                            Deployed
                        </LinkButton>

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4 p-2">
                            {/* {techStack.map(({ name, Icon }, index) => (
                                <MotionDiv key={index}>
                                    <Icon />
                                    <p className="ml-2 whitespace-nowrap">{name}</p>
                                </MotionDiv>


                            ))} */}

                            <TechStackComponent techStack={techStack} />
                        </div>
                    </div>
                </div>
            </div>

        </Card >

    )
}

export default ProjectCard;