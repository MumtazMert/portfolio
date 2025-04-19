"use client"

import { motion } from "framer-motion"

export const MotionWrapper = ({
                                  children,
                                  isInView,
                              }: {
    children: React.ReactNode
    isInView: boolean
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl mx-auto"
        >
            {children}
        </motion.div>
    )
}