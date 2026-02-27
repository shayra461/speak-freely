import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
    cursorColor?: string;
}

export function TypewriterText({
    text,
    className = "",
    delay = 0,
    speed = 0.05,
    cursorColor = "#38bdf8", // sky-400
}: TypewriterTextProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length * speed,
            delay: delay,
            ease: "linear",
            onComplete: () => setAnimationCompleted(true),
        });

        return controls.stop;
    }, [text.length, delay, speed]);

    return (
        <span className={className}>
            <motion.span>{displayText}</motion.span>
            <motion.span
                animate={animationCompleted ? { opacity: 0 } : { opacity: [0, 1, 0] }}
                transition={animationCompleted ? { duration: 0.2 } : { duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1em",
                    backgroundColor: cursorColor,
                    marginLeft: "2px",
                    verticalAlign: "middle",
                }}
            />
        </span>
    );
}
