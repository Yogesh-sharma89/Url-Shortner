import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <span className="hero-eyebrow">Simple. Fast. Clean.</span>

        <h1 className="hero-title">
          Turn long links into <span className="text-brand">short links.</span>
        </h1>

        <p className="hero-description">
          Create clean, shareable URLs in seconds. Track clicks and manage all
          your links from one simple place.
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
