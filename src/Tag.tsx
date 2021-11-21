const Tag = ({ color = "primary", children }) => {
  return (
    <span
      className="tag"
      style={{
        backgroundColor: color === "secondary" ? "#48BFE3" : "var(--textLink)",
        borderRadius: 4,
        padding: "0px 4px 2px 4px",
        boxSizing: "border-box",
        fontSize: "smallest",
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
