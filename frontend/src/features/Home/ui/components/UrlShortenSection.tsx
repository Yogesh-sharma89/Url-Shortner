import { motion } from "framer-motion";
import CopyButton from "../../../../components/CopyButton";

const UrlShortenSection = () => {


  return (
    <section className="container">
        
      <div className="shorten-form">
        <div className="shorten-form-row">
          <input
            type="url"
            className="input"
            placeholder="Paste your long URL here..."
          />

          <button type="button" className="btn btn-primary shorten-form-button">
            Shorten URL
          </button>
        </div>
      </div>

      {/* Temporary visual result */}

      <motion.div
        className="result-card"
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
          delay: 0.2,
        }}
      >
        <div className="result-card-content">
          <span className="result-url">shorten.app/aZ3kP9</span>

          <div className="result-actions">
           <CopyButton text="shorten.app/aZ3kP9" className="btn btn-primary btn-sm"/>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UrlShortenSection;
