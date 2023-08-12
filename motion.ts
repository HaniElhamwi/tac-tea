export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10000,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-300%" : direction === "right" ? "300%" : 0,
    y: direction === "up" ? "300%" : direction === "down" ? "300%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (
  staggerChildren?: any | undefined,
  delayChildren?: any | undefined
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 200 : direction === "right" ? -200 : 0,
    y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,

    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeInAndScale = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    scale: 0.8,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const AnimatePages = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const animateProducts = {
  hidden: { transform: "scale(0)" },
  show: { transform: "scale(1)" },
  // exit: { transform: "scale(0.4)" },
};

export const bottleVariants = (direction: string, xDire?: number) => ({
  hidden: {
    y: direction === "bottom" ? "-300%" : "300%",
    opacity: 1,
    x: "50%",
  },
  show: {
    x: "50%",
    y: xDire ? xDire : 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
      delay: 0.4,
    },
  },
});

export const teaPots = () => ({
  hidden: {
    y: "50%",
    opacity: 0.3,
    x: 0,
  },
  show: {
    rotate: [0],
    x: "60%",
    y: "50%",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.4,
      delay: 0.4,
    },
  },
});

export const textAnimation = () => ({
  hidden: {
    y: "200%",
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
});
