'use client'
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconMap } from '../constants/data';

interface TechStackComponentProps {
    techStack: { name: string }[];
}

const TechStackComponent: React.FC<TechStackComponentProps> = ({ techStack }) => {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containerWidth = containerRef.current?.scrollWidth || 0;

        // Animate from right to left
        controls.start({
            x: [0, -containerWidth],  // Starting from 0 to -width ensures it moves left
            transition: {
                type: 'tween',
                ease: 'linear',
                duration: 25,  // Adjust duration to control speed
                repeat: Infinity,
                repeatType: "loop"  // Ensures the animation loops seamlessly
            }
        });
    }, [controls]);

    return (
        <div ref={containerRef} className="flex items-center overflow-hidden whitespace-nowrap">
            <motion.div className="flex space-x-4 p-2" animate={controls}>
                {/* Render the tech stack twice for seamless looping */}
                {[...techStack, ...techStack].map(({ name }, index) => {
                    const Icon = IconMap[name];
                    return (
                        <div key={index} className="flex items-center">
                            <Icon />
                            <span className="ml-2">{name}</span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechStackComponent;