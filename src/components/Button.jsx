function Button({ children, type = "primary" }) {
  return (
    <button className={`button ${type}`}>
      {children}
    </button>
  );
}

export default Button;