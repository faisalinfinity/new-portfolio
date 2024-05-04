import React from "react";
import { IconType } from "react-icons";

interface techStack{
    name:string,
    Icon:IconType ,
}

export interface project{
    title:string,
    description:string,
    imageUrl?:string,
    githubUrl:string,
    deployedUrl:string,
    techStack:techStack[],
}