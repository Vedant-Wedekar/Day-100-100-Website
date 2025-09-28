const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <span
      className={`relative inline-block font-bold ${
        disabled ? '' : 'shiny-text'
      } ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
