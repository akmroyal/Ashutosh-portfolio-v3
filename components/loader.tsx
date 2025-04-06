"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Cpu } from "lucide-react"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex space-x-4 mb-4">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <Code className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <Terminal className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Cpu className="h-8 w-8 text-primary" />
          </motion.div>
        </div>
        <motion.div
          className="h-1 bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.p
          className="mt-4 text-lg font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}

