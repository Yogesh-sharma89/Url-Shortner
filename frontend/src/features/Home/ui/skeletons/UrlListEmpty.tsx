import { motion } from "framer-motion";
import { Link2Off } from "lucide-react";

export const UrlListEmpty = () => {
    return (
        <motion.div
            className="empty-state "
            initial={{
                opacity: 0,
                y: 12,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}
        >
            <motion.div
                className="empty-state-icon"
                initial={{
                    scale: 0.8,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.35,
                    delay: 0.05,
                }}
            >
                <Link2Off
                    size={22}
                    strokeWidth={1.8}
                />
            </motion.div>

            <h3 className="empty-state-title">
                No links yet
            </h3>

            <p className="empty-state-description">
                You haven't shortened any URLs yet.
                Paste a long URL above and create your
                first short link.
            </p>
        </motion.div>
    );
};