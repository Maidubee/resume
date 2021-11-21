const Timeline = ({ isLast }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: 24,
          height: 24,
          border: "1px solid var(--textLink)",
          borderRadius: "100%",
          left: -30,
          top: 3,
          padding: 6,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            backgroundColor: "var(--textLink)",
            borderRadius: "100%",
          }}
        ></div>
      </div>
      {isLast ? null : (
        <div
          style={{
            position: "absolute",
            width: 2,
            left: -19,
            top: 26,
            bottom: -31,
            backgroundColor: "var(--textLink)",
          }}
        ></div>
      )}
    </>
  );
};

export default Timeline;
