import {motion} from "framer-motion";
import { UrlCardSkeleton } from "./UrlCardSkeleton";

const UrlListSkeleton = () => {
  return (
    <motion.div
            className="url-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
        >
            {Array.from({ length: 4 }).map((_, index) => (
                <UrlCardSkeleton key={index} />
            ))}
        </motion.div>
  )
}

export default UrlListSkeleton
