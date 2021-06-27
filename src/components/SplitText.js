import React from 'react'
import { motion } from 'framer-motion'

const SplitText = ({children}) => {
        return (
            <div
                style={{display: 'inline-block', overflow: 'hidden'}}
            >
                <motion.div
                    style={{display: 'inline-block', willChange: 'transform'}}
                >
                    {children}
                </motion.div>
            </div>

    )
};

export default SplitText;