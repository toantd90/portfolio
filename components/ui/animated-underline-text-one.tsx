"use client";
"use client";
import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, Variants, useInView, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHoverSound } from "@/hooks/useHoverSound";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: underlineDuration, ease: "easeInOut" },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-2", props.className)}
      >
        <div className="relative">
          <motion.h1
            className={cn("text-4xl font-bold text-center", textClassName)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {text}
          </motion.h1>

          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 300 20"
            className={cn("absolute -bottom-4 left-0", underlineClassName)}
          >
            <motion.path
              d={underlinePath}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                d: underlineHoverPath,
                transition: { duration: 0.8 },
              }}
            />
          </motion.svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

// Inline animated underline for links — draws on hover, matches page violet palette
interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedLink = ({ href, children, className }: AnimatedLinkProps) => {
  const ref = useRef<SVGPathElement>(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();
  const playSound = useHoverSound();

  useEffect(() => {
    if (isInView) {
      controls.start({
        pathLength: [0, 1, 1, 0],
        opacity:    [0, 1, 1, 0],
        transition: {
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.4,
        },
      });
    } else {
      controls.stop();
      controls.set({ pathLength: 0, opacity: 0 });
    }
  }, [isInView, controls]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={playSound}
      className={cn("relative inline-block text-violet-400 hover:text-violet-300 transition-colors duration-200", className)}
    >
      {children}
      <svg
        width="100%"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        className="absolute -bottom-0.5 left-0 text-violet-500"
      >
        <motion.path
          ref={ref}
          d="M 0,3 Q 25,0 50,3 Q 75,6 100,3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
        />
      </svg>
    </a>
  );
};

AnimatedLink.displayName = "AnimatedLink";

// Plain-text variant — same looping underline but without link behaviour
interface AnimatedUnderlineTextProps {
  children: React.ReactNode;
  className?: string;
  underlineClassName?: string;
  delay?: number;
}

const AnimatedUnderlineText = ({ children, className, underlineClassName, delay = 0 }: AnimatedUnderlineTextProps) => {
  const ref = useRef<SVGPathElement>(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        pathLength: [0, 1, 1, 0],
        opacity:    [0, 1, 1, 0],
        transition: {
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.4,
          delay,
        },
      });
    } else {
      controls.stop();
      controls.set({ pathLength: 0, opacity: 0 });
    }
  }, [isInView, controls, delay]);

  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <svg
        width="100%"
        height="8"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        className={cn("absolute -bottom-1 left-0 text-violet-500", underlineClassName)}
      >
        <motion.path
          ref={ref}
          d="M 0,4 Q 25,0 50,4 Q 75,8 100,4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
        />
      </svg>
    </span>
  );
};

AnimatedUnderlineText.displayName = "AnimatedUnderlineText";

export { AnimatedText, AnimatedLink, AnimatedUnderlineText };
