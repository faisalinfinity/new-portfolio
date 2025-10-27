
import { project } from "@/types/interface";
import React from "react";
import { Card } from "./card";
import LinkButton from "./link-button";
import TechStackComponent from "./motion-div";

const ProjectCard: React.FC<project> = ({
  title,
  description,
  deployedUrl,
  githubUrl,
  techStack,
  imageUrl,
}) => {
  return (
    <Card>
      <div className="text-zinc-100 flex flex-col justify-between max-w-md p-2 mx-auto w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-500 transform ">
        <img
          className="w-full h-56 object-cover object-center"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold ">{title}</h2>
            <p className=" mt-2">{description}</p>
          </div>

          <div className="flex space-x-4 mb-2">
            <LinkButton href={githubUrl}>Github</LinkButton>

            <LinkButton href={deployedUrl}>Deployed</LinkButton>
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
    </Card>
  );
};

export default ProjectCard;
