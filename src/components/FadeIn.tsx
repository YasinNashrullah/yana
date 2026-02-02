import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', direction = 'up' }) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
            scale: 0.9,
            rotateX: direction === 'up' || direction === 'down' ? 15 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: delay,
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={variants}
            className={`perspective-1000 ${className}`}
            style={{ perspective: '1000px' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
