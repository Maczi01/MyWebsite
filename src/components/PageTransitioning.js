import styled from 'styled-components';
import { motion } from "framer-motion";

const variants = {
    initial: {
        bottom: 0,
    },
    animate: {
        bottom: "100vh",
        transition: {
            duration: 3.7,
            ease: [0.12, 1, 0.2, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .1
        }
    },
    exitStop: {
        bottom: 0,
        transition: {
            duration: .6,
            delay: .9,
            ease: [0.12, 1, 0.2, 1]
        }
    }
};

const TransitionHelper = styled(motion.div)`
position: fixed;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: yellow;
`;

const InitialTransition = styled(TransitionHelper).attrs(() => ({
    initial: "initial",
    variants,
    animate: "animate",
    exit: "exit"
}))`
`;

const ExitTransition = styled(TransitionHelper).attrs(() => ({
    variants,
    exit: "exitStop"
}))`
    bottom: -101vh;
`;

const PageTransitioning = () => {
    return (
        <>
            <InitialTransition />
            <ExitTransition />
        </>
    )
};

export default PageTransitioning;