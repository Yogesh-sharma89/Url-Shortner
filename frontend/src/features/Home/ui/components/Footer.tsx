const Footer = () => {
  return (
    <footer className="container">
      <div className="divider" />

      <div
        className="flex items-center justify-between"
        style={{
          paddingBlock: "1.5rem",
          color: "var(--text-muted)",
          fontSize: "var(--font-size-xs)",
        }}
      >
        <span>shorten.</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
};

export default Footer;
