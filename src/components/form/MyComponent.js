import {AnimatePresence, motion} from "framer-motion";

const MyComponent = ({counter}) => (
    <AnimatePresence>
        {(counter <= 1) && (
            <motion.div
                key="child"
                initial={{
                    opacity: 1,
                    bottom: 0
                }}
                animate={{
                    opacity: 0,
                    bottom: "100vh",
                    transition: {
                        duration: 3.7,
                        ease: [0.12, 1, 0.2, 1]
                    }
                }}
                exit={{
                    opacity: 0
                }}
            >
                {counter}
            </motion.div>
        )}
    </AnimatePresence>
);

export default MyComponent;