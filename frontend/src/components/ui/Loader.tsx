import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

type FullScreenLoaderProps = {
    message?: string;
};

 const FullScreenLoader = ({
    message = "Loading...",
}: FullScreenLoaderProps) => {
    return (
        <motion.div
            className="
                fixed inset-0 z-(--z-overlay)
                grid place-items-center
                bg-(--bg-primary)
                text-(--text-primary)
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
            aria-label={message}
        >
            <div className="flex flex-col items-center justify-center gap-4 text-center">

                {/* Logo / Icon */}
                <motion.div
                    className="
                        grid h-14 w-14 place-items-center
                        rounded-xl
                        border border-(--color-primary-100)
                        bg-(--color-primary-50)
                        text-(--color-primary)
                        shadow-(--shadow-sm)
                    "
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Link2
                            size={26}
                            strokeWidth={1.8}
                        />
                    </motion.div>
                </motion.div>

                {/* Spinner */}
                <motion.div
                    className="
                        h-7 w-7
                        rounded-full
                        border-2
                        border-(--border-primary)
                        border-t-(--color-primary)
                    "
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Message */}
                <motion.p
                    className="
                        text-sm
                        font-medium
                        text-(--text-secondary)
                    "
                    initial={{
                        opacity: 0,
                        y: 6,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.1,
                        duration: 0.25,
                    }}
                >
                    {message}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default FullScreenLoader;