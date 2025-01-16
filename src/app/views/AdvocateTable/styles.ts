export const containerStyle: React.CSSProperties = {
  position: "relative",
  display: "inline-block",
};

export const inputStyle: React.CSSProperties = {
  border: "1px solid black",
  paddingRight: "40px", // Give space for the button inside the input
  paddingLeft: "8px", // Add left padding to avoid text overlap on the left side
  width: "250px", // Set a fixed width for the input
};

export const buttonStyle: React.CSSProperties = {
  position: "absolute",
  right: "8px", // Position button on the right side inside the input
  top: "50%",
  transform: "translateY(-50%)", // Center button vertically
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  margin: "0",
};
